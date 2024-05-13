const grid = document.querySelector('.grid')

const characters = [
    "deku",
    "bakugou",
    "uraraka",
    "eraser",
    "tsuyu",
    "togata",
    "suneater",
    "eri",
    "todoroki",
    "tokoyami"
]

function createElement(tag, className) {
    var element = document.createElement(tag)
    element.className = className

    return element
}

function createCard(character) {

    var card = createElement('div', 'card')
    var front = createElement('div', 'face front')
    var back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../imagens/${character}.jpeg')`
 
    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card
}

function CheckEndGame() {
    const disabledCards = document.querySelectorAll ('.disabledCard')
    if (disabledCards.length == 20) {
        window.alert('Voce conseguiu')
    }
}

function CheckCard() {
    var firstCharacter = firstCard.getAttribute('data-character')
    var secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disabledCard')
        secondCard.firstChild.classList.add('disabledCard')
        firstCard = ''
        secondCard = ''

        CheckEndGame()


    } else {
        setTimeout(() => { 
        
        firstCard.classList.remove('revealCard')
        secondCard.classList.remove('revealCard')

        firstCard = ''
        secondCard = ''
    }, 500)
}
}

    let firstCard = ''

    let secondCard = ''

function revealCard({ target }) {
    if (target.parentNode.className.includes('revealCard')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('revealCard')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('revealCard')
        secondCard = target.parentNode

        CheckCard()

    }

    
}


function loadGame() {

    const duplicateCharacters = [ ...characters, ...characters ]

    const shuffledCharacters = duplicateCharacters.sort(() => Math.random() - 0.5)

    shuffledCharacters.forEach((character) =>{
        const card = createCard(character)
        grid.appendChild(card)
    })
}

loadGame()