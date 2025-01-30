/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import uploadIcon from '../../public/upload.png';
import { useAppContext } from "@/app/context/appContext";
function Analyse() {
    const {file, setFile} = useAppContext()
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
//   const [file, setFile] = useState();
  const [fileDataURL, setFileDataURL] = useState(null);
const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    if (!fileUploaded.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    } else {
      setFile(fileUploaded);
      console.log(fileUploaded, "file");
    }
  };
  const handleClick = () => {
   
  if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }  
  };


  useEffect(() => {
    let fileReader
    let isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className=" w-5/6 md:w-3/6 text-center flex flex-col justify-center items-center border bg-[#0a0a0a]/50 border-[#8080801a] py-10 rounded-[15px] backdrop-blur-sm">
        <Link href={"/"} className="flex justify-start pl-10 w-full">
          <div className="text-[#888888] pb-2 hover:text-[#EAEAEA] hover:cursor-pointer z-100">{`←  Back`}</div>
        </Link>
        <h1 className="pb-5 bg-gradient-to-br from-[#edededd1]  to-[#EDEDED] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Upload your image...
        </h1>
        <p className=" text-white cursor-pointer"> or Use a random image..</p>
        <div
          className="flex justify-center m-10 border border-dotted rounded-lg p-5 border-white-2 w-4/6 cursor-pointer"
          onClick={handleClick}
        >
          <input
            type="file"
            ref={hiddenFileInput}
            className="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <img
            className={`${fileDataURL ? "" : " grayscale"}`}
            src={fileDataURL ? fileDataURL : uploadIcon.src}
            style={
              fileDataURL
                ? {
                    maxWidth: 300,
                    maxHeight: 300,
                    width: "auto",
                    borderRadius: 12,
                  }
                : {
                    maxWidth: 100,
                    maxHeight: 100,
                    width: "auto",
                    borderRadius: 12,
                  }
            }
          ></img>
        </div>
        <p className="text-white m-5">
          ***Image files with png, jpeg, jpg format are supported
        </p>
        <Link href={"/results"} className={`${!file ? ' pointer-events-none': ''}`} >
          <button
            className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
            onClick={() => {}}
          >
            Predict{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Analyse;
