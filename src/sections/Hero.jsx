import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { initParticles } from '../components/animation/particles';

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
    initParticles(canvas);
   }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-black bg-gradient-to-t from-gray-900 to-black text-white">
      <canvas
        id="particles-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-3xl md:text-7xl font-mono font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Decentralized Assets
          </span>
          <br />
          <span className="text-white">
            & Empower the Digital Economy
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
          Discover, trade, and invest in the next generation of digital assets on the most advanced Web3 marketplace.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-mono flex items-center gap-2 shadow-lg">
            Explore Collections <ArrowRight size={20} />
          </button>
          <button className="border-2 border-purple-500 px-8 py-4 rounded-lg text-lg font-mono backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
