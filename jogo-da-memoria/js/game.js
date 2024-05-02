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

    grid.appendChild(card)

    return card
}

function loadGame() {

    characters.forEach((character) =>{
        const card = createCard(character)
        grid.appendChild(card)
    })
}

loadGame()