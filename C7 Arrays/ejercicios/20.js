function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      return false; // si encuentra uno distinto, ya no son todos iguales
    }
  }
  return true; // si terminó el bucle, todos son iguales
}

module.exports = todosIguales;
