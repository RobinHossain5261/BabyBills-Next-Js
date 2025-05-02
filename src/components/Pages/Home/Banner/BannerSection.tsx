"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const BannerSection = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="bannerSwiper relative"
      >
        <SwiperSlide className="bg-[url('/images/hero1.webp')] bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-b1/10 z-1"></div>
          <div className="container py-18 md:py-28 lg:py-36 relative z-2">
            <div className="max-w-[750px]">
              <span className="bg-p1 text-w1 font-medium rounded-full px-3 py-2 mb-2 block w-max">
                Up To 70% Off Our Prroducts
              </span>
              <h2 className="display-1 text-b1">
                New Arrivals for <span className="text-p1">Happy Babies.</span>
              </h2>
              <p className="text-lg font-medium text-b1/90 mt-3 md:mt-5 ">
                Explore our latest range of baby products designed to keep your
                little one smiling, comfy, and safe.
              </p>

              <Link
                href="#"
                className="w-max flex items-center gap-2 text-w1 text-lg font-bold bg-p1 border border-p1 px-3 py-2  rounded-lg mt-6 md:mt-10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('/images/hero2.webp')] bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-b1/10 z-1"></div>
          <div className="container py-18 md:py-28 lg:py-36 relative z-2">
            <div className="max-w-[750px]">
              <span className="bg-p1 text-w1 font-medium rounded-full px-3 py-2 mb-2 block w-max">
                Up To 70% Off Our Prroducts
              </span>
              <h2 className="display-1 text-b1">
                Soft Touch Care for <span className="text-p1">Your Baby.</span>
              </h2>
              <p className="text-lg font-medium text-b1/90 mt-3 md:mt-5 ">
                Shop thoughtfully chosen, quality products that support your
                baby’s healthy growth and joyful moments.
              </p>

              <Link
                href="#"
                className="w-max flex items-center gap-2 text-w1 text-lg font-bold bg-p1 border border-p1 px-3 py-2  rounded-lg mt-6 md:mt-10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('/images/hero3.webp')] bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-b1/10 z-1"></div>
          <div className="container py-18 md:py-28 lg:py-36 relative z-2">
            <div className="max-w-[750px]">
              <span className="bg-p1 text-w1 font-medium rounded-full px-3 py-2 mb-2 block w-max">
                Up To 70% Off Our Prroducts
              </span>
              <h2 className="display-1 text-b1">
                Adorable Styles for
                <span className="text-p1">Tiny Smiles.</span>
              </h2>
              <p className="text-lg font-medium text-b1/90 mt-3 md:mt-5 ">
                Explore our latest range of baby products designed to keep your
                little one smiling, comfy, and safe.
              </p>

              <Link
                href="#"
                className="w-max flex items-center gap-2 text-w1 text-lg font-bold bg-p1 border border-p1 px-3 py-2  rounded-lg mt-6 md:mt-10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
