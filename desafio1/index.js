
function resultado () {
    let num1 = Number(document.getElementById('inum1').value);
    let num2 = Number(document.getElementById('inum2').value);
    let total = 0;
    
    if (document.getElementById('adicao').checked)
        total = num1 + num2
    else if (document.getElementById('subtracao').checked)
        total = num1 - num2
    else if (document.getElementById('multiplicacao').checked)
        total = num1 * num2
    else if (document.getElementById('divisao').checked)
        total = num1 / num2
        
    document.getElementById('result').innerHTML = 'Resultado: '+ String(total)
};