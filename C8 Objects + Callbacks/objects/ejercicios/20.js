function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let sumaLikes = 0;

  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    sumaLikes += objetoUsuario.posts[i].likes;
  }

  return sumaLikes;
}

module.exports = sumarLikesDeUsuario;
