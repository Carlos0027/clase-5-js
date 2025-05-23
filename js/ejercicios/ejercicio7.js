// Ejercicio 7: Número más grande
function mayor(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log("\nEjercicio 7:");
console.log("Mayor:", mayor([1, 4, 9, 2, 7]));