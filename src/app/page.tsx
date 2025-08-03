import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import CategoriesSection from "@/components/CategoriesSection";
import NewArrivals from "@/components/NewArrivals";
import PopularProducts from "@/components/PopularProducts";
// import Brand from "@/components/Brand";
import Footer from "@/components/Footer";




export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroCarousel />
            <CategoryGrid />
            <CategoriesSection />
            <NewArrivals />
            <PopularProducts />
            <Footer /> 
            {/* 
            <Categories />
            <Brand />*/}
        </div>
    )
}