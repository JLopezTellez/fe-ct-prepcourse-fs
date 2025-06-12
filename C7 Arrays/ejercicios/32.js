function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código: 
  let texto = string.toLowerCase().replace(/\s+/g, ''); // Quitamos espacios y pasamos a minúsculas para que sea más general
  let textoInvertido = texto.split('').reverse().join(''); // Invertimos el texto

  if (texto === textoInvertido){
    return true;
  } else return false;
}

module.exports = esPalindromo;