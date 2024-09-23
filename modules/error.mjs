const text_error = document.createElement('p')

export function error(div) {
    text_error.id = 'text_error'
    text_error.textContent = 'Lo sentimos pero no se logro conectar con la API'
    div.appendChild(text_error)   
}