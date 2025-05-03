import BannerSection from "@/components/Pages/Home/Banner/BannerSection";
import FlashSaleSection from "@/components/Pages/Home/FlashSale/FlashSaleSection";
import TopCategorySection from "@/components/Pages/Home/TopCategory/TopCategorySection";


const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <FlashSaleSection />
      <TopCategorySection/>
    </div>
  );
};

export default HomePage;
