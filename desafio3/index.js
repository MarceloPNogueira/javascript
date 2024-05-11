const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
// const cores = document.querySelector('.color')

// no click, faça
btn.addEventListener('click', function() {
    const corRandom = randomNumero ()
    document.body.style.background = cores[corRandom]
    document.getElementById('cor').innerHTML = cores[corRandom]
    //cores.textContent = cores[corRandom]
})

//gerar numeros randomicos
function randomNumero () {
    return Math.floor(Math.random() * cores.length)
}