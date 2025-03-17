import Category from "@/components/Category";
import homeBg from "../../public/homeBg.png";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeatureBar from "@/components/FeatureBar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center"
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
      </div>

      {/* Add more sections as needed */}
    </div>
  );
}
