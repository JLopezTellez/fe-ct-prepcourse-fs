function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  
  // array.forEach((Element) => {cb(Element)})
  array.forEach((Element) => {
    cb(Element);
  });
}

module.exports = forEach;
