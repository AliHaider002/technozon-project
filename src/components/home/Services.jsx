import React from "react";
import { RiTimerLine } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const Services = () => {
  const features = [
    {
      icon: <RiTimerLine style={{ fontSize: 90, color: "#2674CF" }} />,
      title: "Discover Availability",
      description:
        "Explore and choose a convenient time slot that suits your schedule",
    },
    {
      icon: <FaTag style={{ fontSize: 90, color: "#2674CF" }} />,
      title: "Book Your Session",
      description:
        "Book your preferred service effortlessly with our user-friendly system",
    },
    {
      icon: <FaGoogleScholar style={{ fontSize: 90, color: "#2674CF" }} />,
      title: "Enjoy Expert Care",
      description: "Exceptional beauty by skilled, dedicated professionals",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between gap-[2rem] py-[4rem]">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-[1rem]"
        >
          {feature.icon}
          <div className="flex flex-col justify-center items-center gap-[0.2rem]">
            <h4 className="text-[1.5rem] font-bold">{feature.title}</h4>
            <h4
              variant="body1"
              sx={{
                color: "#6D6D6D",
                maxWidth: "350px",
                wordWrap: "break-word", // Ensure long words break correctly
                margin: "12px auto",
              }}
            >
              {feature.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
