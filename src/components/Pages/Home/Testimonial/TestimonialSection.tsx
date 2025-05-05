"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import { PiCaretLeft, PiCaretRight, PiStarFill } from "react-icons/pi";
import Image from "next/image";
import client1 from "@/../public/images/client1.jpg";
import client2 from "@/../public/images/client2.jpg";
import client3 from "@/../public/images/client3.jpg";
import { RxStarFilled } from "react-icons/rx";

const clientsImg = [client1, client2, client3, client1];

const TestimonialSection = () => {
  return (
    <section className="">
      <div className="relative w-full h-[2px] bg-[#00baae1a] overflow-hidden rounded-full mx-auto">
        <div className="absolute left-[-60px] top-0 h-full w-20 rounded-full animate-soft-loader bg-gradient-to-r from-[#fc82bd80] via-[#c062d080] to-transparent"></div>
      </div>

      <div className="container spy-60">
        <div className="max-w-[650px] mx-auto text-center mb-8 md:mb-10 lg:mb-15">
          <h3 className="sec-heading text-center">
            What Happy Parents Are Saying
          </h3>
          <p className="sec-des">
            Discover the love and trust our customers have for our baby care
            products. From soothing lotions to comfy outfits, hear firsthand how
            we’ve made parenting just a little easier—and a lot more joyful.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-6">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <Swiper
              spaceBetween={24}
              speed={1400}
              loop={true}
              mousewheel={{
                forceToAxis: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custombutton-prev",
                prevEl: ".custombutton-next",
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "progressbar",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay, Pagination, Navigation, Mousewheel]}
              className="mySwiper "
            >
              <SwiperSlide>
                <div className="bg-p1 p-3 md:p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3 md:mb-5">
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                  </div>
                  <p className="sec-des text-w1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel, deserunt ipsam eius tenetur dolorum vitae eum dolor
                    illo quisquam excepturi, quas distinctio nemo velit adipisci
                    debitis fuga ipsum eveniet.
                  </p>

                  <div className="flex items-center gap-2 mt-3 md:mt-5">
                    <Image
                      src={client1}
                      alt="client"
                      className="size-14 rounded-full"
                    />
                    <div>
                      <span className="text-lg md:text-xl font-semibold text-w1 block">
                        Name
                      </span>
                      <span className="text-base font-medium text-w1">
                        designation
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-p1 p-3 md:p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3 md:mb-5">
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                  </div>
                  <p className="sec-des text-w1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel, deserunt ipsam eius tenetur dolorum vitae eum dolor
                    illo quisquam excepturi, quas distinctio nemo velit adipisci
                    debitis fuga ipsum eveniet.
                  </p>

                  <div className="flex items-center gap-2 mt-3 md:mt-5">
                    <Image
                      src={client1}
                      alt="client"
                      className="size-14 rounded-full"
                    />
                    <div>
                      <span className="text-lg md:text-xl font-semibold text-w1 block">
                        Name
                      </span>
                      <span className="text-base font-medium text-w1">
                        designation
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-p1 p-3 md:p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3 md:mb-5">
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                  </div>
                  <p className="sec-des text-w1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel, deserunt ipsam eius tenetur dolorum vitae eum dolor
                    illo quisquam excepturi, quas distinctio nemo velit adipisci
                    debitis fuga ipsum eveniet.
                  </p>

                  <div className="flex items-center gap-2 mt-3 md:mt-5">
                    <Image
                      src={client1}
                      alt="client"
                      className="size-14 rounded-full"
                    />
                    <div>
                      <span className="text-lg md:text-xl font-semibold text-w1 block">
                        Name
                      </span>
                      <span className="text-base font-medium text-w1">
                        designation
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-p1 p-3 md:p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3 md:mb-5">
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                    <PiStarFill className="text-y1 text-3xl" />
                  </div>
                  <p className="sec-des text-w1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    vel, deserunt ipsam eius tenetur dolorum vitae eum dolor
                    illo quisquam excepturi, quas distinctio nemo velit adipisci
                    debitis fuga ipsum eveniet.
                  </p>

                  <div className="flex items-center gap-2 mt-3 md:mt-5">
                    <Image
                      src={client1}
                      alt="client"
                      className="size-14 rounded-full"
                    />
                    <div>
                      <span className="text-lg md:text-xl font-semibold text-w1 block">
                        Name
                      </span>
                      <span className="text-base font-medium text-w1">
                        designation
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="mt-5 md:mt-10 flex gap-4 items-center">
                <div className="flex md:justify-end gap-3 w-max">
                  <button className="custombutton-next h-8 w-8 md:h-10 md:w-10 hover:bg-p1 hover:border-p1 border border-b1 text-b1 hover:text-w1 duration-300 rounded-full flex items-center justify-center text-xl md:text-2xl cursor-pointer">
                    <PiCaretLeft />
                  </button>
                  <button className="custombutton-prev h-8 w-8 md:h-10 md:w-10 border border-p1 bg-p1 text-w1 rounded-full flex items-center justify-center text-xl md:text-2xl cursor-pointer">
                    <PiCaretRight />
                  </button>
                </div>
                <div className="swiper-pagination !static scrollbar"></div>
              </div>
            </Swiper>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="content-center h-full w-full bg-purpel/50 rounded-xl p-5">
              <div className="text-center">

              <div className="flex gap-2 items-center mb-5">
                <RxStarFilled className="text-5xl xl:text-7xl text-[#02b57a]" />
                <h5 className="text-3xl md:text-4xl xl:text-5xl font-bold text-w1">
                  Trustpilot
                </h5>
              </div>

              <div className="flex items-center justify-center gap-1 mb-1">
                <PiStarFill className="text-p2 text-2xl" />
                <PiStarFill className="text-p2 text-2xl" />
                <PiStarFill className="text-p2 text-2xl" />
                <PiStarFill className="text-p2 text-2xl" />
                <PiStarFill className="text-p2 text-2xl" />
              </div>
              <span className="font-medium text-lg">Reviews 25,575</span>
              <div className="flex justify-center mt-5 md:mt-8">
                {clientsImg.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt="client"
                    className="size-12 border-2 border-w1 rounded-full -ml-4 first:ml-0"
                  />
                ))}
                <div className="size-12 bg-y1 border-2 border-w1 rounded-full content-center -ml-4 font-medium">20k</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
