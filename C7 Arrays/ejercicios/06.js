function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let nuevoArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    nuevoArray.push(array[i]);
  }
  return nuevoArray;
}

module.exports = invertirArray;
