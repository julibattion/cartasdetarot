let sections = document.querySelectorAll('.section')
let form = document.getElementById('form')
let lectura = document.getElementById ('lectura')
let cardsTarot = document.querySelector('.carousel-inner')
let cardsInner = document.getElementById ('cards-inner')
let verResultados = document.getElementById('verResultados')
let volverAJugar = document.getElementById('volverAJugar')
let firstScreen = document.getElementById('firstScreen')
let resultadosModal = document.getElementById('resultadosModal')
let carousel = document.getElementById('carrousel')
let btnIrAlInicio = document. getElementById('btnIrAlInicio')
let player1 = ''
let tempCards = []
let partidasGuardadas = []


form.addEventListener('submit', (e) => {
    e.preventDefault();
    player1 = e.target.player1.value;

    showPages('animacion');

    form.reset();

    const nombreJugador = {
        player1,
        cartas: []
    };

    partidasGuardadas.push(nombreJugador);

    localStorage.setItem('partidasGuardadas', JSON.stringify(partidasGuardadas));
    form.reset();

    setTimeout(() => {
        fetch('/js/cards.json')
            .then((response) => response.json())
            .then((cardsData) => {
                iniciarJuego(cardsData);
            })
            .catch((error) => {
                console.error('Error al cargar las cartas:', error);
            });
    }, 3500);
});

if (localStorage.getItem('partidasGuardadas')) {
    partidasGuardadas = JSON.parse(localStorage.getItem('partidasGuardadas'))
};

const showPages = (page) => {
    sections.forEach((item) => {
        if (item.id === page) {
            item.classList.remove('display-none');
            if (page === 'animacion') {
                Toastify({
                    text: "Esto puede tardar unos segundos",
                    duration: 3000,
                    style: {
                        background: "#dcc69f",
                    },
                    offset: {
                        x: 528,
                        y: 15,
                    },
                }).showToast();
            }
        } else {
            item.classList.add('display-none');
        }
    });
};

const iniciarJuego = (cartas) => {
    showPages('carrousel');

    const newCards = cartasAleatorias(cartas);

    actualizarPartida(newCards);

    guardarPartidas(partidasGuardadas);

    carrousel(newCards);
};

const cartasAleatorias = (cartas) => {
    const nuevasCartas = [];
    while (nuevasCartas.length < 3) {
        const random = Math.floor(Math.random() * cartas.length);
        if (nuevasCartas.indexOf(cartas[random]) === -1) {
            nuevasCartas.push(cartas[random]);
        }
    }
    return nuevasCartas;
};

const actualizarPartida = (nuevasCartas) => {
    partidasGuardadas[partidasGuardadas.length - 1].cartas = nuevasCartas;
};

const guardarPartidas = (partidas) => {
    localStorage.setItem('partidasGuardadas', JSON.stringify(partidas));
};

const carrousel = (nuevasCartas) => {
    let cardsTarot = '';
    let active = '';

    nuevasCartas.forEach((card, index) => {
        if (index === 0) active = 'active';
        else active = '';

        cardsTarot += `<div class="carousel-item ${active}" id="card${index + 1}" data-number="${index + 1}">
        <img src="./images/${card.image}" class="d-flex w-100 img-fluid"/>
        <div class="carousel-caption">
        <h5 class="firstName">${card.firstName}</h5>
        <p class="description">${card.description}</p>
        </div>
        </div>`;
    });

    cardsInner.innerHTML += cardsTarot;
};

let resModal = new bootstrap.Modal(document.getElementById ('resultadosModal'), {
    keyboard: false
});

volverAJugar.addEventListener('click', (e) => {
    resModal.hide();
    firstScreen.classList.remove('display-none');
    carousel.classList.add('display-none');
});
