const openMenu = document.querySelector('#openMenu')
const shutMenu = document.querySelector('#shutMenu')
const menu = document.querySelector('#menu')

openMenu.addEventListener('click', onlyOpen)
shutMenu.addEventListener('click', onlyShut)

function onlyOpen() {
    menu.style.display = 'block'
 }

 function onlyShut() {
    menu.style.display = 'none'
 }

