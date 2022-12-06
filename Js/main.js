
// -----Styeling the active page-----

let links = document.querySelectorAll('.header ul li a');

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');


links.forEach(link => {
    link.addEventListener('click', function(){
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        menu.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
});



menu.addEventListener('click', ()=>{
    showMenu();
});

function showMenu(){
    menu.classList.toggle('is-active');
    nav.classList.toggle('is-active');
}


