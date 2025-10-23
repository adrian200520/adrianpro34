const formulario = document.querySelector('#contacto')

if (formulario){
    formulario.addEventListener("submit"), 
    (event) =>{
        //evitart que el formulareio se envie
        event.preventdefault();

        //obtener valores de mi formulario
        const nombre = document.getElementById("nombre").value;
        const document = document.getElementById("mensaje").value;
        const correo = document.getElementById("correo").value;
        const numero = document.getElementById("telefono").value;

        console.log ("nombre", nombre)
        console.log ("correo", correo)
        console.log ("numero", numero)
        console.log ("mensaje es", document)

        alert("Hola " + nombre +
            "tu correo es " + correo +
            "tu motivo de contacto es: " + descripcion)
    }
} else {
console.error("No se pudo encontrar el formulario con el ID #contacto")
}