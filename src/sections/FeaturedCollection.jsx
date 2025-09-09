import { useEffect, useRef } from 'react';
import { featuredNFTs } from '../data/mockData';
import NFTCard from '../components/ui/NFTCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCollections() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.nft-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          duration: 1,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="relative z-10 py-16 px-6 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trending Collections
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the hottest NFT collections in the market
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredNFTs.map((nft) => (
            <div key={nft.id} className="nft-card group">
              <NFTCard nft={nft} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


