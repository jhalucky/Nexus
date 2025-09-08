import { Heart, Eye } from 'lucide-react';

const featuredNFTs = [
  { id: 1, name: "Cyber Punks Genesis", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300", price: "2.5 ETH", change: "+15.2%", volume: "1,234 ETH" },
  { id: 2, name: "Digital Dreamscape", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=300&h=300", price: "1.8 ETH", change: "+8.7%", volume: "892 ETH" },
  { id: 3, name: "Neon Futures", image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=300&h=300", price: "3.2 ETH", change: "+22.1%", volume: "2,156 ETH" },
];

export default function FeaturedCollections() {
  return (
    <section className="relative z-10 py-20 px-6 fade-in-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trending Collections
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Discover the hottest NFT collections in the market</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNFTs.map(nft => (
            <div key={nft.id} className="group backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50">
              <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover" />

              <div className="p-6">
                <h3 className="font-mono font-bold text-xl mb-3">{nft.name}</h3>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-gray-400">Floor Price</div>
                    <div className="font-mono font-bold text-lg text-purple-400">{nft.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">24h Change</div>
                    <div className={`font-mono font-bold ${nft.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {nft.change}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400">Volume</div>
                    <div className="font-mono text-sm">{nft.volume}</div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-sm font-mono">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
