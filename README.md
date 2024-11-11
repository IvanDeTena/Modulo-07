# Módulo-07 🍋

**Bootcamp JS 2 - Laboratorio Módulo 7 - Testing**

---

## Testing con Vitest en JavaScript

Vitest es un marco de pruebas similar a Jest, utilizado para ejecutar y organizar pruebas en proyectos JavaScript. Al usar Vitest, podemos estructurar nuestras pruebas en bloques organizados y fáciles de leer, utilizando una metodología clara como el sistema de las tres 'A': Arrange, Act, Assert.

### Importar Vitest
Para comenzar, es necesario instalar Vitest. Si aún no está instalado, ejecuta en la terminal:


><pre> npm install vitest --save-dev

Una vez instalado, puedes configurar Vitest en el archivo package.json para ejecutarlo con el comando npm test:


><pre>"scripts": {
><pre>  "test": "vitest"
><pre>}

### Crear pruebas con Vitest

Con Vitest, puedes organizar tus pruebas en bloques describe y it. Aquí tienes un ejemplo de prueba con estructura de tres 'A' (Arrange, Act, Assert) en un archivo de prueba:


><pre>import { describe, it, expect } from 'vitest';
><pre>import { suma } from './archivo'; // Importa la función que vas a probar

><pre>// Prueba de la función suma
>describe('Función suma', () => {
> it('debería retornar la suma de dos números', () => {
>  // Arrange: Configura los valores iniciales
> const num1 = 3;
>const num2 = 7;
>const resultadoEsperado = 10;
>
>   // Act: Ejecuta la función a probar
>  const resultado = suma(num1, num2);
>
> // Assert: Verifica el resultado obtenido
>expect(resultado).toBe(resultadoEsperado);
> });
>});


#### Explicación de la estructura de las pruebas

#### :one: 

Arrange: Se configuran las variables necesarias para la prueba. En este caso, num1, num2, y el resultadoEsperado.

#### :two:

Act: Ejecuta la función o método que deseas probar; aquí, se llama a suma(num1, num2).

#### :three:

Assert: Verifica que el resultado obtenido coincida con lo esperado usando expect.

Esta estructura facilita la lectura y organización de las pruebas, permitiendo encontrar rápidamente la parte relevante al analizar los resultados de pruebas fallidas.

### Ejecución de las pruebas

Para ejecutar las pruebas, utiliza el siguiente comando en la terminal:


><pre>npm test

Vitest proporcionará un resumen de las pruebas y mostrará detalles en caso de errores, permitiéndote depurar y mejorar tu código.

---

Este método modulariza y organiza las pruebas, manteniendo el código ordenado y fácil de mantener en proyectos grandes.