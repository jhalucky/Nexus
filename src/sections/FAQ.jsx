import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is a Web3 project?",
    answer: "A decentralized application running on blockchain technology allowing peer-to-peer interactions without intermediaries.",
  },
  {
    question: "How do I connect my wallet?",
    answer: "Click 'Connect' in the navbar and select your Web3 wallet like MetaMask. Ensure you’re connected to the right network.",
  },
  {
    question: "Can I buy NFTs here?",
    answer: "Currently, this is a demo project showcasing trending collections, but functionality to buy/sell can be added later.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-2xl font-semibold">{item.question}</h3>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-purple-400" />
                ) : (
                  <Plus className="w-6 h-6 text-purple-400" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
