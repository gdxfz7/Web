// Función para establecer un gradiente lineal en el fondo de un elemento
function setGradient(elementId, color1, color2) {
    var element = document.getElementById(elementId);

    // Verificar si el elemento existe en el documento
    if (element) {
        // Aplicar el gradiente al fondo del elemento
        element.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    } else {
        console.error(`Elemento con ID '${elementId}' no encontrado.`);
    }
}

// Ejemplo de uso:
// Suponiendo que tienes un elemento con ID 'fundo' en tu HTML que quieres aplicar un gradiente
// Define los colores que deseas para el gradiente
var colorInicial = '#ff0000'; // Rojo
var colorFinal = '#0000ff'; // Azul

// Llama a la función setGradient con el ID del elemento y los colores definidos
setGradient('fundo', colorInicial, colorFinal);
