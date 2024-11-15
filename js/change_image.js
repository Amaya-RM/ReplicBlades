document.addEventListener("DOMContentLoaded", function() {
    const knifeSelect = document.getElementById("knife");
    const knifeImage = document.getElementById("knife-image");

    // Establecer la imagen por defecto
    knifeImage.src = "./img/Karambit.webp"; // Ruta de la imagen por defecto
    knifeImage.style.display = "block"; // Asegúrate de que la imagen esté visible

    knifeSelect.addEventListener("change", function() {
        const selectedValue = knifeSelect.value;

        // Define las rutas de las imágenes según la opción seleccionada
        let imagePath;
        switch (selectedValue) {
            case "karambit":
                imagePath = "./img/Karambit.webp";
                break;
            case "butterfly":
                imagePath = "./img/Butterfly.webp";
                break;
            case "bayonet":
                imagePath = "./img/Bayonet.webp";
                break;
            case "hunting":
                imagePath = "./img/Huntsman.webp";
                break;
            case "m9":
                imagePath = "./img/M9 Bayonet.webp";
                break;
            case "bowie":
                imagePath = "./img/Bowie.webp";
                break;
            case "classic":
                imagePath = "./img/Classic.webp";
                break;
            case "falchion":
                imagePath = "./img/Falchion.webp";
                break;
            case "flip":
                imagePath = "./img/Flip.webp";
                break;
            case "gut":
                imagePath = "./img/Gut.webp";
                break;
            case "kukri":
                imagePath = "./img/Kukri.webp";
                break;
            case "navaja":
                imagePath = "./img/Navaja.webp";
                break;
            case "nomad":
                imagePath = "./img/Nomad.webp";
                break;
            case "paracord":
                imagePath = "./img/Paracord.webp";
                break;
            case "shadow_dagger":
                imagePath = "./img/Shadow Daggers.webp";
                break;
            case "skeleton":
                imagePath = "./img/Skeleton.webp";
                break;
            case "stiletto":
                imagePath = "./img/Stiletto.webp";
                break;
            case "survival":
                imagePath = "./img/Survival Knife.webp";
                break;
            case "talon":
                imagePath = "./img/Talon Knife.webp";
                break;
            case "ursus":
                imagePath = "./img/Ursus.webp";
                break;
            default:
                imagePath = ""; // Opcional: define un comportamiento por defecto
        }

        // Cambia la fuente de la imagen con un efecto de desvanecimiento
        knifeImage.style.opacity = 0; // Hace que la imagen actual se desvanezca

        // Espera un momento antes de cambiar la imagen
        setTimeout(() => {
            knifeImage.src = imagePath; // Cambia la fuente de la imagen
            knifeImage.onload = () => {
                knifeImage.style.opacity = 1; // Hace que la nueva imagen aparezca
            };
        }, 500); // Ajusta el tiempo de espera según lo desees
    });
});
