import PageBanner from "@/components/UI/PageBanner/PageBanner";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <PageBanner carrentPage="Contact Us" />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-15 xl:gap-20 spy">
          <div>
            <span className="text-sm md:text-base">Contact</span>
            <h3 className="sec-heading">Drop Us Your Message</h3>

            <form className="flex flex-col gap-4 md:gap-6 mt-5 md:mt-8 lg:mt-10">
              <div className="flex flex-wrap xl:flex-nowrap items-center gap-4 md:gap-6">
                <div className="w-full">
                  <label
                    htmlFor="first-name"
                    className="text-base md:text-lg font-medium block"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    id="first-name"
                    required
                    className="w-full outline-none py-2 md:py-3 px-3 md:px-5 border border-b1/20 mt-1 md:mt-2 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-base md:text-lg font-medium block"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    id="email"
                    required
                    className="w-full outline-none py-2 md:py-3 px-3 md:px-5 border border-b1/20 mt-1 md:mt-2 rounded-md"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="text-base md:text-lg font-medium block"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Enter Your message"
                  className="w-full h-28 outline-none py-2 md:py-3 px-3 md:px-5 border border-b1/20 mt-1 md:mt-2 rounded-md"
                ></textarea>
              </div>

              <button className="text-lg bg-p1 hover:bg-p2 duration-500 text-w1 font-semibold tracking-wide rounded-md  block px-3 md:px-5 py-2 md:py-3 cursor-pointer">
                Submit Message
              </button>
            </form>
          </div>

          <div className="flex flex-col  gap-5 md:gap-8 lg:gap-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d70107818.74532571!2d-78.29578314159158!3d9.448259686563093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1se%20commerce%20usa!5e1!3m2!1sen!2sbd!4v1758573402886!5m2!1sen!2sbd"
              width="100%"
              height="320"
              className="rounded-md"
            ></iframe>
            <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-10 lg:gap-15 xl:gap-20">
              <div>
                <span className="text-lg font-medium text-b1">Reach out</span>
                <span className="flex gap-2 items-center mt-1 md:mt-2">
                  <span className="size-10 bg-p1/10 hover:bg-p1 f-center text-lg rounded-full text-p1 hover:text-w1 duration-500">
                    <FaPhoneAlt />
                  </span>
                  <a href="tel:917339-6316">(917) 339-6416</a>
                </span>
              </div>
              <div>
                <span className="text-lg font-medium text-b1">
                  Social Media
                </span>
                <span className="flex gap-3 items-center mt-1 md:mt-2">
                  <span className="size-10 bg-p1/10 hover:bg-p1 f-center text-lg rounded-full text-p1 hover:text-w1 duration-500">
                    <FaFacebook />
                  </span>
                  <span className="size-10 bg-p1/10 hover:bg-p1 f-center text-lg rounded-full text-p1 hover:text-w1 duration-500">
                    <FaLinkedin />
                  </span>
                  <span className="size-10 bg-p1/10 hover:bg-p1 f-center text-lg rounded-full text-p1 hover:text-w1 duration-500">
                    <FaInstagram />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" spb">
          <h3 className="sec-heading text-center">Available Service Areas</h3>
          <p className="text-b1/90 text-center mt-1 md:mt-2">
            We cover many areas across Queensland, Australia
          </p>

          <div className="grid sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mt-5 md:mt-8 lg:mt-10">
            <div className="bg-w1 border border-b1/20 p-3 md:p-5 rounded-md">
              <div className="size-12 bg-p1 rounded f-center mb-5 md:mb-8 lg:mb-10">
                <span className="size-10 bg-w1 rounded f-center text-xl text-b1">
                  <FaLocationDot />
                </span>
              </div>

              <h4 className="text-xl md:text-2xl text-b1 font-semibold mb-2 md:mb-3">
                Brisbane
              </h4>
              <p className="md:text-lg text-b1/90 mb-3 md:mb-5">
                Lorem ipsum dolor sit amet consectetur. Lectus massa sodales at
                sit aliquet.
              </p>
              <Link
                href="#"
                className="font-semibold text-b1 hover:text-p1 duration-500"
              >
                See Location
              </Link>
            </div>
            <div className="bg-w1 border border-b1/20 p-3 md:p-5 rounded-md">
              <div className="size-12 bg-p1 rounded f-center mb-5 md:mb-8 lg:mb-10">
                <span className="size-10 bg-w1 rounded f-center text-xl text-b1">
                  <FaLocationDot />
                </span>
              </div>

              <h4 className="text-xl md:text-2xl text-b1 font-semibold mb-2 md:mb-3">
                Townsville
              </h4>
              <p className="md:text-lg text-b1/90 mb-3 md:mb-5">
                Lorem ipsum dolor sit amet consectetur. Lectus massa sodales at
                sit aliquet.
              </p>
              <Link
                href="#"
                className="font-semibold text-b1 hover:text-p1 duration-500"
              >
                See Location
              </Link>
            </div>
            <div className="bg-w1 border border-b1/20 p-3 md:p-5 rounded-md">
              <div className="size-12 bg-p1 rounded f-center mb-5 md:mb-8 lg:mb-10">
                <span className="size-10 bg-w1 rounded f-center text-xl text-b1">
                  <FaLocationDot />
                </span>
              </div>

              <h4 className="text-xl md:text-2xl text-b1 font-semibold mb-2 md:mb-3">
                Gold Coast
              </h4>
              <p className="md:text-lg text-b1/90 mb-3 md:mb-5">
                Lorem ipsum dolor sit amet consectetur. Lectus massa sodales at
                sit aliquet.
              </p>
              <Link
                href="#"
                className="font-semibold text-b1 hover:text-p1 duration-500"
              >
                See Location
              </Link>
            </div>
            <div className="bg-w1 border border-b1/20 p-3 md:p-5 rounded-md">
              <div className="size-12 bg-p1 rounded f-center mb-5 md:mb-8 lg:mb-10">
                <span className="size-10 bg-w1 rounded f-center text-xl text-b1">
                  <FaLocationDot />
                </span>
              </div>

              <h4 className="text-xl md:text-2xl text-b1 font-semibold mb-2 md:mb-3">
                Harvey Bay
              </h4>
              <p className="md:text-lg text-b1/90 mb-3 md:mb-5">
                Lorem ipsum dolor sit amet consectetur. Lectus massa sodales at
                sit aliquet.
              </p>
              <Link
                href="#"
                className="font-semibold text-b1 hover:text-p1 duration-500"
              >
                See Location
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
