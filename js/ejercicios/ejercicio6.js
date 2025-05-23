// Ejercicio 6: Sumar arreglo
function sumar(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma;
}
console.log("\nEjercicio 6:");
console.log("Suma:", sumar([10, 20, 30]));