let darkMode = false;
function changeStyle(){
  if(!darkMode){

    //find elements to change
    let mainContent = document.querySelector('.wrapper');
    let body = document.querySelector('body');
    let home = document.querySelector('#home');
    let about = document.querySelector('#about');
    let experience = document.querySelector('#experience');
    let portfolio = document.querySelector('#portifolio');
    let navBackTab = document.querySelector('#nav-back-tab');
    let navFrontTab = document.querySelector('#nav-front-tab');
    let navFrameworkTab = document.querySelector('#nav-framework-tab');
    let navToolsTab = document.querySelector('#nav-tools-tab');
    let navGamesTab = document.querySelector('#nav-games-tab');
    let cards = document.querySelectorAll('.card');

    
    //do change 
    mainContent.classList.replace('wrapper','wrapper-darkmode');
    body.classList.replace('body-normal','body-darkmode');
    home.classList.replace('home','home-darkmode');
    about.classList.replace('about','about-darkmode');
    experience.classList.replace('experience','experience-darkmode');
    portfolio.classList.replace('portifolio','portifolio-darkmode');
    navBackTab.classList.replace('text-dark','text-white');
    navFrameworkTab.classList.replace('text-dark','text-white');
    navFrontTab.classList.replace('text-dark','text-white');
    navGamesTab.classList.replace('text-dark','text-white');
    navToolsTab.classList.replace('text-dark','text-white');
    cards.forEach(card => {
      card.classList.replace('border-dark','bg-dark');
    });
    darkMode = true;
  }else{
    document.location.reload(true);
    darkMode = false;
  }
}