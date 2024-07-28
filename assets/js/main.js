// Menu show

const navToggle = document.getElementById('nav-toggle');

const showMenu = ()=>{
    const navMenu= document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
}

navToggle.addEventListener('click', showMenu);

// remove menu
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => {
    n.addEventListener('click', ()=>{
        const navMenu= document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    });
    
});

// active

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active");
    }
  });
};
window.addEventListener("scroll", scrollActive);
