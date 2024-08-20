import NextAuth, { NextAuthOptions, Session as NextAuthSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../utils/database';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User as MongoUser } from '../../../models/User.model';


const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        if (!mongoose.connection.readyState) {
          await mongoose.connect(process.env.MONGODB_URI!);
        }

        const user = await MongoUser.findOne({ email: credentials.email });
        if (!user) {
          console.log("User not found");
          return null;
        }

        const passwordOk = bcrypt.compareSync(credentials.password, user.password);
        if (!passwordOk) {
          console.log("Password does not match");
          return null;
        }

        console.log("User authenticated:");
        return {
          id: user._id.toString(), 
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.email = (user as any).email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        (session.user as any).id = token.id as string;
        (session.user as any).email = token.email as string;
      }
      return session;
    },
  },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
