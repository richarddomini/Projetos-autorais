const body = document.querySelector('body')
const menu = document.querySelector('#menu')


const button_menu = document.querySelector('#button_menu')
const button_search = document.querySelector('#button_search')
    const txt_search = document.querySelector('#txt_search')
    const box_search = document.querySelector('.box_search')
    const button_back = document.querySelector('#button_back')

button_search.addEventListener('click', searchBar)
button_back.addEventListener('click', closeSearchBar)

function searchBar() {
    txt_search.classList.add('active')
    box_search.classList.add('active')
    button_search.classList.add('active')
    button_back.classList.add('active')

    document.querySelector('header h2').style.display = 'none'
    document.querySelector('#jornal_icon').style.display = 'none'
    button_menu.style.display = 'none'
}

function closeSearchBar() {
    txt_search.classList.remove('active')
    box_search.classList.remove('active')
    button_search.classList.remove('active')
    button_back.classList.remove('active')
    button_menu.style.display = 'flex'

    
document.querySelector('header h2').style.display = 'flex'
document.querySelector('#jornal_icon').style.display = 'flex'
}

button_menu.addEventListener('click',OpenClose)
body.addEventListener('resize', openMenu)

function OpenClose() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
        button_menu.classList.remove('active')
    } else {
        menu.style.display = 'block'
        button_menu.classList.add('active')
        button_menu.style.backgroundcolor = 'white'
    }
}

function openMenu() {
    if (body.clientWidth > 760) {
    menu.style.display = 'flex'
    } 
}
