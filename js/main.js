function cartaAleatoria() {
    const carta1 = "El Mago";
    const carta2 = "La Emperatriz";
    const carta3 = "El Emperador";
    const carta4 = "El Loco";
    const carta5 = "El Colgado";
    const carta6 = "La Muerte";
    const carta7 = "La Fuerza";
    const carta8 = "La Estrella";
    const carta9 = "El Sol";
    const carta10 = "La Luna";
    const carta11 = "El Mundo";
    const carta12 = "El Juicio";
    const carta13 = "La Justicia";

    const numeroAleatorio = Math.floor(Math.random() * 13) + 1;

    switch (numeroAleatorio) {
        case 1:
            return carta1;
        case 2:
            return carta2;
        case 3:
            return carta3;
        case 4:
            return carta4;
        case 5:
            return carta5;
        case 6:
            return carta6;
        case 7:
            return carta7;
        case 8:
            return carta8;
        case 9:
            return carta9;
        case 10:
            return carta10;
        case 11:
            return carta11;
        case 12:
            return carta12;
        case 13:
            return carta13;
    }
}

function jugarTarot() {
    console.log("Proba tu suerte con las cartas de tarot!");

    let cartasSacadas = 0;

    while (cartasSacadas < 3) {
        const respuesta = prompt("Presiona 'aceptar' para sacar 3 cartas o escribi 'salir' para terminar el juego:");

        if (respuesta === "salir") {
            break;
        }

        const carta = cartaAleatoria();
        console.log(`Tu carta es: ${carta}`);
        cartasSacadas++;
    }
}

jugarTarot();