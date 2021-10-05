var corpo = document.body
var bolo = document.querySelector('img#bolo')

bolo.addEventListener('click',mudar_body)


function mudar_body() {
corpo.innerHTML = "\n <p>oiii</p>"
}