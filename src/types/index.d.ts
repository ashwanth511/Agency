interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  image: StaticImageData;
  quote: string;
  author: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQ;
  isActive: boolean;
  onClick: () => void;
}
