"use client";
import PageBanner from "@/components/UI/PageBanner/PageBanner";
import Image from "next/image";
import { popularProducts } from "../../../../../public/data/allProductData";
import { FiMinus, FiPlus } from "react-icons/fi";
import { use, useState } from "react";

const ShopDetails = ({ params }: { params: Promise<{ shopId: string }> }) => {
  const { shopId } = use(params);
  const product = popularProducts.find((item) => item.id === shopId);

  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };
  const decrement = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="container py-10 text-center h-200">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      <PageBanner carrentPage="Shop Details" />
      <div className="container">
        <div className=" grid grid-cols-12 gap-3 md:gap-6 spy-60">
          <div className="col-span-4">
            <div className="bg-p1/5 rounded-xl p-3">
              <Image
                src={product.image}
                alt={product.title}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="col-span-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-b1">
              {" "}
              {product.title}
            </h3>
            <p className="my-2 md:my-3 text-b1/90">{product.description}</p>

            <h4 className="text-xl md:text-2xl font-semibold text-p1 flex gap-2">
              Price : {product.price}
              <del className="text-b1/80 font-normal">{product.oldPrice}</del>
            </h4>

            <div className=" flex items-center gap-3 mt-5 md:mt-8 lg:mt-10">
              <div className="w-36 border border-p1/50 py-1 md:py-2 px-2 md:px-3 rounded-full flex items-center justify-between gap-5">
                <span
                  className="size-8 bg-b1 rounded-full text-w1 content-center cursor-pointer"
                  onClick={decrement}
                >
                  <FiMinus size={24} />
                </span>
                <span className="text-2xl font-bold">{count}</span>
                <span
                  className="size-8 bg-b1 rounded-full text-w1 content-center cursor-pointer"
                  onClick={increment}
                >
                  <FiPlus size={24} />
                </span>
              </div>
              <button className=" bg-p1 hover:bg-p2 duration-500 text-w1 font-semibold tracking-wide text-lg px-3 md:px-5 py-2 md:py-3 rounded-full">
                Add to cart
              </button>
            </div>

            <div className="mt-5 md:mt-10">
              <h4 className="text-xl font-semibold mb-2">Highlights:</h4>
              <ul className="list-disc list-inside text-b2 space-y-1">
                {product.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
