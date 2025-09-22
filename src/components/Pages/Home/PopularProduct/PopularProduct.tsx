import Link from "next/link";
import { popularProducts } from "../../../../../public/data/allProductData";
import PopularProductCard from "./PopularProductCard";

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
          {popularProducts.map((product) => (
          <PopularProductCard key={product.id} {...product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
