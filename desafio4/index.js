let computadorNumero
let usuarioNumeros = []
let tentativas = 0
let maxTentativas = 3
let numeroMin = 1
let numeroMax = 100

function novoJogo() {
    window.location.reload()
}

function inicial() {
    computadorNumero = Math.floor(Math.random() * 100 + 1)
}

function compararNumeros() {
    const usuarioNumero = Number(document.getElementById('ipalpite').value)
    usuarioNumeros.push(' ' + usuarioNumero)
    document.getElementById('palpites').innerHTML = usuarioNumeros
    if (usuarioNumero <= numeroMax) {
        if (tentativas < maxTentativas) {
            if (usuarioNumero > computadorNumero) {
                document.getElementById('dica').innerHTML = 'Seu numero é muito alto'
                document.getElementById('ipalpite').value = ''
                tentativas++
                document.getElementById('tentativas').innerHTML = tentativas
            }
            else if (usuarioNumero < computadorNumero) {
                document.getElementById('dica').innerHTML = 'Seu numero é muito baixo'
                document.getElementById('ipalpite').value = ''
                tentativas++
                document.getElementById('tentativas').innerHTML = tentativas
            }
            else {
                document.getElementById('dica').innerHTML = 'Parabéns, você acertou o numero!!'
                tentativas++
                document.getElementById('tentativas').innerHTML = tentativas
                document.getElementById('ipalpite').setAttribute('Readonly', 'Readonly')
            }
        }
        else {
            document.getElementById('dica').innerHTML = 'Você perdeu, o computador escolheu: ' + computadorNumero
            document.getElementById('ipalpite').setAttribute('Readonly', 'Readonly')
        }
    
    }
    else {
        document.getElementById('dica').innerHTML = 'O numero que você inseriu não é válido, tente outro numero.'
    }

}


