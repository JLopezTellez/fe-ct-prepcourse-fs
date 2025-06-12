function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i]; // Suma todos los elementos
  }

  let promedio = suma / resultadosTest.length; // Calculamos el promedio fuera del bucle
  return promedio; // Retornamos el promedio
}

module.exports = promedioResultadosTest;
