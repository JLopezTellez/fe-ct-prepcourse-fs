function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = [];

  for (let i = 0; i < numeros.length; i++){
    numeros.push
    if (elementosVistos.includes (numeros[i])){
      return numeros[i];
    }
    elementosVistos.push(numeros[i]);
  }
}

module.exports = encontrarElementoRepetido;