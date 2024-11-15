document.getElementById("discount-button").addEventListener("click", function () {
    const additionalFields = document.getElementById("additional-fields");
    const submitButton = document.getElementById("submit-button");
    const reserveButton = document.getElementById("reserve-button");

    // Mostrar u ocultar los campos adicionales
    if (additionalFields.style.display === "none") {
        additionalFields.style.display = "block"; // Muestra los campos adicionales
        submitButton.style.display = "none"; // Oculta el botón de enviar
        reserveButton.style.display = "block"; // Muestra el botón de reservar
    } else {
        additionalFields.style.display = "none"; // Oculta los campos adicionales
        submitButton.style.display = "block"; // Muestra el botón de enviar si se hace clic nuevamente
        reserveButton.style.display = "none"; // Oculta el botón de reservar
    }
});

function toggleDiscountText() {
    var button = document.getElementById('discount-button');
    if (button.innerText === "Obtener 15% de descuento") {
        button.innerText = "No, gracias"; // Cambia el texto del botón
    } else {
        button.innerText = "Obtener 15% de descuento"; // Opcional: volver al texto original
    }
}

function validateForm() {
    // Obtener todos los inputs del formulario
    const inputs = document.querySelectorAll('input[required]');
    let allFilled = true;

    // Verificar cada input
    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
            input.style.borderColor = 'red'; // Resaltar el campo vacío
        } else {
            input.style.borderColor = ''; // Restablecer el color si está lleno
        }
    });

    if (!allFilled) {
        alert('Por favor, completa todos los campos requeridos.');
    } else {
        alert('Formulario enviado con éxito.'); // Aquí puedes añadir la lógica para enviar el formulario
        // Puedes agregar la lógica para enviar el formulario aquí
    }
}
function checkAgeAndRedirect() {
    // Obtener la fecha de nacimiento
    const dobInput = document.getElementById('dob');
    const dobValue = new Date(dobInput.value);
    
    // Calcular la edad
    const today = new Date();
    let age = today.getFullYear() - dobValue.getFullYear();
    const m = today.getMonth() - dobValue.getMonth();
    
    // Ajustar la edad si el cumpleaños no ha ocurrido aún este año
    if (m < 0 || (m === 0 && today.getDate() < dobValue.getDate())) {
        age--;
    }

    // Redirigir si el usuario es menor de 18 años
    if (age < 18) {
        window.location.href = 'https://www.boing.es/';
    }
}
