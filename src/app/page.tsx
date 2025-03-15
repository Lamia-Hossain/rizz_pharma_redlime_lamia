import homeBg from "../../public/homeBg.png";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
      <section className="min-h-screen flex items-center justify-center text-white">
        <Hero />
      </section>

      <section className="min-h-screen flex items-center justify-center text-white bg-opacity-50">
        <p className="text-2xl">Another section content</p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}
