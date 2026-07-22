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

  ## Segunda iteración
  En la respuesta usas esta sentencia: "// Avanzamos al siguiente color de la lista (y volvemos al inicio si se acaba) indiceActual = (indiceActual + 1) % colores.length;" , pero no entendí bien como funciona. Podrías explicar línea por línea, como si fuera mi primera vez usandolo? Después dame el código de nuevo pero con comentarios más detallados en cada paso importante.

  ## Respuesta a la segunda iteración
  ¡Con gusto! Vamos a desglosar esa línea completa, pieza por pieza.

Entendiendo (indiceActual + 1) % colores.length
Paso 1: ¿Qué es colores.length?

colores es un array (una lista):

javascript
const colores = ["#3498db", "#2ecc71", "#e67e22", "#e74c3c", "#9b59b6"];

colores.length es la cantidad de elementos que tiene esa lista. En este caso, tiene 5 colores, así que colores.length vale 5.

Los índices (posiciones) de un array siempre empiezan en 0, no en 1. Entonces las posiciones válidas son:

Índice	Color
0	"
#3498db"
1	"
#2ecc71"
2	"
#e67e22"
3	"
#e74c3c"
4	"
#9b59b6"

El último índice válido es 4, aunque haya 5 elementos. Ese es justo el problema que vamos a resolver.

Paso 2: ¿Qué es el símbolo %?

El símbolo % se llama operador módulo (o "resto de la división"). No es un porcentaje aquí, es matemática de división.

a % b te da el resto que queda cuando divides a entre b.

Ejemplos concretos:

7 % 5 → 7 dividido entre 5 es 1, y sobra 2 → el resultado es 2
5 % 5 → 5 dividido entre 5 es 1, y sobra 0 → el resultado es 0
3 % 5 → 3 dividido entre 5 es 0, y sobra 3 (porque 3 es menor que 5) → el resultado es 3
Paso 3: ¿Por qué sumamos 1 primero?

Queremos avanzar al siguiente color, así que empezamos sumando 1 al índice actual: indiceActual + 1.

Paso 4: Juntando todo, paso a paso con números reales

Supongamos que indiceActual empieza en 0 (el primer color). Cada vez que haces click, esto pasa:

Click 1:

indiceActual + 1  →  0 + 1 = 1
1 % 5             →  1 (porque 1 entre 5 no alcanza a dividirse, sobra 1)
indiceActual ahora vale 1  →  color "#2ecc71"

Click 2:

indiceActual + 1  →  1 + 1 = 2
2 % 5             →  2
indiceActual ahora vale 2  →  color "#e67e22"

