// 1. Guardamos referencia al div y al botón
const caja = document.getElementById("caja");
const btnColor = document.getElementById("btnColor");

// 2. Lista de colores por los que iremos rotando
const colores = ["#3498db", "#2ecc71", "#e67e22", "#e74c3c", "#9b59b6"];
let indiceActual = 0;

// 3. Escuchamos el evento click en el botón
btnColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  caja.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});