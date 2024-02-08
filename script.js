function mostrarMenu() {
  var menu = document.querySelector("#menu");
  let state = menu.style.display;
  if (state === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function actualizarInfo() {
  var ancho =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (ancho >= 992) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  actualizarInfo();
});

actualizarInfo();
