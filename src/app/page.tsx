import Category from "@/components/Category";
import homeBg from "../../public/homeBg.png";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeatureBar from "@/components/FeatureBar";
import Products from "@/components/Products";
import Add from "@/components/Add";
import Testimonial from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div
        className=" bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundSize: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />

        <div className="flex flex-col gap-10">
          {/* Hero Section */}
          <section>
            <Hero />
          </section>

          {/* Shoy By Category Section */}
          <section>
            <Category />
          </section>

          <section>
            <FeatureBar />
          </section>

          <section>
            <Products />
          </section>

          <section>
            <Add />
          </section>

          <section>
            <Testimonial />
          </section>
        </div>
      </div>
      <Footer />
      {/* Add more sections as needed */}
    </div>
  );
}
