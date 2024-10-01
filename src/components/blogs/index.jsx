import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import BlogHero from "./BlogHero";
import BlogRecent from "./BlogRecent";

export const getBlogsData = async () => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return blogs;
};

const BlogsPage = async () => {
  const blogs = await getBlogsData();
  return (
    <div className="flex flex-col justify-normal gap-[2rem]">
      <div>
        <BlogHero blogs={blogs} />
      </div>
      <div>
        <BlogRecent blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
