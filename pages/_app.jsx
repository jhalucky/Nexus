import '../styles/global.css';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initParticles } from '../src/components/animation/particles';

gsap.registerPlugin(ScrollTrigger);

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    gsap.from("section", {
      opacity: 1,
      y: 100,
      duration: 1,
      stagger: 0.6,
      scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    // const canvas = document.getElementById('particles-canvas');
    // if (canvas) {
    //   initParticles(canvas);
    // }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      
    </>
  );
}

