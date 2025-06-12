function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) return 0; // Si no hay argumentos, devolvemos 0
  if (arguments.length === 1) return arguments[0]; // Si hay un solo argumento, lo devolvemos
  
  let producto = 1;

  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i]; // Vamos multiplicando todos los argumentos
  }

  return producto; // Devolvemos el producto final
}

module.exports = multiplicarArgumentos;
