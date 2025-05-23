// Ejercicio 13: Reemplazar elemento
function reemplazar(arr, viejo, nuevo) {
    let pos = arr.indexOf(viejo);
    if (pos !== -1) {
        arr[pos] = nuevo;
    }
    return arr;
}
console.log("\nEjercicio 13:");
console.log("Reemplazado:", reemplazar([1, 2, 3], 2, 99));