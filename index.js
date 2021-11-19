
// we need to an event listener that listens to the click event on the burger menu 

//when the click happens, the nav list will appear and hamburger be replaced with the cross, clicking the cross will hide the menu 

const app = {};

 app.hamburgerAndMenu = function(){
  let menuOpen = false;
  app.hamburgerMenuClick.addEventListener('click',function(){
    menuOpen = !menuOpen
    if (menuOpen){
      app.hamburgerMenuClick.classList.add('open');
      app.hamburgerMenu.style.right = "0px"
    }else{
      app.hamburgerMenuClick.classList.remove('open');
      app.hamburgerMenu.style.right = "-200px"
    }
  });
 }

//  this function is resposible for the pop up box after the page load
 app.popPageOnPageLoad = function(){
  window.addEventListener("load",()=>{
    app.popUpBox = document.querySelector('.popUpBox');
    app.popUpBox = document.createElement('p');
  });
 }
 app.popPageOnPageLoad ();


  
app.init = function(){
  app.hamburgerMenuClick = document.querySelector('.menuBtn');
  app.hamburgerMenu = document.querySelector('ul');
  app.hamburgerAndMenu();
};

app.init();