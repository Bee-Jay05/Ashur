import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
// import NewArrivals from "@/components/NewArrivals";
// import PopularProducts from "@/components/PopularProducts";
// import Brand from "@/components/Brand";
// import Footer from "@/components/Footer";




export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroCarousel />
            <CategoryGrid />
            {/* 
            <Categories />
            <NewArrivals />
            <PopularProducts />
            <Brand />
            <Footer /> */}
        </div>
    )
}