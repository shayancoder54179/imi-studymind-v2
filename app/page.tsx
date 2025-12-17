import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection2026 from "@/components/HeroSection2026";
import WhyChooseSection from "@/components/WhyChooseSection";

// Lazy load below-the-fold components
const OurCoursesSection = dynamic(() => import("@/components/OurCoursesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PerfectForAllSection = dynamic(() => import("@/components/PerfectForAllSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const WhereStudentsStudySection = dynamic(() => import("@/components/WhereStudentsStudySection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const WhyStudentsLoveUsSection = dynamic(() => import("@/components/WhyStudentsLoveUsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PricingSection = dynamic(() => import("@/components/PricingSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FinalCTASection = dynamic(() => import("@/components/FinalCTASection"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-[100vw] w-full">
      <Navbar />
      <HeroSection2026 />
      <WhyChooseSection />
      <OurCoursesSection />
      <PerfectForAllSection />
      <WhereStudentsStudySection />
      <WhyStudentsLoveUsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BookingForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

