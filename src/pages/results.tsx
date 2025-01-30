import { useAppContext } from "@/app/context/appContext";
import AnalyseImage from "@/app/services/api";
import { useEffect } from "react";

export default function Results() {
  const {file} = useAppContext();

  let fileURL = '';
   useEffect(() => {
     if (file) {
        fileURL = URL.createObjectURL(file);
       return () => URL.revokeObjectURL(fileURL);
     }
   }, [file]);
  const predict = async (formData:FormData)=>{
    const response = await AnalyseImage(formData);
    console.log(response);
  }  
  
  
  // const predict = async () => {
  //   // setAnalyzing(true);
  //   const formdata = new FormData();
  //   formdata.append("file", file);

  //   axios({
  //     method: "post",
  //     url: "http://localhost:8080/analyze",
  //     headers: {},
  //     data: formdata,
  //   })
  //     .then((response) => {
  //       console.log(response, "res");
  //       // setResult(response.data);
  //       setTimeout(() => {
  //         // setAnalyzing(false);
  //       }, 3000);
  //     })
  //     .catch((error) => console.log(error));
  // };
  
  useEffect(()=>{
    if(file){
        const formdata = new FormData();
        formdata.append("file", file);
    predict(formdata)
    console.log(formdata, "file");
    }
  },[])
  return (
    <div className="flex justify-center pt-10">
      Results
      <img
        className={`${file ? "" : " grayscale"}`}
        src={file ? fileURL : ""}
        style={
          true
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
  );
}
