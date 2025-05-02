"use client";
import CustomSelect from "@/components/UI/Select/CustomSelect";
import Link from "next/link";
import {
  PiCaretDown,
  PiHeart,
  PiListBold,
  PiMagnifyingGlass,
  PiShoppingCart,
  PiX,
} from "react-icons/pi";
import { headerMenuData } from "../../../../public/data/headerData";
import AnimateHeight from "react-animate-height";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const refOne = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggle, setToggle] = useState<null | number>(null);

  const handleToggle = (idx: number) => {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    //@ts-ignore
    if (!refOne?.current?.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <div className="py-3 bg-w1 text-center">
        <p className="text-b1">
          We have Special Announcement - Shop from the Best range of Prodects
        </p>
      </div>
      <div className="bg-p1  py-5">
        <div className="container flex flex-wrap lg:flex-nowrap justify-between items-center gap-3">
          <div className="w-full lg:w-max flex items-center justify-between gap-3">
            <Link href="/">
              <h3 className="text-3xl font-bold text-w1">BabyBills</h3>
            </Link>
            <div className="flex gap-3 items-center">
              <Link
                href="/login"
                className="block lg:hidden bg-w1  text-b1 text-lg font-medium px-3 py-2 rounded-lg"
              >
                Login
              </Link>
              <span
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden block bg-w1 text-2xl  p-2 rounded-lg cursor-pointer"
              >
                <PiListBold />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-max flex items-center justify-between gap-2 md:gap-3">
            <CustomSelect />
            <div className="w-full sm:w-max flex items-center justify-between gap-2 md:gap-3">
              <form className="w-full xl:w-[600px] bg-w1 px-2 flex items-center gap-1 rounded-lg">
                <label className="text-2xl text-b1/50">
                  <PiMagnifyingGlass />
                </label>
                <input
                  type="search"
                  name=""
                  id=""
                  className="bg-w1 py-2 px-3 outline-none w-full"
                />
              </form>

              <Link
                href="/wishlist"
                className="hidden md:block bg-w1 text-2xl  p-2 rounded-lg relative"
              >
                <PiHeart />
                <span className="bg-purpel text-w1 text-sm  size-5 rounded-full absolute -top-2 -right-2 content-center">
                  4
                </span>
              </Link>

              <Link
                href="/cart"
                className="hidden md:block bg-w1 text-2xl  p-2 rounded-lg relative"
              >
                <PiShoppingCart />
                <span className="bg-purpel text-w1 text-sm  size-5 rounded-full absolute -top-2 -right-2 content-center">
                  4
                </span>
              </Link>

              <Link
                href="/login"
                className="hidden lg:block bg-w1  text-b1 text-lg font-medium px-3 py-2 rounded-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden md:block bg-w1 py-5 shadow-lg">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-5 xl:gap-8 text-xl font-medium">
            {headerMenuData.map(({ id, name, subMenus, url }) => {
              return (
                <ul key={id}>
                  {subMenus ? (
                    <li className="relative group">
                      <div className="flex items-center gap-1 hover:text-p1 duration-300 cursor-pointer">
                        <span>{name}</span>
                        <span className="content-center group-hover:-rotate-180 duration-300">
                          <PiCaretDown />
                        </span>
                      </div>
                      <ul
                        className={`bg-w1 w-max text-start absolute z-5 invisible opacity-0 translate-y-8 scale-75 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 duration-300 px-3 py-2 border border-p1/10 pointer-events-none group-hover:pointer-events-auto rounded space-y-0.5`}
                      >
                        {subMenus.map(({ menu, id, url }) => (
                          <li key={id} className="hover:text-p1 duration-300">
                            <Link href={url}>{menu}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="hover:text-p1 duration-300">
                      <Link href={url || "#"}>{name}</Link>
                    </li>
                  )}
                </ul>
              );
            })}
          </div>
        </div>
      </nav>

      {/* responsive menu */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[100%]"
        } duration-500 bg-p1/30 fixed top-0 w-full h-screen z-[9999]  lg:hidden`}
      ></div>

      <nav
        ref={refOne}
        className={`block lg:hidden w-[300px] bg-w1 h-full fixed top-0 ${
          isMobileMenuOpen
            ? "left-0 opacity-100 visible"
            : "left-[-100%] opacity-0 invisible"
        }    z-[9999] px-4 md:px-8 py-3 md:py-6 duration-500 overflow-y-auto`}
      >
        <div className="border-b-3 border-b1/10 pb-5 gap-5 flex items-center justify-between">
          <Link href="/">
            <h3 className="text-3xl font-bold text-p1">BabyBills</h3>
          </Link>
          <span
            className="toggle-btn flex items-center justify-center text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <PiX />
          </span>
        </div>
        <div className="flex gap-5 flex-col mt-10">
          {headerMenuData.map(({ id, name, subMenus, url }, idx) => {
            return (
              <ul key={id}>
                {subMenus ? (
                  <li className="border-y border-b1/20 p-3 rounded">
                    <div
                      onClick={() => handleToggle(idx)}
                      className="flex gap-1 justify-between items-center cursor-pointer text-b1 hover:text-p1 duration-300"
                    >
                      <span className="  text-base font-semibold uppercase leading-[150%]">
                        {name}
                      </span>
                      <span
                        className={`flex items-center justify-center duration-300 ${
                          toggle === idx ? "-rotate-180" : ""
                        }`}
                      >
                        <PiCaretDown />
                      </span>
                    </div>

                    <AnimateHeight
                      duration={500}
                      height={toggle === idx ? "auto" : 0}
                    >
                      <ul className=" bg-w1 rounded ml-2 flex flex-col gap-1 mt-2">
                        {subMenus.map(({ menu, id, url }) => (
                          <li key={id}>
                            <Link
                              href={url}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-base text-b1 hover:text-p1 hover:ml-1 duration-300  block leading-[150%]"
                            >
                              {menu}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                ) : (
                  <li className="menu-link border-y border-b1/20 p-3 rounded">
                    <Link
                      href={url || "#"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-b1 hover:text-p1 duration-300 text-base font-semibold uppercase leading-[150%] block`}
                    >
                      {name}
                    </Link>
                  </li>
                )}
              </ul>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
