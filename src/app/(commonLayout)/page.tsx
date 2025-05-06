import BannerSection from "@/components/Pages/Home/Banner/BannerSection";
import BlogSection from "@/components/Pages/Home/BlogSection/BlogSection";
import FlashSaleSection from "@/components/Pages/Home/FlashSale/FlashSaleSection";
import PopularProduct from "@/components/Pages/Home/PopularProduct/PopularProduct";
import TestimonialSection from "@/components/Pages/Home/Testimonial/TestimonialSection";
import TopCategorySection from "@/components/Pages/Home/TopCategory/TopCategorySection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <FlashSaleSection />
      <TopCategorySection />
      <PopularProduct />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
