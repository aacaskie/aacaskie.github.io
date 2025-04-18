/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let slideIndex;
let mv;
document.addEventListener("DOMContentLoaded", function() {
 slideIndex = 1;
 showSlides(slideIndex);
console.log("starting");
});


function myFunctionPaint() {
  document.getElementById("paint").classList.toggle("show");
}
function myFunctionSketch() {
  document.getElementById("sketch").classList.toggle("show");
}
function myFunctionLink() {
  document.getElementById("link").classList.toggle("show");
}
function myFunctionGame() {
  document.getElementById("game").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && (event.target.id != openDropdown.id)) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gslides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  mv = window.matchMedia( "(orientation: portrait)" );
  if (mv.matches) {
    console.log("small");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
}
else {
    console.log("large");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
   slides[slideIndex -1].style.display = "block";
}
}

function resizeCheck() {
  showSlides(slideIndex);
  console.log("resize");
}
window.onresize = resizeCheck;
/* include html*/
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
