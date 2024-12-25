import Carousel from "@/components/index/carousel";
import ContactUs from "@/components/index/contactUs";
import FAQ from "@/components/index/FAQ";
import Features from "@/components/index/features";
import Footer from "@/components/index/footer";
import Gallery from "@/components/index/gallery";
import HeroSection from "@/components/index/heroSection";
import Team from "@/components/index/team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Features />
      <Gallery />
      <FAQ />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
