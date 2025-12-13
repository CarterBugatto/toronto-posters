document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, img, blockquote, ol, ul, li, div, a"
  );

  //applying animation to types of listed assets
  
  els.forEach(el => el.classList.add("scroll-animate"));

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => e.target.classList.toggle("in-view", e.isIntersecting)),
    { threshold: 0.1 }
  );

  els.forEach(el => obs.observe(el));
});

//https://blog.webdevsimplified.com/2022-01/intersection-observer/
//https://stackoverflow.com/questions/65931048/animation-in-html-css-js