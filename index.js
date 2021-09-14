
// we need to an event listener that listens to the click event on the burger menu 

//when the click happens, the nav list will appear and hamburger be replaced with the cross, clicking the cross will hide the menu 

const hamburgerMenuClick = document.querySelector('.menuBtn');
const hamburgerMenu = document.querySelector('ul');

let menuOpen = false;

hamburgerMenuClick.addEventListener('click',function(){
  menuOpen = !menuOpen

  if (menuOpen){
    hamburgerMenuClick.classList.add('open');
    hamburgerMenu.style.right = "0px"
  }else{
    hamburgerMenuClick.classList.remove('open');
    hamburgerMenu.style.right = "-200px"
  }
});