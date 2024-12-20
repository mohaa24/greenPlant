import Link from "next/link";


const NavBar = (): JSX.Element => {



  return (
    <nav className=" flex flex-row justify-center border-b bottom-2 bg-black/10 border-[#8080801a] backdrop-blur-xl">
      <div className="py-3 flex justify-between text-white w-full px-5 md:w-5/6">
        <div className=" flex items-center text-xl">Green|Plant</div>
        <div className=" ">
          <Link href={"info"}>
            {" "}
            <button className="bg-white text-black px-5 py-2 rounded-full border border-black hover:bg-white hover:text-black">
              Info
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
