import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdHeadsetMic, MdLocationPin } from "react-icons/md";
import { PiEnvelopeFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-p2">
      <div className="container spy-60">
        <div className="grid grid-cols-12  gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Link href="/">
              <h3 className="text-3xl font-bold text-w1">BabyBills</h3>
            </Link>
            <p className="text-lg text-w1/90 mt-2 md:mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              inventore libero illo ipsum, eius maxime at et saepe.
            </p>
            <div className="flex gap-3  items-center mt-5 md:mt-8 ">
              <Link
                href="#"
                className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 border border-w1/80 p-1 rounded-lg"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 border border-w1/80 p-1 rounded-lg"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href="#"
                className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 border border-w1/80 p-1 rounded-lg"
              >
                <FaYoutube />
              </Link>
              <Link
                href="#"
                className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 border border-w1/80 p-1 rounded-lg"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="col-span-6  lg:col-span-2">
            <h4 className="text-2xl md:text-3xl text-w1 font-bold mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6  lg:col-span-2">
            <h4 className="text-2xl md:text-3xl text-w1 font-bold mb-4">
              Support
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300"
                >
                  Store List
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h4 className="text-2xl md:text-3xl text-w1 font-bold mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 rounded-lg  p-1 border border-w1/80">
                <MdLocationPin />
                </div>
                <span className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300">
                  Gyan Singh Market, Sector 22 Noida, UP 201301
                </span>
              </div>
              <Link href="tel:+18475555555" className="flex items-center gap-2">
                <div className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 rounded-lg  p-1 border border-w1/80">
                  <MdHeadsetMic />
                </div>
                <span className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300">
                  18475555555
                </span>
              </Link>
              <Link
                href="mailto:someone@example.com"
                className="flex items-center gap-2"
              >
                <div className="content-center text-xl md:text-2xl text-w1 hover:text-p2 hover:bg-w1/80 duration-300 rounded-lg  p-1 border border-w1/80">
                  <PiEnvelopeFill />
                </div>
                <span className="text-lg text-w1/90 hover:text-w1 hover:font-semibold hover:ml-1 duration-300">
                  someone@example.com
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-w1 text-b1 py-5 text-center text-lg">
        <p>
          ©
          <Link href="/" className="font-medium hover:text-p2 duration-300">
            BabyBills
          </Link>{" "}
          2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
