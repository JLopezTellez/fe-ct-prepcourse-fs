function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;

  do {
    num = num + 5; // Agrega 5 a la variable num;
    contador++; // En cada vuelta aumenta el contador en 1;
  } while (contador < 8); // Mientras el contador sea menor a 8.

  return num;
}

module.exports = doWhile;