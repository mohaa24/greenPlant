import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className=" w-5/6 md:w-3/6 text-center flex-col border bg-[#0a0a0a]/50 border-[#8080801a] py-10 rounded-[15px] backdrop-blur-sm">
        <h1 className="pb-5 bg-gradient-to-br from-[#edededd1]  to-[#EDEDED] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Plant Disease Detection System
        </h1>

        <p className="pb-5 text-[#A1A1A1]">
          {" "}
          This application was developed as MSc. project for University of
          Greenwich by Adnan.
        </p>

        <Link href={"/analyse"}>
          <button
            className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
            onClick={() => {}}
          >
            Continue →
          </button>
        </Link>
      </div>
    </div>
  );
}
