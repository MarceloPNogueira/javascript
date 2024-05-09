function calculadora() {
    let conta = Number(document.getElementById('iconta').value);
    let range = Number(document.getElementById('tipRange').value);
    let dividir = Number(document.getElementById('dividirRange').value);

    let valorTip = conta * (range / 100);
    let total = conta + valorTip;
    
    let contaDividida = total / dividir

    
    document.getElementById('tipValor').innerHTML = (String('R$ ')) + valorTip;
    document.getElementById('totalcomTip').innerHTML = (String('R$ ')) + total;
    document.getElementById('tipPorcentagem').innerHTML = range + (String('%'));
    document.getElementById('dividirPessoas').innerHTML = dividir;
    document.getElementById('dividirValor').innerHTML = contaDividida
}