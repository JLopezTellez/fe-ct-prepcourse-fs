function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero < 1) return false; // Las potencias de 2 son positivas y mayores a 0

  while (numero > 1) {
    if (numero % 2 !== 0) return false; // Si no es divisible entre 2, no es potencia
    numero = numero / 2;
  }

  return true; // Si llegamos a 1, era una potencia de 2
}

module.exports = esPotenciaDeDos;
