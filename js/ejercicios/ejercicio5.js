// Ejercicio 5: Contar pares
function contarPares(arr) {
    let pares = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            pares++;
        }
    }
    return pares;
}
console.log("\nEjercicio 5:");
console.log("Pares:", contarPares([1, 2, 3, 4, 5, 6]));