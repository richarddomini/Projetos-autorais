function shownumbers(x) {
    var visualizador = document.getElementById('visualizador')
    var tela = document.getElementById('tela')
    var telaLength = document.getElementById('tela').innerHTML

    if(x >= 0 || telaLength.length > 0) {
    tela.innerHTML += `${x}`
    } 
}

function reset() {
    var visualizador = document.getElementById('visualizador')
    var tela = document.getElementById('tela')

    tela.innerHTML = ""
}

function backspace() {
    var tela = document.getElementById('tela').innerHTML

    document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1)
}

function result() {
    tela = document.getElementById('tela').innerHTML
    var telaLength = document.getElementById('tela').innerHTML
    
    document.getElementById('tela').innerHTML = eval(tela)
}