# Para la practica de la acticidad 6 se selecciona la herramienta de IA Claude 

## El primer prompts utilizado es el siguiente:

Contexto: Estoy practicando javascritp puro sin uso de framework 

nivel es principiante

Objetivo: crear un codigo que permita que un elemento Html  por ejemplo un div cambie de color de forma gradual cuando el usuario hace click en un botón 

Requisitos: solo debe usarse javascrit puro, y css, el cambio debe ser visible y gradual, debe funcionar en navegadores modernos,  el código debe ser claro y bien comentado  

## Respuesta de la IA Claude:
¡Buena práctica! Este es un caso perfecto para usar CSS transitions controladas por JavaScript. Te explico la lógica antes del código:

1. En CSS defines una transition sobre la propiedad background-color (esto hace que el cambio sea gradual, no instantáneo).
2. En JavaScript solo te encargas de cambiar el valor del color cuando se hace click; el navegador se encarga de animar la transición automáticamente.

Ahí tienes el demo funcionando. Ahora te explico el código completo para que lo repliques en tu propio archivo:

HTML (index.html)

html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cambio de color gradual</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <!-- El div que cambiará de color -->
  <div id="caja"></div>

  <!-- El botón que dispara el cambio -->
  <button id="btnColor">Cambiar color</button>

  <script src="script.js"></script>
</body>
</html>

CSS (estilos.css)

css
#caja {
  width: 200px;
  height: 200px;
  background-color: #3498db; /* color inicial */

  /* CLAVE: la transición es lo que hace el cambio gradual.
     Sin esta línea, el color cambiaría de golpe. */
  transition: background-color 1.5s ease;
}

#btnColor {
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

JavaScript (script.js)

javascript
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
La idea clave

No necesitas ninguna librería ni animación manual con setInterval. El truco está en la propiedad CSS transition: le dices al navegador "cuando cambie background-color, hazlo suavemente en 1.5 segundos", y luego JavaScript solo se encarga de asignar el nuevo valor con .style.backgroundColor.

Variante con color aleatorio

Si prefieres que el color sea aleatorio en vez de una lista fija:

javascript
btnColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  caja.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

¿Quieres que le agreguemos algo más, como que el cambio de color se dispare automáticamente cada cierto tiempo, o que también anime el tamaño del div?


## Análisis:
- ¿Funcionó? Sí/No/Parcialmente 
  Rta: si la solución propuesta por la IA cumplio lo solicitado

- ¿Qué faltó?
  Rta: la solucion se enfoco más en la parte funcional que en la parte visual .Css en cuanto a la presentación del div, para mi gusto un poco cuadriculado

- ¿Qué estuvo bien?
  Rta: la solución presento la alternativa de colocar la presentación de colores aleatorios, si haberlo solicitado en el primer prompts

- ¿Hubo algo confuso o incorrecto?
  Rta: si la manera de recorrer el array de los colores, y cuando se termina vuelve al inicio.

- ¿Hay comentarios explicativos?
  Rta: si existen comentarios en el codigo que permiten entender el proceso que se realiza
- ¿El formato de la respuesta es útil?
  Rta: el formato si es util para lo que se solicito.