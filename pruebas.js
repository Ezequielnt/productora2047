import * as THREE from 'three';

function recargarPagina() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('autoplayVideo');
    video.contentWindow.postMessage('{"method":"play"}', '*');
});

document.addEventListener("DOMContentLoaded", function () {
    const aside = document.getElementById("myAside");
    const toggleButton = document.getElementById("toggleButton");
    const closeButton = document.getElementById("closeButton");

    toggleButton.addEventListener("click", function () {
        const currentLeft = parseInt(getComputedStyle(aside).left);
        const newLeft = currentLeft === 0 ? -250 : 0;

        aside.style.left = newLeft + "px";

        // Oculta o muestra el botón en función del estado del aside
        toggleButton.style.display = newLeft === 0 ? "none" : "block";
    });

    closeButton.addEventListener("click", function () {
        aside.style.left = "-250px";
        toggleButton.style.display = "block"; // Muestra el botón cuando se cierra el aside
    });
});

// scrolear animacion
// JavaScript en tu archivo o en la etiqueta <script> de tu HTML
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el enlace de "Servicios"
    const serviciosLink = document.getElementById("servicios-link");

    // Agrega un evento de clic al enlace
    serviciosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene la posición de la sección "Servicios"
        const serviciosSection = document.getElementById("Servicios");
        const serviciosSectionPosition = serviciosSection.offsetTop;

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: serviciosSectionPosition,
            behavior: "smooth"
        });
    });
});
 
// Obtener el lienzo donde se renderizará el modelo 3D
var canvas = document.getElementById('logo3dCanvas');

// Crear una escena
var scene = new THREE.Scene();

// Crear una cámara
var camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Cargar el modelo FBX
var loader = new THREE.FBXLoader();
loader.load('png/2047_Identidad.fbx', function (fbx) {
    console.log('FBX cargado con éxito:', fbx);
    // Agregar el modelo a la escena
    scene.add(fbx);
}, undefined, function (error) {
    console.error('Error al cargar el FBX:', error);
});

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Actualizar la escena
    renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();

