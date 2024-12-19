import Link from "next/link"

export default function Info (){
    return (
      <div className="flex justify-center pt-10">
        <div className="w-4/6">
          <Link href={'/'}>
          
            <div className="text-blue-600 pb-2 hover:text-blue-500 hover:cursor-pointer z-100">{`< Back`}</div>
          </Link>
          <section className=" pb-5">
            <h1 className="text-3xl pb-5">
              DISEASE DETECTION IN PLANTS USING MACHINE LEARNING
            </h1>
            <h2 className=" text-xl pb-2">Abstract</h2>
            <p>
              The main purpose of this project is to develop a system which can
              detect diseases in plants and provide information related to that
              by classifying images of the leaf. Each year plant diseases cause
              huge loss of harvest yield in farming. This affects global
              plant-based food production considerably. Detecting these diseases
              early can help farmers to apply preventative measures to avoid
              reduced production. However, identifying of these diseases require
              special knowledge and skill. By implementing an automated disease
              detection system using Machine Learning technique this problem
              could be solved. These systems could be very accurate hence
              reducing human error in the process. It could also be cost
              effective and practical if the system could be accessed easily
              with common tools such as a mobile device.
            </p>
          </section>
          <section className=" pb-5">
            <h2 className=" text-xl pb-2">Introduction</h2>
            <p>
              This project aims to develop an automated system for the detection
              and classification of diseases in plants using machine learning
              techniques. Plant diseases pose a significant threat to crop yield
              and food security, making early detection crucial for effective
              management. By leveraging computer vision and deep learning
              algorithms, it is aimed to create a robust machine learning model
              that can accurately identify and classify various plant diseases.
              This system will enable farmers and agricultural experts to
              quickly detect diseased plants, implement targeted intervention
              strategies, and mitigate potential crop losses.
            </p>
            <p>
              To achieve the project's goals, a diverse collection of plant
              image dataset is needed, including both healthy plants and those
              affected by different diseases. The dataset will serve as the
              foundation for training and evaluating the machine learning model.
              Data preprocessing techniques will be applied to standardize the
              dataset, including resizing images, removing noise or artifacts,
              and utilizing data augmentation methods such as rotation, scaling,
              or flipping. These steps will ensure consistency and enhance the
              model's ability to generalize and accurately classify unseen plant
              images. For Plantvillage could be utilized. This data set contains
              around 50,000 images of various species as shown below.
            </p>
            <img src={"./img1.jpg"}></img>
          </section>
        </div>
      </div>
    );
}