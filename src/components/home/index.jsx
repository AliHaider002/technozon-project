"use client";
import { motion } from "framer-motion";

const HomeComp = () => {
  const heroData = {};
  return (
    <div
      className={
        " container custom-margin w-full h-[50rem] grid xl:grid-cols-6 grid-cols-1 gap-0"
      }
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Start slightly below with zero opacity
        animate={{ y: 0, opacity: 1 }} // Move to the original position with full opacity
        transition={{ duration: 1 }} // Duration of the animation
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url(/assets/hero.jpg)",
          backgroundPosition: "right",
          // padding: "5rem 3rem",
        }}
        className="xl:col-span-3 flex flex-col justify-center items-center "
      >
        <div className="px-[1rem] lg:px-[3rem] xl:px-0 flex flex-col justify-normal gap-[1rem]">
          <h4 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-tight">
            {heroData && heroData.attributes
              ? heroData.attributes.title
              : "ELITE SOFTWARE SOLUTIONS"}
          </h4>
          <h4 className="text-[1rem] md:text-[1.2rem] font-[400] leading-tight px-[1rem]">
            {heroData && heroData.attributes
              ? heroData.attributes.sub_title
              : "Innovating Tomorrow's Software Solutions Today, Empowering Innovation with Big Ideas in Every Byte, and Shaping the Future with Bold Ideas and Smart Software Solutions"}
          </h4>
          <h4 className="hidden md:block lg:text-[9rem] border-black text-white leading-tight ">
            Software
          </h4>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }} // Initial scale of the image
        animate={{ scale: 1 }} // Target scale for the zoom-out effect
        transition={{ duration: 1 }} // Duration of the zoom-out animation
        className="z-0 col-span-3 xl:block hidden"
      >
        <motion.div
          style={{
            position: "absolute",
            top: "70%", // Position in the middle of the parent container vertically
            left: "-9%", // Position in the middle of the parent container horizontally
            transform: "translate(-50%, -50%)", // Offset to center the element
            width: "8rem",
            height: "8rem",
            borderRadius: "50%",
            backgroundColor: "black", // Change as per your design
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "0.8rem",
            overflow: "hidden",
          }}
          className="z-50 xl:flex hidden"
          animate={{
            rotate: 360, // Rotate the circle around its center
          }}
          transition={{
            repeat: Infinity, // Repeat the animation indefinitely
            duration: 5, // Duration of one complete rotation
            ease: "linear", // Maintain constant speed throughout
          }}
        >
          <img
            src={"/images/logo.jpg"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image covers the container without distortion
            }}
            alt="Picture of the author"
          />
        </motion.div>
        <img
          src={
            heroData &&
            heroData.attributes &&
            heroData.attributes.image &&
            heroData.attributes.image.data
              ? uploads_uri + heroData.attributes.image.data.attributes.url
              : "/images/hero_image.jpg"
          }
          className="w-full h-full object-cover"
          alt="hero_img"
        />
      </motion.div>
    </div>
  );
};

export default HomeComp;
