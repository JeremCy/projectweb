$(document).ready(function(){
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
    document.getElementById("myLink").click();
  }
  $("mylink").onclick(function(){
    openMenu(event, 'Eat');
  }
  $("w3-col s6 tablink").onclick(function(){
    openMenu(event, 'Drink');
  }
  )}
