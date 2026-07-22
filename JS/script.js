// 1. Guardamos referencia al div y al botón
const caja = document.getElementById("caja");
const btnColor = document.getElementById("btnColor");

// 2. Lista de colores por los que iremos rotando
const colores = ["#3498db", "#2ecc71", "#e67e22", "#e74c3c", "#9b59b6"];
let indiceActual = 0;

// 3. Escuchamos el evento click en el botón
btnColor.addEventListener("click", () => {
  // Avanzamos al siguiente color de la lista (y volvemos al inicio si se acaba)
  indiceActual = (indiceActual + 1) % colores.length;

  // Solo cambiamos la propiedad de color;
  // el CSS "transition" se encarga de que sea gradual
  caja.style.backgroundColor = colores[indiceActual];
});