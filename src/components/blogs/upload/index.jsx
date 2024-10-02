"use client";

import toast, { Toaster } from "react-hot-toast";
import { upload_image } from "./action";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Upload_Blog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, formAction] = useFormState(upload_image, {
    error: {
      text: undefined,
    },
  });

  useEffect(() => {
    if (state?.data !== undefined) {
      toast.success("Blog Added...", { duration: 10000 });
      setLoading(false);
      setTimeout(() => {
        router.push("/blog");
      }, 2000);
    }
  }, [state]);

  return (
    <>
      <Toaster />
      <div className="lg:p-0 px-[1rem]">
        <div className="w-full h-[15rem]">
          <img
            src="/images/upload.jpg"
            className="w-full h-full object-cover rounded-[0.5rem]"
            alt="upload"
          />
        </div>
        <div className="w-fit text-[2rem] my-[2rem]">Upload Your Blog:</div>
        <form action={formAction}>
          <div className="flex flex-col justify-normal gap-[2rem]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2rem]">
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="border-[2px] border-black/60 p-[1rem] rounded-[0.5rem]"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                required
                className="border-[2px] border-black/60 p-[1rem] rounded-[0.5rem]"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="content"
                placeholder="Content"
                required
                className="w-full border-[2px] border-black/60 p-[1rem] rounded-[0.5rem]"
              />
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[2rem]">
              <input
                type="text"
                name="author_name"
                placeholder="Your Name"
                required
                className="w-full border-[2px] border-black/60 p-[1rem] rounded-[0.5rem]"
              />
              <div>
                <label htmlFor="image">Thumbnail:</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => setLoading(true)}
                className={`${
                  loading
                    ? ` border-[#2674CF]`
                    : `bg-[#2674CF] border-transparent`
                } border-[2px] text-white rounded-[0.5rem] hover:bg-[#272660] w-[6rem] py-[0.5rem] px-[0.7rem] transition-all duration-400  cursor-pointer`}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload_Blog;
