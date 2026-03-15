const inputNombre = document.getElementById('nombreUsuario');
const botonSaludar = document.getElementById('btnSaludar');
const mensajeSaludo = document.getElementById('mensaje');

botonSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    
    if (nombre.trim() !== '') {
        mensajeSaludo.textContent = `Hola ${nombre} Ejercicio DOM 1`;

        inputNombre.value = '';
        
    }else{
        mensajeSaludo.textContent = "Coloque en un nombre correcto!"
        inputNombre.value = '';
        
    }
    
})

const formulario = document.getElementById('formSucripcion');
const inputCorreo = document.getElementById('correoUsuario');
const mensajeExito = document.getElementById('mensajeEnvio');

formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const correo = inputCorreo.value;
    mensajeExito.textContent = `Gracias, hemos registrado su correo, ${correo}`;

    formulario.reset();

})