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