function shownumbers(x) {
    var visualizador = document.getElementById('visualizador')
    var tela = document.getElementById('tela')

    tela.innerHTML += `${x}`
}

function reset() {
    var visualizador = document.getElementById('visualizador')
    var tela = document.getElementById('tela')

    tela.innerHTML = ""
}