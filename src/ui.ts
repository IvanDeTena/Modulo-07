// ui.ts
import {
    estadoJuego,
    reiniciarPuntuacion
} from "./modelo";
import {
    seleccionarCarta,
    obtenerPuntosCarta,
    sumarPuntos
} from "./motor";

// Actualizar contenido en el HTML
function actualizarHTML(id: string, contenido: string): void {
    const elemento = document.getElementById(id);
    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLElement) {
        elemento.innerHTML = contenido;
    }
}

// Pintar imagen de la carta en el HTML
function pintarCartaEnHTML(urlCarta: string): void {
    const cartaImg = document.getElementById("cartaImg");
    if (cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = urlCarta;
    }
}

// Actualizar puntuación en el HTML
function actualizarPuntuacionTotal(): void {
    actualizarHTML("puntuacionDiv", `Puntuación: ${estadoJuego.puntuacion}`);
}

// Mostrar mensaje en el HTML
function mostrarMensajeEnHTML(mensaje: string): void {
    actualizarHTML("mensajeDiv", mensaje);
}

// Mostrar botón de nueva partida
function mostrarBotonNuevaPartida(): void {
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "inline";
    }
}

// Verificar la puntuación y mostrar el mensaje adecuado
export function verificarPuntuacion(estadoJuego: { puntuacion: number }): string {
    if (estadoJuego.puntuacion === 7.5) {
        mostrarMensajeEnHTML("¡Lo has clavado! ¡Enhorabuena! Has llegado a 7.5.");
        mostrarBotonNuevaPartida();
        return "¡Lo has clavado!";
    } else if (estadoJuego.puntuacion > 7.5) {
        mostrarMensajeEnHTML("¡Game Over! Has superado los 7.5 puntos.");
        mostrarBotonNuevaPartida();
        return "Game Over";
    }

    return "Puntuación insuficiente para resultados";
}


// Obtener mensaje al plantarse
export function obtenerMensajePlantarse(puntos: number): string {
    if (puntos <= 4) return "Has sido muy conservador.";
    if (puntos === 5) return "Te ha entrado el canguelo eh?";
    if (puntos === 6 || puntos === 6.5 || puntos === 7) return "Casi casi...";
    if (puntos === 7.5) return "¡Lo has clavado! ¡Enhorabuena!";
    return "";
}

// Pedir una carta
export function pedirCarta(): void {
    const nuevaCarta = seleccionarCarta();
    const imagenesCartas: { [key: number]: string } = {
        1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
        2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
        3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
        4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
        5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
        6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
        7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
        10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
        11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
        12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    };

    pintarCartaEnHTML(imagenesCartas[nuevaCarta]);
    const puntosCarta = obtenerPuntosCarta(nuevaCarta);
    sumarPuntos(puntosCarta);  // Actualiza la puntuación
    actualizarPuntuacionTotal(); // Si tienes lógica adicional para la interfaz

    // Verifica la puntuación con el estado actual del juego
    verificarPuntuacion(estadoJuego); // Pasamos estadoJuego a verificarPuntuacion
}



// Plantarse
export function plantarse(): void {
    const mensaje = obtenerMensajePlantarse(estadoJuego.puntuacion);
    mostrarMensajeEnHTML(mensaje);
    mostrarBotonNuevaPartida();
}

// Nueva partida
export function nuevaPartida(): void {
    reiniciarPuntuacion();
    actualizarPuntuacionTotal();
    pintarCartaEnHTML("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    mostrarMensajeEnHTML("");
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "none";
    }
}
