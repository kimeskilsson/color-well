var colorWell;
var defaultColor = "#0000ff";

// När window laddas, kör funktionen startup
window.addEventListener("load", startUp, false);

function startUp(){
  colorWell = document.querySelector("#colorwell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("change", updateFirst, false);
  colorWell.addEventListener("input", updateAll, false);
  colorWell.select();

}

function updateFirst(event) {
  let p= document.querySelector("p");

  if(p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = event.target.value;
  });
}

