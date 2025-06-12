function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let stringInvertido = [];
  let textoSeparado = texto.split('');

  for (let i = 0; i < textoSeparado.length; i++) {
    stringInvertido.unshift(textoSeparado[i]);
  }

  return stringInvertido.join(''); // Acá unís los caracteres sin comas
  
}

module.exports = invertirTexto;
