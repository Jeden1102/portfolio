

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

    var skillBtn = document.querySelector('.front-btn');
    var skillBtnBack = document.querySelector('.back-btn');
    var skillBtnRest = document.querySelector('.rest-btn');

    let frontBox = document.querySelector('.skill-front');
    let backBox = document.querySelector('.skill-back');
    let restBox = document.querySelector('.skill-rest');

function openSkill(){
    frontBox.classList.toggle('skill-active');
    skillBtn.classList.toggle('skill-btn-active')
    /*REMOVING OTHERS */
    backBox.classList.remove('skill-active');
    skillBtnBack.classList.remove('skill-btn-active');
    restBox.classList.remove('skill-active');
    skillBtnRest.classList.remove('skill-btn-active');
}
function openSkillBack(){
    backBox.classList.toggle('skill-active');
    skillBtnBack.classList.toggle('skill-btn-active')
    /*REMOVING OTHERS*/
    frontBox.classList.remove('skill-active');
    skillBtn.classList.remove('skill-btn-active')
    restBox.classList.remove('skill-active');
    skillBtnRest.classList.remove('skill-btn-active')
}
function openSkillRest(){
    restBox.classList.toggle('skill-active');
    skillBtnRest.classList.toggle('skill-btn-active')
    /*REMOVING OTHERS */
    frontBox.classList.remove('skill-active');
    skillBtn.classList.remove('skill-btn-active')
    backBox.classList.remove('skill-active');
    skillBtnBack.classList.remove('skill-btn-active')
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var upButton = document.querySelector('.up-button');
    var text = document.querySelector('.about-me');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}