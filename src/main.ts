// main.ts
import { pedirCarta, plantarse, nuevaPartida } from "./ui";

// Configuración de eventos para los botones
const btnPedirCarta = document.getElementById("pedirCartaBtn");
if (btnPedirCarta !== null && btnPedirCarta !== undefined && btnPedirCarta instanceof HTMLButtonElement) {
    btnPedirCarta.addEventListener("click", pedirCarta);
}

const btnPlantarse = document.getElementById("plantarseBtn");
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", plantarse);
}

const btnNuevaPartida = document.getElementById("nuevaPartidaBtn");
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", nuevaPartida);
}
