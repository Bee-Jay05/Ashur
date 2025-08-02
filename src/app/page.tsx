import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import PopularProducts from "@/components/PopularProducts";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";





export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <NewArrivals />
            <PopularProducts />
            <Brand />
            <Footer />
        </div>
    )
}