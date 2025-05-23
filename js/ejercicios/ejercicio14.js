// Ejercicio 14: Promedio de números
function promedio(arr) {
    if (arr.length === 0) return 0;
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma / arr.length;
}
console.log("\nEjercicio 14:");
console.log("Promedio:", promedio([10, 20, 30, 40]));