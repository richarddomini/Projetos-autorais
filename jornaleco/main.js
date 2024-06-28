const button_menu = document.querySelector('#button_menu')
const menu = document.querySelector('#menu')

button_menu.addEventListener('click',OpenClose)

function OpenClose() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        button_menu.classList.remove('active')
    } else {
        menu.style.display = 'block'
        button_menu.classList.add('active')
    }
}
