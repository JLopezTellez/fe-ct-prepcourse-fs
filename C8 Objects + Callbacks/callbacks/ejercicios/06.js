function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  // let nuevoArray = array.map((element) => {
  //   return cb(element);
  // });

  // return nuevoArray;

  return array.map((element) => cb(element));
}

module.exports = map;
