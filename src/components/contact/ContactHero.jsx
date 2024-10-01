import React from "react";

const ContactHero = () => {
  return (
    <div className=" h-[80vh]  grid xl:grid-cols-12 grid-cols-1 gap-[1rem]">
      <div className="col-span-6 flex flex-col justify-center items-start gap-[1rem]">
        <div className="md:text-[4rem] text-[3rem] w-[75%]">
          WE ARE READY TO ASSIST YOU
        </div>
        <div className="md:text-[1.2rem] text-[0.95rem] font-[500]">
          Questions or need assistance? Reach out for personalized beauty
          solutions tailored just for you.
        </div>
        <div className="text-[1.2rem] font-[500]">
          Our expert team is dedicated to helping you find the perfect products
          and routines to enhance your natural beauty. We offer one-on-one
          consultations to understand your unique needs.
        </div>
      </div>
      <div className="col-span-6 xl:block hidden">
        <img
          src={"/images/contact.jpg"}
          className="w-full h-full object-cover"
          alt="contact_hero"
        />
      </div>
    </div>
  );
};

export default ContactHero;
