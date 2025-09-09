import { useEffect, useRef } from 'react';
import { stats } from '../data/mockData';

export default function StatsSection() {
  const statsRef = useRef([]);

  useEffect(() => {
    const animateCounters = () => {
      statsRef.current.forEach((el, i) => {
        let count = 0;
        const target = parseInt(stats[i].value);
        const increment = Math.ceil(target / 200);

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          el.innerText = `${count.toLocaleString()}${stats[i].suffix}`;
        }, 15);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.stats-section'));
  }, []);

  return (
    <section className="stats-section relative z-10 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-mono font-bold mb-8">Key Stats</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg">
              <div ref={el => (statsRef.current[index] = el)} className="text-2xl font-mono font-bold">0{stat.suffix}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
