// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import CurrentFocus from "@/components/CurrentFocus";
import FeaturedProjects from "@/components/FeaturedProjects";
// import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      {/* <CurrentFocus /> */}
      <FeaturedProjects />
      {/* <Writing /> */}
      <Contact />
      <Footer />
    </main>
  );
}