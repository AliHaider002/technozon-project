import Link from "next/link";
import React from "react";

const BlogHero = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-0">
      {blogs &&
        blogs.slice(0, 3).map((v, i) => {
          return (
            <Link key={i} href={`/blog/${v.id}`}>
              <div
                // onClick={() => router.push(`/blogs/${v.id}`)}
                className="flex flex-col justify-normal gap-[1rem] cursor-pointer"
              >
                {v?.image && (
                  <>
                    <div className="w-full h-[20rem]">
                      <img
                        src={v?.image}
                        alt={v?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-[0.75rem] font-bold text-[black]/50">
                      {v.category} - by{" "}
                      <span className="text-black">{v.author_name}</span>
                    </div>
                    <div className="text-[1.2rem] font-bold hover:text-red-500 transition-all pr-[1rem]">
                      {v.title}
                    </div>
                  </>
                )}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default BlogHero;
