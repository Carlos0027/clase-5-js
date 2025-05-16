//agenda de contactos
// Definición de la clase Contacto

function AgregarContacto() {
    console.clear();
    let nombre = prompt("Ingrese el nombre del contacto:");
    let telefono = prompt("Ingrese el teléfono del contacto:");
    let email = prompt("Ingrese el email del contacto:");
  
    let contacto ={
        "nombre": nombre,
        "telefono": telefono,
        "email": email
    }
    agenda.push(contacto);
    console.log("Contacto agregado:", contacto);
}
function listarContactos() {
    console.clear();
    console.log("Lista de contactos:");
    contactos.forEach((contacto, index) => {
        console.log("identificacion: " + contacto.identificacion);
        console.log("Nombre: " + contacto.nombre);
        console.log("Teléfono: " + contacto.telefono);
        console.log("Email: " + contacto.email);
        console.log("-------------------------");
    
    })
}

function consultarporidentificacion() {
    console.clear();
    let identificacion = prompt("Ingrese la identificación del contacto a buscar:");
    existecontacto = false;
    contactos.forEach((contacto) => {
        if (contacto.identificacion == identificacion) {
            existecontacto = true;
            console.log("Contacto encontrado:");
            console.log("Nombre: " + contacto.nombre);
            console.log("Teléfono: " + contacto.telefono);
            console.log("Email: " + contacto.email);
        }
    
    });}
    

function menu() {
    console.clear();
    console.log("1. Agregar contacto");
    console.log("2. Mostrar contactos");
    console.log("3. Buscar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");
  opcion = parseInt(prompt("Seleccione una opción:"));
  
    switch (opcion) {
        case "1":
            AgregarContacto();
            break;
        case "2":
            MostrarContactos();
            break;
        case "3":
            BuscarContacto();
            break;
        case "4":
            EliminarContacto();
            break;
        case "5":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida.");
            break
    }
    prompt("Presione Enter para continuar...")

}
    menu();
    console.log("Fin del programa");
    
