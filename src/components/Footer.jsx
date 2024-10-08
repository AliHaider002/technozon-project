import Link from "next/link";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto flex flex-col justify-normal gap-[2rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1rem] lg:gap-0">
          <div className="flex justify-center">
            <div
              style={{
                // position: 'absolute',
                // left: '50%',
                // padding: "4px 8px",
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                textAlign: "center",
                // top: '50%',
                // transform: "translate( -50%)",
                textAlign: "center",
              }}
            >
              <h4
                variant="h4"
                component="div"
                style={{
                  // color: "black",
                  fontFamily: "Sans-serif",
                  fontSize: "1.1rem",
                  // fontWeight: 'bold',
                  lineHeight: 1.1,
                }}
              >
                TechnoZon
              </h4>
              <h4
                variant="subtitle1"
                component="div"
                style={{
                  color: "gray",
                  fontSize: "0.7rem",
                  fontWeight: "medium",
                }}
              >
                GrowUp
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[1rem]">
            <div className="border border-[#2674CF] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <RiFacebookCircleLine size={30} />
            </div>
            <div className="border border-[#2674CF] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <RiInstagramLine size={30} />
            </div>
            <div className="border border-[#2674CF] w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer">
              <PiLinkedinLogoBold size={30} />
            </div>
          </div>
        </div>
        <div className="w-full border-[1px] border-[#2674CF]" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[1rem] lg:gap-0">
          <div className="flex-1 flex justify-center ">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-[24px]">Explore</h4>
              <ul>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <a href="/">Home</a>
                </li>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="mb-2 text-gray-300 hover:text-orange-300 hover:decoration-transparent transition-all">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex justify-center ">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-[24px]">Keep in Touch</h4>
              <ul>
                <li className="mb-2  text-gray-300">
                  Address: 24A technozon St, Las Vegas NC 28202, USA
                </li>
                <li className="mb-2  text-gray-300">
                  Mail: hr.techozon@gmail.com
                </li>
                <li className="mb-2  text-gray-300">
                  Phone: (+92)335-6701-234
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-[1px] border-[#2674CF] lg:hidden block" />
        <div className="text-center">
          <p className="text-sm">&copy; 2024 TechnoZon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
