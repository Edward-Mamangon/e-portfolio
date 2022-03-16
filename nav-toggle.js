// const linkToggle = document.querySelector('.navbar-link2');
const navs = document.querySelector('.offCanvas');
const menuIcon = document.getElementById('menuIcon');

// linkToggle.addEventListener('click', () => {
//   //  e.preventDefault();
//   navs.classList.remove('offCanvasShow');
// })

function classToggle() {
  navs.classList.toggle('offCanvasShow');
  navs.classList.add('shadow');  
  menuIcon.classList.toggle('fa-xmark');
}

document.querySelector('.navbar-link-toggle')
  .addEventListener('click', classToggle);


var links = document.querySelectorAll('.navbar-link2')

for(let key in links) {
  links[key].onclick = classToggle;
}
  




