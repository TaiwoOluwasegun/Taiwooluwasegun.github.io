var menu = document.querySelector(".menu");
var ham = document.querySelector(".hambuger");
var lines = document.querySelector(".lines");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {

  console.log('clicked');
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      ham.classList.remove('flipped')
    //   menuIcon.style.display = "block";
    } else {
      ham.classList.add('flipped')
      menu.classList.add("showMenu");
    
    //   xIcon.style.display = "block";
    //   menuIcon.style.display = "none";
    }
  }