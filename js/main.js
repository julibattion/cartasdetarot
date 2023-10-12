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
    e.preventDefault()
    player1 = e.target.player1.value
    
    showPages('animacion')

    form.reset()

    const nombreJugador = {
        player1,
        cartas: []
        };
    
        partidasGuardadas.push(nombreJugador);
    
        localStorage.setItem('partidasGuardadas', JSON.stringify(partidasGuardadas));
    
        form.reset();
    });


    if (localStorage.getItem('partidasGuardadas')) {
        partidasGuardadas = JSON.parse(localStorage.getItem('partidasGuardadas'));
    }


const showPages = (page) => {
    sections.forEach((item) => {
        if (item.id === page) {
            item.classList.remove('display-none')
        } else {
            item.classList.add('display-none')
        }

    })

    if (page === 'animacion') {
        let sto = setTimeout (() => iniciarJuego(), 3000);
    }
}


const iniciarJuego = () => {

    showPages('carrousel')

    let newCards = []
    let random = ''
    let cardsTarot = ''
    let active = ''

    while (newCards.length < 3) {
        random = Math.floor(Math.random()* cards.length)
        if (newCards.indexOf(cards[random]) == -1) {
            newCards.push(cards[random]);        
        }
    }

    partidasGuardadas[partidasGuardadas.length - 1].cartas = newCards;


    localStorage.setItem('partidasGuardadas', JSON.stringify(partidasGuardadas));

    tempCards += newCards;

    newCards.forEach((card, index) => {


        if (index === 0) active = 'active'
        else active = '';    
    
        cardsTarot += `<div class= "carousel-item ${active}" id="card${index + 1}" data-number="${index + 1}">
        <img src="./images/${card.image}" class="d-flex w-100 img-fluid"/>
        <div class="carousel-caption">
        <h5 class="firstName">${card.firstName}</h5>
        <p class="description">${card.description}</p>
        </div>
        </div>`

    });

    cardsInner.innerHTML += cardsTarot;

}



let resModal = new bootstrap.Modal(document.getElementById ('resultadosModal'), {
    keyboard: false
})

volverAJugar.addEventListener('click', (e) => {
    resModal.hide();
    firstScreen.classList.remove('display-none')
    carousel.classList.add('display-none')

});