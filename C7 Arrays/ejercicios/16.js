function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevoArray = []; // armamos un array vacío para guardar los resultados

  for (let i = 0; i < array.length; i++) {
    var el = array[i] * i;
    nuevoArray.push(el)
  }

  return nuevoArray; // devolvés el array completo después del for
}

module.exports = multiplicarElementosPorIndice;
