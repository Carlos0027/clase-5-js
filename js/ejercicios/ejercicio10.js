// Ejercicio 10: Eliminar duplicados
function sinDuplicados(arr) {
    return [...new Set(arr)];
}
console.log("\nEjercicio 10:");
console.log("Sin duplicados:", sinDuplicados([1, 1, 2, 3, 3, 4]));