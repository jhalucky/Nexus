import { useEffect, useRef } from 'react';

export default function Stats() {
  const statsRef = useRef([]);

  const stats = [
    { label: "Total Market Cap", value: 2847293847, suffix: "" },
    { label: "Active Users", value: 125847, suffix: "+" },
    { label: "Transactions Today", value: 9234, suffix: "" },
    { label: "Total Volume", value: 847293, suffix: " ETH" }
  ];

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      let current = 0;
      const target = stats[index].value;
      const increment = target / 100;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          el.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toLocaleString();
        }
      };

      setTimeout(() => updateCounter(), index * 200);
    });
  }, []);

  return (
    <section className="relative z-10 py-20 px-6 fade-in-section">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-mono font-bold text-purple-400 mb-2">
              <span ref={el => statsRef.current[index] = el}>0</span>{stat.suffix}
            </div>
            <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
