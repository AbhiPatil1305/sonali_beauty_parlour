import Hero from '../home/Hero';
import QuickActions from '../home/QuickActions';
import FeaturedServices from '../home/FeaturedServices';
import BeautyCategories from '../home/BeautyCategories';
import WhyChooseUs from '../home/WhyChooseUs';
import GalleryPreview from '../home/GalleryPreview';
import BridalSection from '../home/BridalSection';
import Testimonials from '../home/Testimonials';
import SalonInfo from '../home/SalonInfo';
import ContactCTA from '../home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <FeaturedServices />
      <BeautyCategories />
      <WhyChooseUs />
      <GalleryPreview />
      <BridalSection />
      <Testimonials />
      <SalonInfo />
      <ContactCTA />
    </>
  );
}
