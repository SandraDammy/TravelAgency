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
      <div className="px-4 flex flex-col gap-[7.69rem]">
        <div>
          <HeroSection />
          <div className="absolute top-0 right-0 -z-10">
            <img src="/images/blob-shape.png" alt="Blob-shape right" />
          </div>
          <div className="absolute top-0 left-0 -z-10">
            <img src="/images/top-left-gradient.png" alt="Blob-shape left" />
          </div>
        </div>

        <div className="relative">
          <CategorySection />
          <div className="absolute top-0 right-0">
            <img src="/images/plus-group.png" alt="Plus-group" />
          </div>
        </div>

        <div>
          <TopSellingSection />
          <div>
            {/* <img src="/public/images/stylish-ring.png" alt="" /> */}
          </div>
        </div>

        <div>
        <BookNextTripSection />
          <div>
          </div>
        </div>

        <TestimonialSection />
        <LogoGroupSection />
        <NewLetterSection />
        <FooterSection />
      </div>
    </main>
  );
}