Click 3: indiceActual termina en 3
Click 4: indiceActual termina en 4 (el último color, "
#9b59b6")

Click 5 — aquí está la magia:

indiceActual + 1  →  4 + 1 = 5
5 % 5             →  5 dividido entre 5 es 1, sobra 0
indiceActual ahora vale 0  →  ¡volvimos al primer color!
La idea en una frase

El % colores.length actúa como un "techo invisible": cada vez que el índice llegaría a pasarse del último elemento, el módulo lo hace rebotar de vuelta a 0 en lugar de dejarlo crecer sin control (lo cual daría undefined, porque no existe un color en la posición 5).

Sin el %, tendrías que escribir algo más largo y torpe, como:

javascript
indiceActual = indiceActual + 1;
if (indiceActual >= colores.length) {
  indiceActual = 0;
}

El operador % hace exactamente lo mismo, pero en una sola línea.

Código completo con comentarios más detallados
javascript
// ============================================
// PASO 1: Conectamos JavaScript con el HTML
// ============================================
// getElementById busca en la página un elemento con ese "id"
// y nos da acceso a él para poder manipularlo

const caja = document.getElementById("caja");         // el div que cambiará de color
const btnColor = document.getElementById("btnColor"); // el botón que el usuario presiona


// ============================================
// PASO 2: Definimos los colores disponibles
// ============================================
// Un array es una lista ordenada. Cada color tiene una posición (índice)
// empezando en 0:  índice 0 = "#3498db", índice 1 = "#2ecc71", etc.

const colores = ["#3498db", "#2ecc71", "#e67e22", "#e74c3c", "#9b59b6"];

// Esta variable recuerda en qué posición de la lista estamos ahora mismo.
// Empieza en 0, es decir, en el primer color de la lista.
let indiceActual = 0;


// ============================================
// PASO 3: Escuchamos el evento "click"
// ============================================
// addEventListener registra una función que se ejecutará
// automáticamente cada vez que el usuario haga click en el botón

btnColor.addEventListener("click", () => {

  // --- Calculamos cuál es el SIGUIENTE índice ---
  // Sumamos 1 para avanzar en la lista.
  // El operador "%" (módulo) nos da el RESTO de una división.
  // Sirve para "reiniciar" el conteo cuando llegamos al final de la lista,
  // en vez de intentar acceder a una posición que no existe.
  //
  // Ejemplo con 5 colores (índices válidos: 0,1,2,3,4):
  //   si indiceActual = 4 (último color), entonces:
  //   4 + 1 = 5
  //   5 % 5 = 0   -> volvemos al principio
  indiceActual = (indiceActual + 1) % colores.length;

  // --- Aplicamos el nuevo color ---
  // colores[indiceActual] busca el color guardado en esa posición del array
  // .style.backgroundColor lo asigna como el nuevo color de fondo del div
  //
  // Nota: el cambio se ve GRADUAL (no instantáneo) gracias a la propiedad
  // CSS "transition: background-color 1.5s ease;" que está en el archivo CSS.
  // JavaScript solo cambia el valor; el navegador se encarga de animarlo.
  caja.style.backgroundColor = colores[indiceActual];
});

## Prueba del código

### ¿Funcionó a la primera?
[Sí/No]

Rta: si el código funciono a la primera

### Si no funcionó, ¿qué error apareció?
[Describe el error]

Rta: no se presentaron errores

### ¿Cómo lo resolviste?
[Explica tu proceso]

Rta: no se presentaron errores


## Análisis crítico

### Problemas encontrados:
Rta: no se encontraron problemas a la solución por parte de AI

### Alucinaciones o errores de la AI:
[¿La AI inventó algo? ¿Dio información incorrecta?]
Rta: más que inventarse propuso una solución un poco más practica en el recorrido
del array de colores, sin el uso de condicionales.

### Decisiones que tomé:
[¿Qué cambiaste tú? ¿Por qué?]
Rta: el cambio que realice a la respuesta fue hacer el uso de los colores aletorios
con el objetivo de que no se limite a un listado predefinido.


## Reflexión final

### Herramienta de AI usada:
Claude

### Cantidad de prompts necesarios:
2

### ¿Qué mejoró al iterar los prompts?
Mejoro la explicación para recorrer el array de los colores predefinidos

### ¿Qué aprendiste sobre cómo formular prompts?
Que la IA responde especificamente, cuando más clara es la solicitud.
No se permite tantas alucionaciones por parte de ella si se aclara y detalla muy bien cada solicitud

### ¿Hubo algo que la AI no pudo resolver?
La IA si pudo resolver lo solicitado

### ¿La AI cometió algún error o "alucinó"?
No cometio errores

### ¿Qué decisiones tomaste tú como desarrollador?
Al presentarse dos opciones para el manejo de los colores decidí seleccionar el código más adecuado a mi gusto.

### Conceptos técnicos aprendidos:

**Tokens:**
- ¿Qué son? Es la unidad minima de texto que puede procesar una herramienta IA
- ¿Cómo afectan el uso de AI? Afectan en las limitantes por cuestiones de costos, por ejemplo puede que una IA, solo permita en el plan free procesar 10 tokens, por ello si tú dependencia al asistente es elevada, dichos costos se elevaran para poder obtener los resultados esperados.

**Rate Limiting:**
- ¿Qué es? Es el limite de tokens que un AI puede recibir de tú parte según el plan en al cual te encuentres
- ¿Por qué existe? existe porque dichos asistentes (IA), usan recursos de infraestructura limitados, por ello y por la gran demanda a nivel mundial deben filtrar su disponibilidad con el objetivo de garantizar su uso a nivel global, y priviligiar a quienes acceden a sus planes pagos.