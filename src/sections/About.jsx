import { useEffect, useRef } from "react";

export default function About() {


  return (
    <section className="py-20 px-6  text-white bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Our Platform</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          We are building a next-gen NFT marketplace powered by Web3 technologies. Our platform allows you to securely browse, buy, and sell NFTs using your wallet with real-time interaction with the blockchain.  
          <br /><br />
          Built with speed, security, and simplicity in mind, our goal is to empower creators and collectors alike to participate in the decentralized digital economy effortlessly.
        </p>
      </div>
    </section>
  );
}
