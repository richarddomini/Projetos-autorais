const grid = document.querySelector('.grid')
const instru = document.querySelector('.instrucoes')
const button = document.querySelector("button")
const dialog = document.querySelector('dialog')
const paragra = document.querySelector('dialog > p')
button.onclick = function () {
    for (var l = 1; l < 4; l++) {
        for (var c = 1; c < 4; c++) {
        var v1 = document.querySelector(`.l${l}.c${c}`
        )
        v1.classList.remove('X')
        v1.innerHTML = ' '
        v1.classList.remove('O')
        }
    }
    cont = 0
    dialog.close()  
    instru.innerHTML = "O JOGADOR <SPAN>X</SPAN> COMEÇA"
}
    var cont = 0

function CreateSlot(l,c) {
    const slot = document.createElement('div')
    slot.className = 'slot'
    slot.classList.add(`l${l}`)
    slot.classList.add(`c${c}`)
    return slot
}

function loadGame() { 
    for (var l = 1; l < 4; l++) {
        for (var c = 1; c < 4; c++) {
        const slot = CreateSlot(l,c)
        grid.appendChild(slot)
        slot.addEventListener('click', marcador)
        }
    }

    
}

function marcador({target}) {
    
    if ((target.className.includes('X') || target.className.includes('O'))) {
        return
    } else {
        if (cont%2 == 0) {
        target.classList.add('X')
        target.innerHTML = 'X'
        vencedor()
        cont++
        } else {
        target.classList.add('O')
        target.innerHTML = 'O'
        vencedor()
        cont++
        }
    }

     
}

function verificador(event) {
    for (var n = 1; n < 4; n++) {
    var v1 = document.querySelector(`.l${n}.c1`)
    var v2 = document.querySelector(`.l${n}.c2`)
    var v3 = document.querySelector(`.l${n}.c3`)
    if (v1.className.includes('X') && v2.className.includes('X') && v3.className.includes('X')) {
        return true;
    }
}

for (var n = 1; n < 4; n++) {
    var v1 = document.querySelector(`.l${n}.c1`)
    var v2 = document.querySelector(`.l${n}.c2`)
    var v3 = document.querySelector(`.l${n}.c3`)
    if (v1.className.includes('O') && v2.className.includes('O') && v3.className.includes('O')) {
        return true;
    }
}

for (var n = 1; n < 4; n++) {
    var v1 = document.querySelector(`.l1.c${n}`)
    var v2 = document.querySelector(`.l2.c${n}`)
    var v3 = document.querySelector(`.l3.c${n}`)
    if (v1.className.includes('X') && v2.className.includes('X') && v3.className.includes('X')) {
        return true;
    }
}

for (var n = 1; n < 4; n++) {
    var v1 = document.querySelector(`.l1.c${n}`)
    var v2 = document.querySelector(`.l2.c${n}`)
    var v3 = document.querySelector(`.l3.c${n}`)
    if (v1.className.includes('O') && v2.className.includes('O') && v3.className.includes('O')) {
        return true;
    }

    var v1 = document.querySelector(`.l1.c1`)
    var v2 = document.querySelector(`.l2.c2`)
    var v3 = document.querySelector(`.l3.c3`)
    if (v1.className.includes('O') && v2.className.includes('O') && v3.className.includes('O')) {
        return true;
    }

    if (v1.className.includes('X') && v2.className.includes('X') && v3.className.includes('X')) {
        return true;
    }

    var v1 = document.querySelector(`.l3.c1`)
    var v2 = document.querySelector(`.l2.c2`)
    var v3 = document.querySelector(`.l1.c3`)
    if (v1.className.includes('O') && v2.className.includes('O') && v3.className.includes('O')) {
        return true;
    }

    if (v1.className.includes('X') && v2.className.includes('X') && v3.className.includes('X')) {
        return true;
    }

}
}

function vencedor() {
    if (verificador()) {
        if (cont%2 == 0) {
            paragra.innerHTML = `O JOGADOR <span>X</span> GANHOU`
        } else {
            paragra.innerHTML = `O JOGADOR <span>O</span> GANHOU`
        }

        dialog.showModal()

        } else if (cont > 7) {

        paragra.innerHTML = `DEU VELHA`
        dialog.showModal()

        } else if (cont%2 == 1) {
                instru.innerHTML = 'VEZ DO JOGADOR <span>X</span>'
        } else {
                instru.innerHTML = 'VEZ DO JOGADOR <span>O</span>'
        }
    }





loadGame()