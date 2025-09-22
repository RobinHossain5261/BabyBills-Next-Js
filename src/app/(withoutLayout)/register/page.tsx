import PasswordInput from "@/components/UI/PasswordInput/PasswordInput";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const RegisterPage = () => {
  return (
    <div>
      <div className="f-center min-h-screen">
        <div className="w-full max-w-[800px] px-4">
          <Link
            href="/"
            className="w-max text-b1 hover:text-p1  duration-300 text-lg font-semibold flex gap-1.5 items-center mb-2 md:mb-3 group"
          >
            <FaArrowLeftLong className="group-hover:-translate-x-1 duration-300" />
            Back Home
          </Link>
          <div className="border border-b1/20 p-4 md:p-8 lg:p-10 rounded-md">
            <h3 className="text-b1 text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2">
              Let’s Get Started!
            </h3>
            <p className="text-b1/90 text-center">
              Please Enter your Email Address to Start your Online Application
            </p>

            <form className="flex flex-col gap-4 md:gap-6 mt-5 md:mt-8 lg:mt-10">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 md:gap-6">
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
                    htmlFor="last-name"
                    className="text-base md:text-lg font-medium block"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    id="last-name"
                    required
                    className="w-full outline-none py-2 md:py-3 px-3 md:px-5 border border-b1/20 mt-1 md:mt-2 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-base md:text-lg font-medium block"
                >
                  Enter Your Email Id
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  required
                  className="w-full outline-none py-2 md:py-3 px-3 md:px-5 border border-b1/20 mt-1 md:mt-2 rounded-md"
                />
              </div>

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter Your Password"
              />
              <PasswordInput
                id="confirm-password"
                label="Confirm Password"
                placeholder="Enter Your Confirm Password"
              />

              <p>
                Have an accounts?{" "}
                <a
                  href="/login"
                  className="text-p1 hover:font-medium duration-500"
                >
                  Sign In
                </a>
              </p>

              <button className=" bg-p1 hover:bg-p2 duration-500 text-w1 font-semibold tracking-wider rounded-md  block px-3 md:px-5 py-2 md:py-3 cursor-pointer">
                Sign Up
              </button>
              <div>
                <div className="flex justify-center gap-3 items-center mb-2 md:mb-3">
                  <span className="h-px w-25 bg-b1/20"></span>
                  <span className="text-b1 font-medium">Or</span>
                  <span className="h-px w-25 bg-b1/20"></span>
                </div>
                <div className="flex justify-center gap-3">
                  <Link
                    href="#"
                    className="f-center size-10 md:size-12 text-xl md:text-2xl text-p1 hover:text-w1 bg-p1/10 hover:bg-p2 duration-300 rounded-full"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="#"
                    className="f-center size-10 md:size-12 text-xl md:text-2xl text-p1 hover:text-w1 bg-p1/10 hover:bg-p2 duration-300 rounded-full"
                  >
                    <FaGoogle />
                  </Link>
                  <Link
                    href="#"
                    className="f-center size-10 md:size-12 text-xl md:text-2xl text-p1 hover:text-w1 bg-p1/10 hover:bg-p2 duration-300 rounded-full"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
