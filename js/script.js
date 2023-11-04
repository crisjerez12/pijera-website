const btnMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", navToggle);
function navToggle() {
  btnMenu.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
