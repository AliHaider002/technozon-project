import { MARQUES } from "@/utils/constants";
import Marquee from "react-fast-marquee";

const Countries = () => {
  return (
    <div className="bg-[#2674CF]/70 rounded-[1rem]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[1.5rem] font-bold">Countries We Serve</div>
        <div className="bg-black w-full h-[2px] rounded-full" />
      </div>
      <Marquee
        pauseOnHover={false}
        gradient={false}
        speed={100}
        autoFill
        className="flex justify-normal gap-[1rem] "
      >
        {MARQUES &&
          MARQUES.map((v, i) => {
            return (
              <div
                key={i}
                className=" flex justify-center items-center gap-[1rem] p-[2rem]"
              >
                <div>
                  <img
                    src={v.image}
                    className="w-[4rem] object-cover "
                    alt="marque1"
                  />
                </div>
              </div>
            );
          })}
      </Marquee>
    </div>
  );
};

export default Countries;
