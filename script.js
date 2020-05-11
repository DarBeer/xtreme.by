var menu = document.getElementById('nav-ul');
var home = document.getElementById('home').offsetTop-95;
var contacts = document.getElementById('contacts').offsetTop-95;
var about = document.getElementById('about').offsetTop-95;
var navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    var page_offset=window.pageYOffset;

    if(page_offset>=0 && page_offset < home) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[0].classList.add('nav_active');
    }
    if(page_offset>=home && page_offset<contacts) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[0].classList.add('nav_active');
    }
    if(page_offset>=contacts && page_offset<about) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[2].classList.add('nav_active');
    }
    if(page_offset>=about) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        navLink[3].classList.add('nav_active');
    }

});