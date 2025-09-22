"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import baby1 from "@/../public/images/baby1.jpg";
import baby2 from "@/../public/images/baby2.png";
import baby3 from "@/../public/images/baby3.png";
import baby4 from "@/../public/images/baby4.jpg";
import baby5 from "@/../public/images/baby5.png";
import baby6 from "@/../public/images/baby6.jpg";
import Image from "next/image";

const images = [baby1, baby2, baby3, baby4, baby5, baby6,baby1, baby2, baby3, baby4, baby5, baby6];

const SliderBabys = () => {
  return (
    <section>
      <div className="relative w-full h-[2px] bg-[#00baae1a] overflow-hidden rounded-full mx-auto">
        <div className="absolute left-[-60px] top-0 h-full w-20 rounded-full animate-soft-loader bg-gradient-to-r from-[#fc82bd80] via-[#c062d080] to-transparent"></div>
      </div>
      <div className="spy-60">
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          loop={true}
          speed={1500}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
      
          modules={[Autoplay]}
          className="babySlider"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="max-w-max">             
                <Image src={img} alt="baby" className="size-50 md:size-60 rounded-xl"/>              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderBabys;
