// Ejercicio 2: Generar contraseña
function generarContraseña() {
    let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minus = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let especiales = "@#$%&()=?¿*+[]{}";
    let total = [];

    for (let i = 0; i < 2; i++) {
        total.push(mayus[Math.floor(Math.random() * mayus.length)]);
        total.push(minus[Math.floor(Math.random() * minus.length)]);
        total.push(numeros[Math.floor(Math.random() * numeros.length)]);
        total.push(especiales[Math.floor(Math.random() * especiales.length)]);
    }

    total.sort(() => Math.random() - 0.5);
    return total.join('');
}
console.log("\nEjercicio 2:");
console.log("Contraseña:", generarContraseña());