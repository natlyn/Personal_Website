const nav_Toggle = document.querySelector('.nav-toggle');
const nav_Links = document.querySelectorAll('.nav__link');

nav_Toggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav_open');

});

nav_Links.forEach(link => {
    link.addEventListener('click',()=>{
    document.body.classList.remove('nav_open');
    });
});