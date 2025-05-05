import Link from "next/link";
import { popularProducts } from "../../../../../public/data/allProductData";
import Image from "next/image";

const PopularProduct = () => {
  return (
    <section>
      <div className="relative w-full h-[2px] bg-[#00baae1a] overflow-hidden rounded-full mx-auto">
        <div className="absolute left-[-60px] top-0 h-full w-20 rounded-full animate-soft-loader bg-gradient-to-r from-[#fc82bd80] via-[#c062d080] to-transparent"></div>
      </div>

      <div className="container spy-60">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5 mb-5 md:mb-8 lg:mb-15">
          <div className="max-w-[650px]">
            <h3 className="sec-heading">Most Popular Products</h3>
            <p className="sec-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
              quis pulvina.
            </p>
          </div>
          <Link
            href="#"
            className="w-max flex items-center gap-2 text-w1 text-lg font-bold bg-p1 border border-p1 px-3 py-2 rounded-lg mt-0 lg:mt-10"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">
          {popularProducts.map(({ id, label, title, price, oldPrice, image }) => (
            <div
              key={id}
              className="border border-p1/50 hover:border-p1 duration-300 rounded-lg group"
            >
              <div className="bg-p1/5 relative overflow-hidden">
                <div>
                  <Image
                    src={image}
                    alt="product"
                    className="size-[250px] md:size-[300px] mx-auto group-hover:scale-[1.1] duration-300"
                  />
                </div>
                <span className="absolute top-3 md:top-5 left-3 md:left-5  bg-p1 text-w1 text-sm font-medium tracking-wider px-2 py-1 rounded">
                  {label}
                </span>

                <Link
                  href="/cart"
                  className="w-full bg-p1 text-w1 font-semibold tracking-wide text-lg py-2 block text-center absolute -bottom-10 group-hover:bottom-0 duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100"
                >
                  Add To Cart
                </Link>
              </div>
              <div className="p-3 md:p-5">
                <Link
                  href={`product/${id}`}
                  className="text-xl md:text-2xl font-semibold text-b1 hover:text-p2 duration-300"
                >
                  {title}
                </Link>
                <span className="flex items-center gap-2 text-lg font-semibold text-p1">
                  ${price}{" "}
                  <del className="text-b1/90 font-normal text-base">
                    ${oldPrice}
                  </del>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
