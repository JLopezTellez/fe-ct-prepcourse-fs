function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Si no se recibe una función callback entonces se debe retornar el string original.
  // Tu código:
  if (typeof callback === 'function') {
    return callback(string); // Si es una función, la invoca
  } else {
    return string; // Si no hay callback, devuelve el string original
  }
}

module.exports = cambiarCadena;
