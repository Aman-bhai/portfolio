import Image from "next/image";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <>
      <section className="flex px-12 sm:px-28 py-16 justify-evenly flex-col-reverse gap-8 lg:flex-row min-h-screen dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:text-indigo-200">
        <div className="Home-text lg:w-[55%] w-fit flex flex-col justify-center my-4 lg:my-0">
          <span className="text-xl sm:text-3xl ">Hey ! Folks</span><br />

          <h2 className="text-2xl sm:text-4xl space-x-4">
            I&apos;m <span className="text-red-500 font-semibold ">Aman Soni</span>
          </h2><br />

          <span className="flex sm:items-center gap-2">
            A <h4 className="text-red-500 font-extrabold sm:tracking-wider text-sm sm:text-xl">Web Developer</h4> & <h4 className="text-red-500 font-extrabold sm:tracking-wider text-sm sm:text-xl">Data Analytics</h4>
          </span><br />

          <p className="text-xs sm:text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p><br />

          <div className="flex gap-4 text-sm">
            <Button link={process.env.RESUME} />
          </div>
        </div>

        <div className="Home-pic lg:w-[30%] w-full flex justify-center items-center rounded-lg">
          <Image src={`/logo/logo-no-background.png`} width={250} height={250} className="shadow-lg shadow-black dark:shadow-sm dark:shadow-black" alt="profiler-image" />
        </div>
      </section>
    </>
  );
}
