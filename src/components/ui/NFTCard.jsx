import { forwardRef } from 'react';
import { Heart, Eye } from 'lucide-react';

const NFTCard = forwardRef(({ nft }, ref) => {
  return (
    <div
      ref={ref}
      className="group backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
    >
      <div className="relative overflow-hidden">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
            <Heart size={16} className="text-white" />
          </button>
          <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
            <Eye size={16} className="text-white" />
          </button>
        </div>
      </div>
      
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
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 transform hover:scale-105">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
});

NFTCard.displayName = 'NFTCard';

export default NFTCard;