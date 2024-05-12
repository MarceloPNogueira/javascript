const operacaoAnteriorText = document.querySelector('#operacao-anterior')
const operacaoAtualText = document.querySelector('#operacao-atual')
const botoes = document.querySelectorAll('#botoes-container button')

class Calculadora {
    constructor(operacaoAnteriorText, operacaoAtualText) {
        this.operacaoAnteriorText = operacaoAnteriorText;
        this.operacaoAtualText = operacaoAtualText;
        this.operacaoAtual = '';
    };
    
    addDigito(digito) {

        if (digito === '.' && this.operacaoAtualText.innerText.includes('.')) {
            return;
        }

        this.operacaoAtual = digito
        this.atualizarTela()
    };

    processoOperacao(operacao) {

        if (this.operacaoAtualText.innerText === "" && operacao !== "C") {
            if(this.operacaoAnteriorText.innerText !== "") {
                this.trocaOperacao(operacao);
            }
            return
        }

        let valorOperacao
        const anterior = +this.operacaoAnteriorText.innerText.split(" ")[0];
        const atual = +this.operacaoAtualText.innerText;

        switch(operacao) {
            case '+':
                valorOperacao = anterior + atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
            break
            case '/':
                valorOperacao = anterior / atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
            break
            case '-':
                valorOperacao = anterior - atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
            break
            case '*':
                valorOperacao = anterior * atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
            break
            case 'CE':
                this.deletarOperacaoAtual();
            break
            case 'C':
                this.deletarTudo();
            break
            case 'DEL':
                this.deletarOperacao();
            break
            case '=':
                this.igualOperacao();
            break
                default:
                return;
        }
    };
    
    atualizarTela(valorOperacao = null, operacao = null, atual = null, anterior = null) {
        
        if(valorOperacao === null) {
            this.operacaoAtualText.innerText += this.operacaoAtual;
        } else {
            if(anterior === 0) {
                valorOperacao = atual
            }

            this.operacaoAnteriorText.innerText = `${valorOperacao} ${operacao}`
            this.operacaoAtualText.innerText = ""
        }
    };

    trocaOperacao(operacao) {

        const mathOperacoes = ['+', '-', '*', '/']

        if(!mathOperacoes.includes(operacao)) {
            return
        }

        this.operacaoAnteriorText.innerText = this.operacaoAnteriorText.innerText.slice(0, -1) + operacao

    }

    deletarTudo() {
        this.operacaoAtualText.innerText = '';
        this.operacaoAnteriorText.innerText = '';
    }

    deletarOperacaoAtual() {
        this.operacaoAtualText.innerText = "";

    }

    deletarOperacao() {
       this.operacaoAtualText.innerText = this.operacaoAtualText.innerText.slice(0, -1)
    }

    igualOperacao() {
        const operacao = operacaoAnteriorText.innerHTML.split(" ") [1]
        this.processoOperacao(operacao)
    }
};

const calc = new Calculadora(operacaoAnteriorText, operacaoAtualText); 

botoes.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const valor = e.target.innerText;

        if (+valor >= 0 || valor === '.') {
         calc.addDigito(valor)   
        }else {
         calc.processoOperacao(valor)
        }
    });
});