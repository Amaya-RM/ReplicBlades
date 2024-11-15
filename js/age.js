function validateAge() {
    const birthDate = new Date(document.getElementById('date').value); // Obtener la fecha de nacimiento
    const age = new Date().getFullYear() - birthDate.getFullYear(); // Calcular la edad

    // Ajustar la edad si no ha cumplido años este año
    if (new Date().setFullYear(birthDate.getFullYear()) > new Date()) {
        age--;
    }

    // Redirigir si es menor de edad
    if (age < 18) {
        window.location.href = "https://www.boing.es/";
    } else {
        alert("Gracias por confiar en nosotros!");
    }
}

// Asignar la función a los botones
document.getElementById('submit-button').addEventListener('click', validateAge);
document.getElementById('reserve-button').addEventListener('click', validateAge);
