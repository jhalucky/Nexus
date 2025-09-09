import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/mockData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const statsRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    setMounted(true);

    const trigger = ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top 80%',
      onEnter: () => {
        stats.forEach((stat, index) => {
          gsap.to(counters, {
            [index]: stat.value,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => {
              setCounters([...counters]);
            },
          });
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="relative z-10 py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 font-mono">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Platform Stats
          </span>
        </h2>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-mono font-bold">
                {Math.floor(counters[index]).toLocaleString()} {stat.suffix}
              </h3>
              <p className="mt-2 text-gray-400 font-mono">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

