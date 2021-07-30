const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    return hamburger.classList.add('open');
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    showMenu = false;
  }
};
menuBtn.addEventListener('click', toggleMenu);
 