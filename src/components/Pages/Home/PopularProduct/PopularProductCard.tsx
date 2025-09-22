import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductT = {
  id: string;
  label: string;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviewCount: number;
  image: StaticImageData;
  description: string;
  highlights: string[];
};

const PopularProductCard = ({
  id,
  label,
  title,
  price,
  oldPrice,
  image,
}: ProductT) => {
  return (
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
          <del className="text-b1/90 font-normal text-base">${oldPrice}</del>
        </span>
      </div>
    </div>
  );
};

export default PopularProductCard;
