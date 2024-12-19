import Link from "next/link";

type TTabs = {
  label: string;
  key: string;
};

const NavBar = (): JSX.Element => {



  return (
    <nav className=" flex flex-row justify-center border-b bottom-2 backdrop-blur-lg  border-gray-200 bg-white/50 z-100">
      <div className="flex justify-between w-5/6 text-xl text-black">
        <div className=" py-5 flex items-center">Green.Plant</div>
        <div className=" py-2">
          <Link href={"info"}>
            {" "}
            <button className="bg-black text-white px-5 py-2 rounded-full border border-black hover:bg-white hover:text-black">
              Info
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
