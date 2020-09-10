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

var skill = document.querySelector('.skill')
var buttonOne  = document.querySelector('#buttonOne')
var buttonTwo  = document.querySelector('#buttonTwo')
var buttonThree  = document.querySelector('#buttonThree')

function changeSkill(){
    skill.innerHTML="Front-End-Developer"
    buttonOne.style.background="#FC3949";
    buttonTwo.style.background="white";
    buttonThree.style.background="white";
}
function changeSkillTwo(){
    skill.innerHTML="Graphic UI/UX Designer"
    buttonOne.style.background="white";
    buttonTwo.style.background="#FC3949";
    buttonThree.style.background="white";
}
function changeSkillThree(){
    skill.innerHTML="Movie Editor"
    buttonOne.style.background="white"
    buttonTwo.style.background="white"
    buttonThree.style.background="#FC3949";
}


