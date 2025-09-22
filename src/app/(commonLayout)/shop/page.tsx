"use client";
import Image from "next/image";
import Link from "next/link";
import { popularProducts } from "../../../../public/data/allProductData";
import PageBanner from "@/components/UI/PageBanner/PageBanner";
import { useMemo, useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import RightSidebar from "@/components/Pages/Shop/RightSidebar/RightSidebar";

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 5;

  // Filter product base on search
  const filterProducts = useMemo(() => {
    return popularProducts.filter((product) =>
      product.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase())
    );
  }, [searchQuery]);

  // pagination function
  const paginationProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productPerPage;
    return filterProducts.slice(startIndex, startIndex + productPerPage);
  }, [filterProducts, currentPage]);

  const totalPages = Math.ceil(filterProducts.length / productPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <PageBanner carrentPage="Shop" />

      <div className="container grid grid-cols-12 gap-3 md:gap-6 spy-60">
        <div className="col-span-12 md:col-span-8 xl:col-span-9">
          <div className="flex gap-3 items-center border border-p1/50 mb-4 md:mb-8 pl-3 md:pl-5 pr-1 md:pr-2 py-2 rounded-lg">
            <input
              type="text"
              onChange={handleInputChange}
              className="w-full outline-none text-black"
              placeholder="Type to search..."
            />
            <div className="flex items-center gap-2">
              <div
                onClick={() => setViewType("list")}
                className={`w-10 h-10 f-center  border border-p1 text-xl font-bold rounded-full cursor-pointer ${
                  viewType === "list" ? "bg-p1 text-w1" : "border-p1 text-p1"
                }`}
              >
                <FaList />
              </div>
              <div
                onClick={() => setViewType("grid")}
                className={`w-10 h-10 f-center border text-xl font-bold rounded-full cursor-pointer ${
                  viewType === "grid" ? "bg-p1 text-w1" : "border-p1 text-p1"
                }`}
              >
                <RiLayoutGridFill />
              </div>
            </div>
          </div>

          {viewType === "grid" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {paginationProducts.map(
                ({ id, label, title, price, oldPrice, image }) => (
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
                        className="w-full bg-p1 hover:bg-p2 text-w1 font-semibold tracking-wide text-lg py-2 block text-center absolute -bottom-10 group-hover:bottom-0 duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100"
                      >
                        Add To Cart
                      </Link>
                    </div>
                    <div className="p-3 md:p-5">
                      <Link
                        href={`shop/${id}`}
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
                )
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:gap-6">
              {paginationProducts.map(
                ({ id, label, title, price, oldPrice, image, description }) => (
                  <div
                    key={id}
                    className=" border border-p1/50 hover:border-p1 duration-300 rounded-lg group"
                  >
                    <div className="flex flex-wrap 2xl:flex-nowrap gap-3 2xl:gap-6 bg-p1/5 relative overflow-hidden">
                      <div className="w-full ">
                        <Image
                          src={image}
                          alt="product"
                          className="w-[250px] md:w-[300px] lg:w-[350px] h-[250px] 2xl:h-full 2xl:mx-auto group-hover:scale-[1.1] duration-300 rounded-lg object-fit"
                        />
                      </div>
                      <div>
                        <div className="p-3">
                          <Link
                            href={`shop/${id}`}
                            className="text-xl md:text-2xl font-semibold text-b1 hover:text-p2 duration-300"
                          >
                            {title}
                          </Link>
                          <span className="flex items-center gap-2 text-xl font-semibold text-p1 my-2">
                            <span className="text-b1">Price : </span>${price}{" "}
                            <del className="text-b1/90 font-normal text-base">
                              ${oldPrice}
                            </del>
                          </span>

                          <p className="text-b1">{description}</p>
                          <span className="absolute top-3 md:top-5 left-3 md:left-5  bg-p1 text-w1 text-sm font-medium tracking-wider px-2 py-1 rounded">
                            {label}
                          </span>

                          <Link
                            href="/cart"
                            className="bg-p1 hover:bg-p2 duration-300 text-w1 font-semibold tracking-wider rounded mt-3 md:mt-5 block w-max px-3 md:px-5 py-2 md:py-3"
                          >
                            Add To Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* product pagination */}
          <div className="flex gap-2 items-center justify-center mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-10 h-10 f-center border border-p1 text-xl font-bold rounded-full cursor-pointer"
            >
              <GrFormPrevious />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 f-center border border-p1 hover:border-p2 text-xl font-bold rounded-full cursor-pointer ${
                  currentPage === index + 1 ? "bg-p1 text-w1" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 f-center border border-p1 text-xl font-bold rounded-full cursor-pointer"
            >
              <GrFormNext />
            </button>
          </div>
        </div>

        {/* sidebar  */}
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
