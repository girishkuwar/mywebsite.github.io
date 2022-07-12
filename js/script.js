let menu = document.querySelector('#menuicon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-txt',{delay:300,origin:'left'})
sr.reveal('.about,.services,.portfolio,.blog,.contact,.copyright',{delay:50,origin:'bottom'})