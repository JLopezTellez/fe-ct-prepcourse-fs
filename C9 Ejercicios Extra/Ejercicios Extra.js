/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  // Object.entries(objeto) convierte un objeto en un array de arrays con cada par clave-valor.
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  // Primero ordena el string para que las letras queden alfabéticamente.
  // Va contando cuántas veces aparece cada letra y lo guardo en un objeto.
  let resultado = {};

  let ordenado = string.split('').sort();

  for (let letra of ordenado) {
    if (resultado[letra]) {
      resultado[letra]++;
    } else {
      resultado[letra] = 1;
    }
  }

  return resultado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  // Se arman dos strings: uno con mayúsculas y otro con minúsculas. Al final se juntan.
  let mayus = '';
  let minus = '';

  for (let letra of string) {
    if (letra === letra.toUpperCase()) {
      mayus += letra;
    } else {
      minus += letra;
    }
  }

  return mayus + minus;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // Primero separa las palabras.
  // Después, invierte cada palabra individualmente con reverse().
  // Al final, vuelve a unir la frase.
  return frase
    .split(' ')
    .map((palabra) => palabra.split('').reverse().join(''))
    .join(' ');
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  // Pasa a string, invierte, y compara con el original.
  let numString = numero.toString();
  let invertido = numString.split('').reverse().join('');

  if (numString === invertido) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  // Recorre el primer array, busco si ese elemento está en el segundo array, y si no lo agregué antes al resultado, lo pushea.
  let resultado = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !resultado.includes(array1[i])) {
      resultado.push(array1[i]);
    }
  }

  return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
