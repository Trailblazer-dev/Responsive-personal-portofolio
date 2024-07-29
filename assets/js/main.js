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

// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  reset: true,
  grabCursor:true,
  duration: 2000,
});

sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__image',{delay:400})
sr.reveal('.home__social-icon',{interval:200})

sr.reveal('.about__image',{})
sr.reveal('.about__subtitle',{delay:200})

sr.reveal('.about__text',{delay:400})


sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills__img',{interval:400})

sr.reveal('.work__img',{interval:200})

sr.reveal('.contact__input',{interval:200})
