import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedCollections from '../components/FeaturedCollection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-hidden min-h-screen">
      <canvas id="particles-canvas" className="fixed inset-0 pointer-events-none z-0" />
      <Navigation />
      <Hero />
      <Stats />
      <FeaturedCollections />
      <Footer />
    </div>
  );
}
