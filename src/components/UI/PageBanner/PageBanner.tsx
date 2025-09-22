import Link from "next/link";

const PageBanner = ({ carrentPage }: { carrentPage: string }) => {
  return (
    <div className="relative bg-[url(/images/page-banner.webp)] bg-center bg-no-repeat py-25">
      <div className="absolute inset-0 bg-p2/40 z-0"></div>
      <div className="container relative  z-10">
        <h3 className="text-b1 text-xl md:text-3xl lg:text-5xl text-center font-bold mb-2">
          {carrentPage}
        </h3>
        <span className="flex justify-center gap-2 text-center">
          <Link
            href="/"
            className="text-b1 hover:text-w1 font-semibold duration-300 text-lg"
          >
            Home
          </Link>
          <span className="text-b1 text-lg font-semibold">/</span>
          <span className="text-w1 text-lg font-semibold">{carrentPage}</span>
        </span>
      </div>
    </div>
  );
};

export default PageBanner;
