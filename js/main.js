const cartasTarot = {
    carta1: "El Loco",
    carta2: "El Mago",
    carta3: "La Sacerdotisa",
    carta4: "La Emperatriz",
    carta5: "El Emperador",
    carta6: "La Justicia",
    carta7: "El Ermitaño",
    carta8: "El Colgado",
    carta9: "La Muerte",
    carta10: "La Estrella"
  };
  

  function elegirCartaAleatoria() {
    const cartas = Object.values(cartasTarot);
    const cartaAleatoria = Math.floor(Math.random() * cartas.length);
    return cartas[cartaAleatoria];
  }
  
  function jugarTarot() {
    console.log("Proba tu suerte con las cartas de tarot.");
    
    let cartasSacadas = 0;
  
    while (cartasSacadas < 3) {
      const respuesta = prompt("Presiona 'aceptar' para sacar tus cartas o escribe 'salir' para terminar el juego:");
  
      if (respuesta === "salir") {
        break;
      }
  
      const carta = elegirCartaAleatoria();
      console.log(`Tu carta es: ${carta}`);
      cartasSacadas++;
    }
  }
  
  jugarTarot();