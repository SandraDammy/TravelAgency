import NavBar from "./components/common/NavBar";
import BookNextTripSection from "./components/section/BookNextTripSection";
import CategorySection from "./components/section/Categorysection";
import FooterSection from "./components/section/FooterSection";
import HeroSection from "./components/section/HeroSection";
import LogoGroupSection from "./components/section/LogoGroupSection";
import NewLetterSection from "./components/section/NewLetterSection";
import TestimonialSection from "./components/section/TestimonialSection";
import TopSellingSection from "./components/section/TopSellingSection";

export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
      <NavBar />
      <HeroSection />
      <CategorySection />
      <TopSellingSection />
      <BookNextTripSection />
      <TestimonialSection />
      <LogoGroupSection />
      <NewLetterSection />
      <FooterSection />
    </main>
  );
}
