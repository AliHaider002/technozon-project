import React from "react";

const HomeComp = () => {
  const heroData = {};
  return (
    <div
      className={
        " container custom-margin w-full h-[50rem] grid xl:grid-cols-5 grid-cols-1 gap-0"
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
          backgroundImage: isTabScreen && "url(/assets/hero.jpg)",
          backgroundPosition: isTabScreen && "right",
          // padding: "5rem 3rem",
        }}
        className="xl:col-span-2 flex flex-col justify-center items-center "
      >
        <div className="px-[1rem] lg:px-[3rem] xl:px-0 flex flex-col justify-normal gap-[1rem]">
          <Typography className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-tight">
            {heroData && heroData.attributes
              ? heroData.attributes.title
              : "This is test site"}
          </Typography>
          <Typography className="text-[1rem] md:text-[1.2rem] font-[400] leading-tight">
            {heroData && heroData.attributes
              ? heroData.attributes.sub_title
              : "Discover the art of beauty thsi is test description thsi is test descriptionthsi is test description thsi is test description"}
          </Typography>
          <button
            className="w-fit bg-black py-[1.2rem] px-[1.7rem] text-white"
            onClick={() => window.open("/contact")}
          >
            BOOK NOW
          </button>
          <Typography className="hidden md:block lg:text-[9rem] border-black text-white leading-tight ">
            Beauty
          </Typography>
        </div>
        <motion.div
          style={{
            position: "absolute",
            top: "70%", // Position in the middle of the parent container vertically
            right: "-10%", // Position in the middle of the parent container horizontally
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
            src={"/assets/Green.png"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image covers the container without distortion
            }}
            alt="Picture of the author"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }} // Initial scale of the image
        animate={{ scale: 1 }} // Target scale for the zoom-out effect
        transition={{ duration: 1 }} // Duration of the zoom-out animation
        className="border-red-500 col-span-3 xl:block hidden"
      >
        <img
          src={
            heroData &&
            heroData.attributes &&
            heroData.attributes.image &&
            heroData.attributes.image.data
              ? uploads_uri + heroData.attributes.image.data.attributes.url
              : "/assets/hero.jpg"
          }
          className="border-red-500 w-full h-full object-cover"
          alt="hero_img"
        />
      </motion.div>
    </div>
  );
};

export default HomeComp;
