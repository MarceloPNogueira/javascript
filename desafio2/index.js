function format (valor) {
    valor = Math.ceil(valor * 100) / 100;
    valor = valor.toFixed(2);
    return 'R$ ' + valor;
};

function formatPessoas (valor) {
    if (valor == 1) return valor + ' pessoa'
    return valor + ' pessoas' 
}
    
function calculadora() {
    let conta = Number(document.getElementById('iconta').value);
    let range = Number(document.getElementById('tipRange').value);
    let dividir = Number(document.getElementById('dividirRange').value);

    let valorTip = conta * (range / 100);
    let total = conta + valorTip;
    
    let contaDividida = total / dividir

    
    document.getElementById('tipValor').innerHTML = format(valorTip);
    document.getElementById('totalTip').innerHTML =  format(total);
    document.getElementById('tipPorcentagem').innerHTML = range + (String('%'));
    document.getElementById('dividirPessoas').innerHTML = formatPessoas(dividir);
    document.getElementById('dividirValor').innerHTML = format(contaDividida);
}