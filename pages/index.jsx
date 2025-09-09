import Navigation from '../src/sections/Navigation';
import Hero from '../src/sections/Hero';
import StatsSection from '../src/sections/Stats';
import FeaturedCollections from '../src/sections/FeaturedCollection';
import Footer from '../src/sections/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-hidden min-h-screen">
      <canvas id="particles-canvas" className="fixed inset-0 pointer-events-none z-0" />
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <StatsSection />
      <Footer />
    </div>
  );
}
