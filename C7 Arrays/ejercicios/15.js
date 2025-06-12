function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let max = array[0];
  let indiceMax = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      indiceMax = i; // Guardo el índice cuando encuentro un nuevo máximo
    }
  }

  return indiceMax;
}

module.exports = encontrarIndiceMayor;
