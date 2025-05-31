function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let min = Math.min(a, b); // Establece cual es el minimo numero entre a y b.
  let max = Math.max(a, b); // Establece cual es el maximo numero entre a y b, para hacer el bucle de menor a mayor.
  let producto = 1; // Empieza el producto de los números en 1. Si fuera 0 daría 0.

  for (let i = min; i <= max; i++) { // i será el minimo entre a y b; mientras este sea menor  o igual al maximo; agregar uno a i.
    producto *= i; // Es lo mismo que producto = producto * i
  }

  // Corregir -0 a 0
  return producto === 0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;