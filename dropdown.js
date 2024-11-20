/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
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
/*slide show code*/
const els = (sel, par = document) => par.querySelectorAll(sel);
const el = (sel, par = document) => par.querySelector(sel);
const mod = (n, m) => (n % m + m) % m;

els(".slider-wrapper").forEach(elPar => {
  const elSlider = el(".slider", elPar);
  const elsItems = els(".item", elPar);
  const sub = +elPar.dataset.items ?? 1;
  const tot = Math.ceil(elsItems.length / sub);
  let c = 0;
  
  const anim = () => elSlider.style.transform = `translateX(-${c*100}%)`;
  const prev = () => (c = mod(c-1, tot), anim());
  const next = () => (c = mod(c+1, tot), anim());
  
  el(".prev", elPar).addEventListener("click", prev);
  el(".next", elPar).addEventListener("click", next);
});
