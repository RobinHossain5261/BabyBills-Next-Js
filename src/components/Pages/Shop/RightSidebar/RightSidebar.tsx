export const categories = [
  { id: "baby-towel", label: "Baby Towel", count: 10 },
  { id: "baby-kit", label: "Baby Kit", count: 27 },
  { id: "baby-tub", label: "Baby Tub", count: 11 },
  { id: "fashion-kid", label: "Fashion Kid", count: 17 },
  { id: "flash-sale", label: "Flash Sale", count: 12 },
  { id: "baby-toys", label: "Baby Toys", count: 22 },
];

export const shopByAge = [
  { id: "age-0-3", label: "0-3 years", count: 16 },
  { id: "age-4-5", label: "4-5 years", count: 20 },
  { id: "age-6-7", label: "6-7 years", count: 14 },
  { id: "age-8-9", label: "8-9 years", count: 12 },
  { id: "age-10-11", label: "10-11 years", count: 7 },
  { id: "age-12-plus", label: "12+ years", count: 5 },
];

export const brands = [
  { id: "dolphin", label: "Dolphin", count: 2 },
  { id: "gummy", label: "Gummy", count: 6 },
  { id: "harmony", label: "Harmony", count: 11 },
  { id: "lucya", label: "Lucya", count: 8 },
  { id: "melica", label: "Melica", count: 6 },
  { id: "rainboow", label: "Rainboow", count: 7 },
];

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-6 sticky top-0">
      <div className="border border-p1 p-3 md:p-5 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-b1 border-b-2 border-b1/20 pb-1 w-max">
          Categories
        </h3>

        {/* category  */}
        <div className="flex flex-col gap-2 mt-3 md:mt-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-2 justify-between"
            >
              <div className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  id={category.id}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={category.id}
                  className="text-lg text-b1 cursor-pointer"
                >
                  {category.label}
                </label>
              </div>
              <span className="text-lg text-b1">({category.count})</span>
            </div>
          ))}
        </div>
      </div>
      {/* age  */}
      <div className="border border-p1 p-3 md:p-5 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-b1 border-b-2 border-b1/20 pb-1 w-max">
          Age
        </h3>
        <div className="flex flex-col gap-2 mt-3 md:mt-5">
          {shopByAge.map((age) => (
            <div
              key={age.id}
              className="flex items-center gap-2 justify-between"
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id={age.id} />
                <label htmlFor={age.id} className="text-lg text-b1">
                  {age.label}
                </label>
              </div>
              <span className="text-lg text-b1">({age.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-p1 p-3 md:p-5 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold text-b1 border-b-2 border-b1/20 pb-1 w-max">
          Brand
        </h3>
        <div className="flex flex-wrap gap-2 mt-3 md:mt-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex gap-2 text-lg border border-b1/10 w-max px-3 py-2 rounded-full cursor-pointer"
            >
              <span>{brand.label}</span>
              <span>({brand.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
