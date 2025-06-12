function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(el => {
    if (typeof el === 'string') {
      return el.toUpperCase();
    }
    return el;
  });
}

module.exports = convertirStringAMayusculas;
