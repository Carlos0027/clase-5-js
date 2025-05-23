// 1. Maximizar Z = x^2 + y^2

let mejorZ = -Infinity;
let mejorX = 0;
let mejorY = 0;

for (let i = 0; i < 100; i++) {
    let x = Math.random() * 10 - 5;
    let y = Math.random() * 10 - 5;
    let z = x * x + y * y;

    if (z > mejorZ) {
        mejorZ = z;
        mejorX = x;
        mejorY = y;
    }
}
console.log("Mejor Z:", mejorZ.toFixed(2));
console.log("Con x =", mejorX.toFixed(2), "y y =", mejorY.toFixed(2));