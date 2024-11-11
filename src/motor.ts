// motor.ts
import { estadoJuego, valoresCartas } from "./modelo";

// Generar número aleatorio
export function generarNumeroAleatorio(limite: number): number {
    return Math.floor(Math.random() * limite);
}

// Seleccionar carta aleatoria
export function seleccionarCarta(): number {
    return valoresCartas[generarNumeroAleatorio(valoresCartas.length)];
}

// Obtener puntos de una carta
export function obtenerPuntosCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

// Sumar puntos a la puntuación total
export function sumarPuntos(puntos: number): void {
    estadoJuego.puntuacion += puntos;
}
