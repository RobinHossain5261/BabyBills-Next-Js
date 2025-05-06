import Image from "next/image";
import blog1 from "@/../public/images/Blog-1.jpg";
import blog2 from "@/../public/images/Blog-2.jpg";
import blog3 from "@/../public/images/Blog-3.jpg";
import Link from "next/link";

const BlogSection = () => {
  return (
    <section>
      <div className="relative w-full h-[2px] bg-[#00baae1a] overflow-hidden rounded-full mx-auto">
        <div className="absolute left-[-60px] top-0 h-full w-20 rounded-full animate-soft-loader bg-gradient-to-r from-[#fc82bd80] via-[#c062d080] to-transparent"></div>
      </div>
      <div className="container spy-60">
        <div className="max-w-[650px] mx-auto text-center mb-8 md:mb-10 lg:mb-15">
          <h3 className="sec-heading text-center">Our Parenting Blog</h3>
          <p className="sec-des">
            Discover helpful tips, expert advice, and heartwarming stories to
            support you through every stage of parenthood—from pregnancy to
            toddlerhood.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-5">
            <Link href="#" className="grid sm:grid-cols-2 xl:grid-cols-1 gap-5 group">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={blog1}
                  alt="img"
                  className="w-full h-full object-cover  group-hover:scale-[1.05] duration-300"
                />
              </div>
              <div>
                <h4 className="text-b1 group-hover:text-p2 duration-300 text-xl md:text-2xl font-bold mb-2 md:mb-3 block">
                  The Latest Trends In Kids’ Fashion For The Upcoming Summer
                  Season
                </h4>
                <p className="text-base text-b1/90">
                  Maecenas sed ornare lacus, in placerat ante. In hac habitasse
                  platea dictumst. Donec vel euismod metus, auctor vehicula
                  metus. Phasellus turpis sapien, elementum et est nec, ultrices
                  lobortis est.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-span-12 xl:col-span-7 h-full">
            <div className="flex flex-col gap-6 h-full">
              <Link href="#" className="grid sm:grid-cols-2 gap-5 group">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={blog2}
                    alt="img"
                    className="w-full h-full object-cover group-hover:scale-[1.05] duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-b1 group-hover:text-p2 duration-300 text-xl md:text-2xl font-bold mb-2 md:mb-3  block">
                    Stylish And Comfortable: Kids’ Clothing For Christmas & New
                    Year
                  </h4>
                  <p className="text-base text-b1/90">
                    Lacus vel facilisis volutpat est velit egestas. Enim blandit
                    volutpat maecenas volutpat. Et netus et malesuada fames ac
                    turpis turpis sapien, elementum et est nec, ultrices
                    lobortis est.
                  </p>
                </div>
              </Link>
              <Link href="#" className="grid sm:grid-cols-2 gap-5 group">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={blog3}
                    alt="img"
                    className="w-full h-full object-cover  group-hover:scale-[1.05] duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-b1 group-hover:text-p2 duration-300 text-xl md:text-2xl font-bold mb-2 md:mb-3  block">
                    How To Choose Safe And Age-Appropriate Soft Stuffed Toys For
                    Your Kids
                  </h4>
                  <p className="text-base text-b1/90">
                    Egestas sed tempus urna et. Eget duis at tellus at urna
                    condimentum mattis pellentesque. Metus dictum at tempor
                    auctor vehicula metus. Phasellus turpis sapien, elementum et
                    est nec, ultrices.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
