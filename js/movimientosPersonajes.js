var numeroJugadoresMismaPosicion = [];
var jugadoresjuntosAnteriores = "";

function actualizarPosiciones() {
  limpiarTablero();
  mostrarNuevasPosiciones();
  verificarJugadoresMismaPosicion();
  imprimirJugadoresJuntos();
  imprimirJugadoresAnteriores();
}
// limpiarTablero: Limpia el tablero y muestra la tabla de juego y la imagen del dado actualizada.
function limpiarTablero() {
  document.getElementById("block2").innerHTML = tablaDeJuego;
  actualizarImgDado();
}
// mostrarNuevasPosiciones: Muestra las nuevas posiciones de los jugadores en sus respectivas casillas.
function mostrarNuevasPosiciones() {
  for (let i = 1; i <= cantidadJugadores; i++) {
    var player = "player" + i;
    var position = positionPlayers[player];
    var avatar = avataresSeleccionados[player];
    document.getElementById("position" + position).innerHTML = avatar;
  }
}
//verificarJugadoresMismaPosicion: Verifica si hay jugadores en las mismas posiciones y actualiza la variable numeroJugadoresMismaPosicion.
function verificarJugadoresMismaPosicion() {
  numeroJugadoresMismaPosicion = obtenerClavesValoresIguales(positionPlayers);
}
// imprimirJugadoresJuntos: Imprime los jugadores que se encuentran juntos en una misma posición.
function imprimirJugadoresJuntos() {
  var numCombinacionesPosibles = numeroJugadoresMismaPosicion.length - 1;
  var jugadoresJuntos = numeroJugadoresMismaPosicion[numCombinacionesPosibles];

  if (jugadoresJuntos.length > 0) {
    var imprimirJugadoresJuntos = "";

    for (let i = 0; i < jugadoresJuntos.length; i++) {
      var player = jugadoresJuntos[i];
      imprimirJugadoresJuntos += avataresSeleccionados[player];
      document.getElementById("position" + positionPlayers[player]).innerHTML =
        imprimirJugadoresJuntos;
    }
  }
}
// imprimirJugadoresAnteriores: Imprime los jugadores que estaban juntos en la jugada anterior, en caso de haberlos.
function imprimirJugadoresAnteriores() {
  if (cantidadJugadores == 4) {
    var elementosPenultimaJugada = numeroJugadoresMismaPosicion[numeroJugadoresMismaPosicion.length - 2];

    if (elementosPenultimaJugada && elementosPenultimaJugada.length > 0) {
      jugadoresjuntosAnteriores = "";

      for (let i = 0; i < 2; i++) {
        var player = elementosPenultimaJugada[i];
        jugadoresjuntosAnteriores += avataresSeleccionados[player];
        document.getElementById("position" + positionPlayers[player]).innerHTML =
          jugadoresjuntosAnteriores;
      }
    }
  }
}
//obtenerClavesValoresIguales: Obtiene las claves (nombres de los jugadores) cuyos valores (posiciones) son iguales en el objeto positionPlayers.
function obtenerClavesValoresIguales(objeto) {
  var clavesValoresIguales = {};

  Object.keys(objeto).forEach((clave) => {
    var valor = objeto[clave];
    if (Object.values(objeto).filter((v) => v === valor).length > 1) {
      if (!clavesValoresIguales.hasOwnProperty(valor)) {
        clavesValoresIguales[valor] = [clave];
      } else {
        clavesValoresIguales[valor].push(clave);
      }
    }
  });

  return Object.values(clavesValoresIguales);
}

// Llamar a la función para ejecutar el código
actualizarPosiciones();

