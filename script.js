function openmenu() {
  var menu = document.getElementById("menu");
  var close = document.getElementById("close");
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  close.style.display = 'flex';
}
function closemenu() {
  var menu = document.getElementById("menu");
  var close = document.getElementById("close");
  menu.style.display = 'none';
  close.style.display = 'none';
}