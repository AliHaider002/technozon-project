import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest } from "next/server";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

export async function getBlogById(params) {
  const docRef = doc(db, "blogs", params);
  const docSnap = await getDoc(docRef);
  const blog = docSnap.exists() ? docSnap.data() : null;

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    blog,
  };
}

const Single_Blog = async ({ params }) => {
  const blogData = (await getBlogById(params))?.blog;
  // const blogData = {};
  return (
    <div className="container flex flex-col justify-normal gap-[4rem] my-[2rem] xl:px-0 px-[2rem]">
      {blogData && (
        <>
          <div className="lg:w-[65%] md:w-[75%] w-full mx-auto flex flex-col justify-normal gap-[3rem]">
            <div className="xl:text-[3rem] md:text-[2.5rem] text-[2rem] font-bold leading-tight">
              {blogData.title}
            </div>
            <div className="text-[0.75rem]">
              {/* Updated {format(new Date(blogData.createdAt), "dd MMM yyyy")} {} */}
            </div>
          </div>

          <div className="w-full max-h-[50rem]">
            <img
              src={blogData.image}
              className="w-full h-full object-cover"
              alt={blogData.title}
            />
          </div>
          <div className="lg:w-[60%] md:w-[75%] mt-[1rem] text-[1.2rem] w-full mx-auto">
            {/* <RenderRichText content={blogData.content} /> */}
            {blogData.content}
          </div>
          <div className="lg:w-[40%] md:w-[60%] w-full flex flex-col justify-normal gap-[1rem] border p-[3rem] text-[1rem]  mx-auto ">
            <div className="text-center">
              If you enjoyed reading this story, then would love it if you would{" "}
              <span className="font-bold">share it!</span>
            </div>
            <div className="flex justify-center items-center gap-[1rem]">
              <CiFacebook size={20} />
              <CiTwitter size={20} />
              <CiInstagram size={20} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Single_Blog;
