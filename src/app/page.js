import HomeComp from "@/components/home";
import Countries from "@/components/home/Countries";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-normal gap-[4rem]">
      <HomeComp />
      <Countries />
      <div className="grid grid-cols-2 h-[100vh]">
        <div className="h-[100vh]">
          <img
            src="/images/services.jpg"
            className="w-full h-full object-cover"
            alt="service"
          />
        </div>
        <div className="h-[100vh]">
          <Services />
        </div>
      </div>
    </div>
  );
}
