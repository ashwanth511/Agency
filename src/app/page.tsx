import {
  AboutSection,
  AudienceSection,
  HeroSection,
  ServicesSection,
  TeamSection,
  TestimonialSection,
} from '@/components';

export default function Home() {
  return (
    <main className="font-sans font-normal text-white">
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
    </main>
  );
}
