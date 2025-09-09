export const initializeScrollAnimations = () => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('.fade-in-section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (scrollY > sectionTop - windowHeight + 100) {
        section.classList.add('animate-fade-in');
      }
    });
  };

  // Initialize on load
  handleScroll();
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export const animateCounters = (statsRef, stats) => {
  statsRef.current.forEach((stat, index) => {
    if (!stat || stat.dataset.animated) return;
    
    // Mark as animated to prevent re-animation
    stat.dataset.animated = 'true';
    
    const target = stats[index].value;
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current).toLocaleString();
        setTimeout(updateCounter, stepTime);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };
    
    setTimeout(() => updateCounter(), index * 100);
  });
};