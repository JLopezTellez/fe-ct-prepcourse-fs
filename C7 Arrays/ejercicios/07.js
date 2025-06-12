function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => {
    // Para números
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    // Para strings, orden lexicográfico
    if (typeof a === 'string' && typeof b === 'string') {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    // Si mezcla tipos, convierto todo a string para evitar error
    return String(a).localeCompare(String(b));
  });
}

module.exports = ordenarArray;
