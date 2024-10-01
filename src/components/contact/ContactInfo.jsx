import { CONTACT_DETAILS } from "@/utils/constants";

const ContactInfo = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-[2rem] my-[4rem] ">
      {CONTACT_DETAILS &&
        CONTACT_DETAILS.map((v, i) => {
          return (
            <div
              key={i}
              className={`${
                i == 1
                  ? `
                  lg:w-[40vh] lg:h-[40vh]
                  w-[30vh] h-[30vh]
                   `
                  : `
                  lg:w-[30vh] lg:h-[30vh]
                  w-[20vh] h-[20vh]
                  `
              }  rounded-full flex flex-col justify-center items-center gap-[1rem] border-[2px] border-[#2674CF]`}
            >
              <div className="lg:text-[2.5rem] font-[300] text-[2rem]">
                {v.title}
              </div>
              <div className="lg:text-[1.1rem] text-[0.85rem]">{v.info}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ContactInfo;
