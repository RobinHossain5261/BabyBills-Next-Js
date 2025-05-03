import towal from "@/../public/images/towel.webp";
import kit from "@/../public/images/kit.webp";
import tub from "@/../public/images/tub.webp";
import toys from "@/../public/images/toys.webp";
import Image from "next/image";
import Link from "next/link";

const TopCategorySection = () => {
  return (
    <section className="spb">
      <div className="container">
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
      </div>
    </section>
  );
};

export default TopCategorySection;
