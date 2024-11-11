// model.ts

export const estadoJuego = {
    puntuacion: 0
};
export const valoresCartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Reiniciar puntuación
export function reiniciarPuntuacion(): void {
    estadoJuego.puntuacion = 0;
}
