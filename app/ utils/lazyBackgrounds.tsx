export function lazyLoadBackgrounds(): void {
  const lazyLoadBg: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const bgImage = element.getAttribute("data-bg");
        if (bgImage) {
          // Apply the background image dynamically
          element.style.backgroundImage = `url(${bgImage})`;
          element.classList.add("bg-cover", "bg-center"); // Add Tailwind classes
          observer.unobserve(element); // Stop observing
        }
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoadBg, {
    root: null,
    threshold: 0.1,
  });

  const elements = document.querySelectorAll<HTMLElement>(".lazy-bg");
  elements.forEach((el) => observer.observe(el));
}
