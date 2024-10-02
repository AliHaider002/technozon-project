import Link from "next/link";
import React from "react";

const BlogRecent = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-0">
      <div className="col-span-7 flex flex-col justify-normal gap-[3rem]">
        <div className="flex justify-normal items-center gap-[1rem] ">
          <div className="w-[5rem] h-[1px] rounded-full bg-black" />
          <div className="text-red-500">Recently</div>
        </div>
        <div className="text-[2.5rem] font-[500] leading-tight">
          Latest Stories
        </div>
        <div className="grid xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((v, i) => {
              return (
                <Link key={i} href={`/blog/${v.id}`}>
                  <div className="flex xl:flex-row flex-col justify-normal cursor-pointer gap-[3rem]">
                    {v?.image && (
                      <div className="w-[16rem] h-[16rem]">
                        <img
                          src={v?.image}
                          alt={v?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-normal gap-[1rem]">
                      <div className="text-[1.5rem] font-[500] hover:text-red-500 transition-all text-[black]/80 pr-[1rem]">
                        {v?.title}
                      </div>
                      <div className="text-[0.6rem] uppercase text-[black]/50 flex justify-normal gap-[1rem]">
                        <div>{v?.category} </div>
                        <div>
                          by{" "}
                          <span className="text-red-500">{v?.author_name}</span>
                        </div>
                      </div>
                      <div className="line-clamp-3 text-[1rem] font-[300] text-[black]/60 pr-[1rem]">
                        {v?.content}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogRecent;
