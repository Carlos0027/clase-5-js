// Ejercicio 8: Contar palabras
function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    return palabras.length;
}
console.log("\nEjercicio 8:");
console.log("Palabras:", contarPalabras("Hola esto es una prueba"));