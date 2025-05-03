"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import CountdownTimer from "@/components/UI/CountDownTimer/CountDownTimer";
import Image from "next/image";
import Link from "next/link";
import { flashSaleProducts } from "../../../../../public/data/allProductData";
import shape1 from "@/../public/images/shape1.webp";

const FlashSaleSection = () => {
  return (
    <section className="spy relative overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-2 md:gap-3 mb-5 md:mb-8 mb-lg">
          <h3 className="sec-heading">Flash Sale</h3>
          <CountdownTimer />
        </div>
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="flashSaleSwiper relative"
        >
          {flashSaleProducts.map(
            ({ id, label, title, price, oldPrice, rating, image }) => (
              <SwiperSlide>
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
              </SwiperSlide>
            )
          )}
        </Swiper>

        <Link
          href="#"
          className="w-max mx-auto flex items-center gap-2 text-w1 text-lg font-bold bg-p1 border border-p1 px-3 py-2 rounded-lg mt-8 md:mt-10 lg:mt-15"
        >
          View All
        </Link>
      </div>

      <div>
        <Image
          src={shape1}
          alt="shape"
          className="ripple-animation absolute top-15 -left-25"
        />
        <Image
          src={shape1}
          alt="shape"
          className="ripple-animation absolute bottom-15 -right-15"
        />
      </div>
    </section>
  );
};

export default FlashSaleSection;
