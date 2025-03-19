
export const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.slide-up, .fade-in');
  elements.forEach(el => observer.observe(el));

  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
};
