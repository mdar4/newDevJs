
let saidaSaldo = document.getElementById("saldo");
let saidaExtrato = document.getElementById("extrato");
let valorHTML = document.getElementById("valor");

let poupanca = {

    saldo : 0,
    movimentacao : [],

    depositar : function() {

        this.saldo += Number(valorHTML.value);
        saidaSaldo.innerHTML = this.saldo;
        this.movimentacao.push("Depósito de " + valorHTML.value);
        valorHTML.value = "";
        
    },
    
    sacar : function() {

        let valor = Number(valorHTML.value);

        if(valor > this.saldo){
            alert('Saldo insuficiente !')
        } else {
            this.saldo -= valor;
            this.movimentacao.push("Saque de " + valor);
        }

        saidaSaldo.innerHTML = this.saldo;
        valorHTML.value = "";
    },

    mostrarExtrato : function() {

        saidaExtrato.innerHTML = "Extrato: <br>";
        
        for( i = 0; i <= this.movimentacao.length-1; i++){
            saidaExtrato.innerHTML += this.movimentacao[i] + "<br>";
        }
    }
}