const button_menu = document.querySelector('#button_menu')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')

button_menu.addEventListener('click',OpenClose)
body.addEventListener('resize', openMenu)

function OpenClose() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        button_menu.classList.remove('active')
    } else {
        menu.style.display = 'block'
        button_menu.classList.add('active')
    }
}

function openMenu() {
    menu.style.display = 'flex'
}
