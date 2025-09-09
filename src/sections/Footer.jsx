import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 mt-0 md:mt-20 bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
            <span className="text-xl font-mono font-bold">NEXUS</span>
          </div>
          <p className="text-gray-400 text-sm">The next generation Web3 marketplace for digital assets and NFTs.</p>
        </div>

        <div>
          <h4 className="font-mono font-bold mb-4">Marketplace</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400">Browse NFTs</a></li>
            <li><a href="#" className="hover:text-purple-400">Collections</a></li>
            <li><a href="#" className="hover:text-purple-400">Create</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
            <li><a href="#" className="hover:text-purple-400">API</a></li>
            <li><a href="#" className="hover:text-purple-400">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono font-bold mb-4">Community</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-purple-400"><Github size={20} /></a>
            <a href="#" className="hover:text-purple-400"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 font-mono">© 2025 NEXUS. All rights reserved.</p>
        <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
          <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
