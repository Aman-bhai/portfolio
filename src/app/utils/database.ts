import { MongoClient } from 'mongodb';

// Define the type for the promise
const client = new MongoClient(process.env.mongoURL || '');

let clientPromise: Promise<MongoClient>;

// Check if NODE_ENV is development
if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
