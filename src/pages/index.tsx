
export default function Home() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className=" w-3/6 text-center flex-col bg-white py-10 rounded-[15px]">
        <h1 className="pb-5 bg-gradient-to-br from-black  to-gray-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Plant Disease Detection System
        </h1>

        <p className="pb-5 text-gray-400">
          {" "}
          This application was developed as MSc. project for University of
          Greenwich by Adnan.
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {}}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
