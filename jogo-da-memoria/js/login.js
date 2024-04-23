const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')

function validateInput(a) {
    if(a.target.value.length >= 3) {
        button.removeAttribute('disabled')
    }
    
    if(a.target.value.length < 3) {
        button.setAttribute('disabled', '')
    }

}

function submitButton(event) {
    event.preventDefault()
    localStorage.setItem('UserName', input.value)
    window.location = './jogoMemoria.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', submitButton)