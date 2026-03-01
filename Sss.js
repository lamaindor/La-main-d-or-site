
// Scroll animation
const sections = document.querySelectorAll('section');
function reveal() {
  const windowHeight = window.innerHeight;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < windowHeight - 100){
      sec.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Language switch
let currentLang = "fr";
function switchLanguage(){
  currentLang = currentLang === "fr" ? "en" : "fr";
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
}
