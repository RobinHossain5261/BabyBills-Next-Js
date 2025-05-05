import BannerSection from "@/components/Pages/Home/Banner/BannerSection";
import FlashSaleSection from "@/components/Pages/Home/FlashSale/FlashSaleSection";
import PopularProduct from "@/components/Pages/Home/PopularProduct/PopularProduct";
import Testimonial from "@/components/Pages/Home/Testimonial/Testimonial";
import TestimonialSection from "@/components/Pages/Home/Testimonial/TestimonialSection";
import TopCategorySection from "@/components/Pages/Home/TopCategory/TopCategorySection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <FlashSaleSection />
      <TopCategorySection />
      <PopularProduct />
      {/* <Testimonial /> */}
      <TestimonialSection/>
    </div>
  );
};

export default HomePage;
