document.writeln ("hacer un ejercicio de pedir un numero con 5 intentos y si no lo acierta que le diga el numero correcto" + "<br>");    
var numero = Math.floor(Math.random() * 100) + 1;
var intentos = 2;
var acierto = false;
var numeroUsuario;
while (intentos > 0 && !acierto) {
    numeroUsuario = prompt("Adivina el número entre 1 y 100. Tienes " + intentos + " intentos restantes. ");
    if (numeroUsuario == numero) {
      
        acierto = true;
        alert("¡Felicidades! Has adivinado el número.");
           

    } else {
        intentos--;
        
        if (numeroUsuario < numero) {
         
            alert("El número es mayor. Te quedan " + intentos + " intentos. ");
        } else {
            alert("El número es menor. Te quedan " + intentos + " intentos.");
        }
         
        document.writeln("numeros ingresados " + numeroUsuario + "<br> ")
      
        document.writeln ("numero ganador " + numero + "<br> ")
    }
}
