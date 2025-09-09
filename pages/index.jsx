import Navigation from '../src/sections/Navigation';
import Hero from '../src/sections/Hero';
import StatsSection from '../src/sections/Stats';
import FeaturedCollections from '../src/sections/FeaturedCollection';
import Footer from '../src/sections/Footer';
import HowItWorks from '../src/sections/HowItWorks';
import FAQSection from '../src/sections/FAQ';
import About from '../src/sections/About';

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-blue-900 via-gray-950 to-black text-white overflow-hidden">

      <Navigation />
      <Hero className="m-0 p-0" />
      <About />
      <HowItWorks />
      <FeaturedCollections />
      <StatsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
