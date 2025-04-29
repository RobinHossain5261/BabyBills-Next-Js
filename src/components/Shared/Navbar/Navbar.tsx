import CategoriesSelect from "@/components/UI/Select/CategoriesSelect";
import Link from "next/link";
import { LiaSearchSolid } from "react-icons/lia";
import { PiHeart, PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  return (
    <header>
      <div className="py-3 bg-w1 text-center">
        <p className="text-b1">
          We have Special Announcement - Shop from the Best range of Prodects
        </p>
      </div>
      <div className="bg-p1  py-5">
        <div className="container flex justify-between items-center gap-3">
          <Link href="/">
            <h3 className="text-3xl font-bold text-w1">BabyBills</h3>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <CategoriesSelect/>
            <form className="w-[600px] bg-w1 px-2 flex items-center gap-1 rounded-lg">
              <label className="text-2xl text-b1/50">
                <LiaSearchSolid />
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
              className="bg-w1 text-2xl  p-2 rounded-lg relative"
            >
              <PiHeart />
              <span className="bg-purpel text-w1 text-sm  size-5 rounded-full absolute -top-2 -right-2 content-center">
                4
              </span>
            </Link>

            <Link
              href="/cart"
              className="bg-w1 text-2xl  p-2 rounded-lg relative"
            >
              <PiShoppingCart />
              <span className="bg-purpel text-w1 text-sm  size-5 rounded-full absolute -top-2 -right-2 content-center">
                4
              </span>
            </Link>

            <Link
              href="/login"
              className="bg-w1  text-b1 text-lg font-medium px-3 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-w1 py-5 shadow-lg">
        <ul className="container text-center text-xl font-medium">
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
