import Single_Blog from "@/components/blogs/single_blog";
import React from "react";

const SingleBlog = ({ params }) => {

  return (
    <div>
      <Single_Blog params={params.id} />
    </div>
  );
};

export default SingleBlog;
