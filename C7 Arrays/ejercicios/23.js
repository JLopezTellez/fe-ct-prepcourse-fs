function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let array = [];
  
  for (let i = 0; i < 10; i++) {  // Bucle de 10 veces
    num = num + 2;  // Aumento el número en 2
    if (num === i) {  // Si el valor coincide con la cantidad de iteraciones
      return "Se interrumpió la ejecución"; // Me voy de la función
    }
    array.push(num); // Guardo el valor en el array
  }
  
  return array; // Si no se interrumpió, retorno el array
}

module.exports = breakStatement;
