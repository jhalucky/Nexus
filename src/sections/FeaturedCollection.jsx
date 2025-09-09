'use client';

import { useEffect, useRef } from 'react';
import { featuredNFTs } from '../data/mockData';
import NFTCard from '../components/ui/NFTCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCollections() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.nft-card');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-12 px-6 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trending Collections
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the hottest NFT collections in the market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} className="nft-card" />
          ))}
        </div>
      </div>
    </section>
  );
}

