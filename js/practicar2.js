//que reciba como parametro un un arreglo de numeros y debe retornar un arreglo con los numeros que son mayores a 10
function cuadradoNumeros(numeros) {
    let numeros = arreglo.split(",").map(Number);
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {resultado.push(numeros[i]);
        }
    }
    return resultado;
}





