import towal from "@/../public/images/towel.webp";
import kit from "@/../public/images/kit.webp";
import tub from "@/../public/images/tub.webp";
import toys from "@/../public/images/toys.webp";
import doll from "@/../public/images/doll.png";
import abc from "@/../public/images/abc.png";
import Image from "next/image";
import Link from "next/link";

const TopCategorySection = () => {
  return (
    <section className="spb-60 relative">
      <div className="relative w-full h-[2px] bg-[#00baae1a] overflow-hidden rounded-full mx-auto">
        <div className="absolute left-[-60px] top-0 h-full w-20 rounded-full animate-soft-loader bg-gradient-to-r from-[#fc82bd80] via-[#c062d080] to-transparent"></div>
      </div>

      <div className="container spt">
        <div className="max-w-[650px] mx-auto text-center mb-8 md:mb-10 lg:mb-15">
          <h3 className="sec-heading text-center">Top Category</h3>
          <p className="sec-des">
            Explore our most loved baby care categories – carefully chosen for
            comfort, safety, and style. Everything your little one needs, all in
            one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          <Link href="#" className="rounded-xl group">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={towal}
                alt="towal"
                className="rounded-xl group-hover:scale-[1.1] duration-500"
              />

              <h3 className="absolute bg-purpel/80 bottom-0 left-0 p-3 md:p-5 w-full text-w1 text-xl md:text-2xl font-semibold duration-500 mt-3 md:mt-5">
                Baby Towel
              </h3>
            </div>
          </Link>
          <Link href="#" className="rounded-xl group">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={kit}
                alt="towal"
                className="rounded-xl group-hover:scale-[1.1] duration-500"
              />

              <h3 className="absolute bg-p1/80 bottom-0 left-0 p-3 md:p-5 w-full text-w1 text-xl md:text-2xl font-semibold duration-500 mt-3 md:mt-5">
                Baby Kit
              </h3>
            </div>
          </Link>
          <Link href="#" className="rounded-xl group">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={tub}
                alt="towal"
                className="rounded-xl group-hover:scale-[1.1] duration-500"
              />

              <h3 className="absolute bg-blue/80 bottom-0 left-0 p-3 md:p-5 w-full text-w1 text-xl md:text-2xl font-semibold duration-500 mt-3 md:mt-5">
                Baby Tub
              </h3>
            </div>
          </Link>
          <Link href="#" className="rounded-xl group">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={toys}
                alt="towal"
                className="rounded-xl group-hover:scale-[1.1] duration-500"
              />

              <h3 className="absolute bg-pink/80 bottom-0 left-0 p-3 md:p-5 w-full text-w1 text-xl md:text-2xl font-semibold duration-500 mt-3 md:mt-5">
                Baby Toys
              </h3>
            </div>
          </Link>
        </div>

        {/* animation icon  */}
        <div>
          <Image
            src={doll}
            alt="doll"
            className="hidden lg:block doll-animation absolute left-[3%]"
          />
          <Image
            src={abc}
            alt="abc"
            className="hidden lg:block ripple-animation2 absolute right-15 xl:right-[15%] top-15"
          />
        </div>
      </div>
    </section>
  );
};

export default TopCategorySection;
