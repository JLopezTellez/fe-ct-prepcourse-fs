function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero < 2) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; // Si es divisible por algún número, no es primo
    }
  }

  return true; // Si no fue divisible por ninguno, es primo
}

module.exports = esNumeroPrimo;
