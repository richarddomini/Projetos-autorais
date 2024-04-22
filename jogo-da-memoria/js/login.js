const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')

function validateInput(a) {
    if(a.target.value.length >= 3) {
        button.removeAttribute('disabled')
    }
    
    if(a.target.value.length < 3) {
        button.setAttribute('disabled', '')
    }

}

input.addEventListener('input', validateInput)