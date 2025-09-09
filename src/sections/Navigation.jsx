import { Wallet } from 'lucide-react';
import { useState } from 'react';
export default function Navigation() {
   const [walletAddress, setWalletAddress] = useState('');
   const [message, setMessage] = useState('');
  
    const connectWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWalletAddress(accounts[0]);
        } catch (err) {
          console.error('Wallet connection failed:', err);
        }
      } else {
        alert('Please install MetaMask to connect your wallet.');
      }
    };
  
    const handleSend = (e) => {
      e.preventDefault();
      if (!walletAddress) {
        alert('Please connect your wallet first.');
        return;
      }
  
      console.log('Message from:', walletAddress);
      console.log('Message:', message);
  
      alert('Message sent successfully! (Functionality can be connected to backend later)');
      setMessage('');
    }
  return (
    <nav className="relative z-50 flex justify-between items-center p-6 bg-black/20 backdrop-blur-sm ">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"></div>
        <span className="text-xl font-mono font-bold">NEXUS</span>
      </div>
      
      <div className="hidden md:flex space-x-8 font-mono text-sm">
        <a href="#" className="hover:text-purple-400 transition-colors">Marketplace</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Collections</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Analytics</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Docs</a>
      </div>
      
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        <Wallet size={16} />
      </button>
    </nav>
  );
}
