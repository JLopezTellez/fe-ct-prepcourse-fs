function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let nuevoArray = arrayOfStrings.filter((element) => {
    return element.startsWith('a');
  });

  return nuevoArray;
}

module.exports = filter;
