import {
  AboutSection,
  AudienceSection,
  BusinessServicesSection,
  ComparisonSection,
  CTASection,
  FAQSection,
  Footer,
  HeroSection,
  Preloader,
  ResultsSection,
  ServicesSection,
  TeamSection,
  TestimonialSection,
  TopbarSection,
} from '@/components';
import Introduction from '@/components/UI/Home/Introduction';


export default function Home() {
  return (
    <main className={`font-sans text-white`}>
      <Preloader />
      <TopbarSection />
      <HeroSection />
      <BusinessServicesSection />
      <ResultsSection />
      <Introduction />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
