var burger = document.querySelector('#burger')
var navbar = document.querySelector('.side-menu')
var arrow = document.querySelector('.fa-arrow-left')
let isOpened = 0;
function openNavbar(){
    if(!isOpened){
        navbar.classList.add('opened-navbar')
        arrow.classList.remove('fa-arrow-right')
        isOpened=1;
    }else{
        navbar.classList.remove('opened-navbar')
        isOpened=0;
    }
}