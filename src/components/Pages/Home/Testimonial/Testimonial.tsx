// components/DrawResultSwiper.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import { PiStarFill } from "react-icons/pi";
import client1 from "@/../public/images/client1.jpg";

export default function Testimonial() {
  useEffect(() => {
    new Swiper(".swiper-draw-result", {
      modules: [Autoplay, Pagination, Navigation, Mousewheel],
      spaceBetween: 24,
      speed: 1400,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".custombutton-prev",
        prevEl: ".custombutton-next",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  return (
    <div className="swiper swiper-draw-result relative">
      <div className="swiper-wrapper">
        <div className="swiper-slide overflow-hidden">
          <div className="bg-p1 p-3 md:p-6 rounded-xl">
            <div className="flex items-center gap-1 mb-3 md:mb-5">
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
            </div>
            <p className="sec-des text-w1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel,
              deserunt ipsam eius tenetur dolorum vitae eum dolor illo quisquam
              excepturi, quas distinctio nemo velit adipisci debitis fuga ipsum
              eveniet.
            </p>

            <div className="flex items-center gap-2 mt-3 md:mt-5">
              <Image
                src={client1}
                alt="client"
                className="size-20 rounded-full"
              />
              <div>
                <span className="text-xl md:text-2xl font-semibold text-w1 block">
                  Name
                </span>
                <span className="text-lg font-medium text-w1">designation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide overflow-hidden">
          <div className="bg-p1 p-3 md:p-6 rounded-xl">
            <div className="flex items-center gap-1 mb-3 md:mb-5">
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
            </div>
            <p className="sec-des text-w1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel,
              deserunt ipsam eius tenetur dolorum vitae eum dolor illo quisquam
              excepturi, quas distinctio nemo velit adipisci debitis fuga ipsum
              eveniet.
            </p>

            <div className="flex items-center gap-2 mt-3 md:mt-5">
              <Image
                src={client1}
                alt="client"
                className="size-20 rounded-full"
              />
              <div>
                <span className="text-xl md:text-2xl font-semibold text-w1 block">
                  Name
                </span>
                <span className="text-lg font-medium text-w1">designation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide overflow-hidden">
          <div className="bg-p1 p-3 md:p-6 rounded-xl">
            <div className="flex items-center gap-1 mb-3 md:mb-5">
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
              <PiStarFill className="text-y1 text-3xl" />
            </div>
            <p className="sec-des text-w1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel,
              deserunt ipsam eius tenetur dolorum vitae eum dolor illo quisquam
              excepturi, quas distinctio nemo velit adipisci debitis fuga ipsum
              eveniet.
            </p>

            <div className="flex items-center gap-2 mt-3 md:mt-5">
              <Image
                src={client1}
                alt="client"
                className="size-20 rounded-full"
              />
              <div>
                <span className="text-xl md:text-2xl font-semibold text-w1 block">
                  Name
                </span>
                <span className="text-lg font-medium text-w1">designation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-10 flex gap-4 items-center">
        <div className="flex md:justify-end gap-3 w-max">
          <button className="custombutton-next h-8 w-8 md:h-10 md:w-10 border border-b1 text-b1 rounded-full flex items-center justify-center text-xl md:text-2xl">
            <i className="ph ph-caret-left"></i>
          </button>
          <button className="custombutton-prev h-8 w-8 md:h-10 md:w-10 border border-p1 bg-p1 text-w1 rounded-full flex items-center justify-center text-xl md:text-2xl">
            <i className="ph ph-caret-right"></i>
          </button>
        </div>
        <div className="swiper-pagination !static scrollbar"></div>
      </div>
    </div>
  );
}
