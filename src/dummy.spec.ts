import { describe, it, expect, vi } from 'vitest';
import { verificarPuntuacion } from './ui';


// Mock de las funciones utilizadas en verificarPuntuacion
const mostrarMensajeEnHTML = vi.fn();
const mostrarBotonNuevaPartida = vi.fn();



describe('verificarPuntuacion', () => {
   

    it('debe retornar "¡Lo has clavado!" y mostrar los mensajes correctos si la puntuación es 7.5', () => {
        // Arrange
        const estadoJuego = { puntuacion: 7.5 };

        // Act
        const resultado = verificarPuntuacion(estadoJuego);

        // Assert
        expect(resultado).toBe("¡Lo has clavado!");
    });

    it('debe retornar "Game Over" y mostrar los mensajes correctos si la puntuación es mayor a 7.5', () => {
        // Arrange
        const estadoJuego = { puntuacion: 8 };

        // Act
        const resultado = verificarPuntuacion(estadoJuego);

        // Assert
        expect(resultado).toBe("Game Over");
    });

    it('debe retornar "Puntuación insuficiente para resultados" si la puntuación es menor a 7.5 y no llamar a las otras funciones', () => {
        // Arrange
        const estadoJuego = { puntuacion: 6 };

        // Act
        const resultado = verificarPuntuacion(estadoJuego);

        // Assert
        expect(resultado).toBe("Puntuación insuficiente para resultados");
        expect(mostrarMensajeEnHTML).not.toHaveBeenCalled();
        expect(mostrarBotonNuevaPartida).not.toHaveBeenCalled();
    });
});


import { obtenerMensajePlantarse } from './ui';

describe('obtenerMensajePlantarse', () => {
    it('debe retornar "Has sido muy conservador." si los puntos son 4 o menos', () => {
        // Arrange
        const puntos = 4;

        // Act
        const resultado = obtenerMensajePlantarse(puntos);

        // Assert
        expect(resultado).toBe("Has sido muy conservador.");
    });

    it('debe retornar "Te ha entrado el canguelo eh?" si los puntos son exactamente 5', () => {
        // Arrange
        const puntos = 5;

        // Act
        const resultado = obtenerMensajePlantarse(puntos);

        // Assert
        expect(resultado).toBe("Te ha entrado el canguelo eh?");
    });

    it('debe retornar "Casi casi..." si los puntos son 6, 6.5 o 7', () => {
        
        expect(obtenerMensajePlantarse(6)).toBe("Casi casi...");

        expect(obtenerMensajePlantarse(6.5)).toBe("Casi casi...");

        expect(obtenerMensajePlantarse(7)).toBe("Casi casi...");
    });

    it('debe retornar "¡Lo has clavado! ¡Enhorabuena!" si los puntos son exactamente 7.5', () => {
        // Arrange
        const puntos = 7.5;

        // Act
        const resultado = obtenerMensajePlantarse(puntos);

        // Assert
        expect(resultado).toBe("¡Lo has clavado! ¡Enhorabuena!");
    });

    it('debe retornar una cadena vacía si los puntos son superiores a 7.5', () => {
        // Arrange
        const puntos = 8;

        // Act
        const resultado = obtenerMensajePlantarse(puntos);

        // Assert
        expect(resultado).toBe("");
    });
});