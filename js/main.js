const cartasTarot = [{ 
    nombre: "El Mago", 
    significado: "Comienzo de algo nuevo" 
}, 
{ 
    nombre: "La Sacerdotisa", 
    significado: "Buen juicio y una intuición poderosa." 
},
{ 
    nombre: "La Emperatriz", 
    significado: "Poder femenino, fertilidad y atractivo." 
},
{ 
    nombre: "El Emperador", 
    significado: "Estabilidad, el poder terrenal y el control del propio ego." 
},
{ 
    nombre: "Los Enamorados", 
    significado: "Armonía, amor, confianza, honor, gozo y satisfacción de los deseos." 
},
{ 
    nombre: "La Justicia", 
    significado: "Justicia, equilibrio, honor, imparcialidad y buenas intenciones." 
},
{ 
    nombre: "La Rueda de la Fortuna", 
    significado: "Representa el destino, la capacidad de llegar al final de un problema." 
},
{ 
    nombre: "La Fuerza", 
    significado: "Triunfo de la mente sobre la materia y la fuerza física." 
},
{ 
    nombre: "El Colgado", 
    significado: "Sufrimiento y vergüenza, pérdida de ego, autoestima y riqueza material." 
},
{ 
    nombre: "La Muerte", 
    significado: "Transformación, final de relación, un trabajo o un ingreso, que es necesario antes de empezar de nuevo." 
}];

function cartaAleatoria() {
    const numeroAleatorio = Math.floor(Math.random() * cartasTarot.length);
    return cartasTarot[numeroAleatorio];
}

function jugarTarot() {
    console.log("Proba tu suerte con las cartas de tarot!");

    const respuesta = prompt("Presiona 'aceptar' para sacar 3 cartas o escribi 'salir' para terminar el juego:");

    if (respuesta === "salir") {
        return;
    }

    const cartasSeleccionadas = [];

    for (let i = 0; i < 3; i++) {
        const carta = cartaAleatoria();
        cartasSeleccionadas.push(carta);
    }

    cartasSeleccionadas.forEach(carta => {
        console.log(`Carta: ${carta.nombre}`);
        console.log(`Significado: ${carta.significado}`);
    });
}

jugarTarot();