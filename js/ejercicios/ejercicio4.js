// Ejercicio 4: Contar vocales
function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiouAEIOU";
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log("\nEjercicio 4:");
console.log("Vocales:", contarVocales("Diana Carolina"));