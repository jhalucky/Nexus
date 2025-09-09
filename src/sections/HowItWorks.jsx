export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">1. Connect Wallet</h3>
            <p>Click the connect button in the navbar to link your wallet using MetaMask or any supported Web3 wallet.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">2. Explore NFTs</h3>
            <p>Browse trending NFT collections and view their floor prices, volumes, and recent changes in the market.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">3. View Collection</h3>
            <p>Click on "View Collection" to open detailed pages and manage your NFTs directly from your wallet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
