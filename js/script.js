
// Crear tres variables con datos personales al azar
const nombre = "Josefina";
const edad = 39;
const ciudad = "Ushuaia";

// Mostrar un mensaje de bienvenida cuando cargue la página
window.addEventListener("DOMContentLoaded", () => {
    const mensaje = `¡Bienvenida, ${nombre} de ${ciudad}! Tienes ${edad} años.`;
    document.getElementById("mensaje").textContent = mensaje;
});
