import BannerSection from "@/components/BannerSection";
import ChooseAnyWhereSection from "@/components/ChooseAnyWhereSection";
import ContactUsSection from "@/components/ContactUsSection";
import ContentSection from "@/components/ContentSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MostlyAskedQuestionSection from "@/components/MostlyAskedQuestionSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-main">
      <Header />
      <main>
        <FeatureSection />
        <BannerSection />
        <ContentSection />
        <ChooseAnyWhereSection />
        <MostlyAskedQuestionSection />
        <TestimonialSection />
        <ContactUsSection />
        <Footer />
      </main>
    </div>
  );
}
