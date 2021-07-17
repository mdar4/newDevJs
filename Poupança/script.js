
let saidaSaldo = document.getElementById("saldo");
let saidaExtrato = document.getElementById("extrato");
let valorHTML = document.getElementById("valor");

function dataCurta() {

    let data = new Date();
    let d = data.getDate();
    let m = data.getMonth()+1;
    let a = data.getFullYear();

    let h = data.getHours();
    let min = data.getMinutes();

    if(d.toString.length == 1) {
        d = '0' + d;
    }

    if(m.toString.length == 1) {
        m = '0' + m;
    }

    if(h.toString.length == 1){
        h = '0' + h;
    }

    if(min.toString.length == 1){
        min = '0' + min;
    }

    return d + '/' + m + '/' + a + '-' + h +':' + min;

}

let poupanca = {

    saldo : 0,
    movimentacao : [],

    depositar : function() {

        let valor =  Number(valorHTML.value);

        this.saldo += valor;
        saidaSaldo.innerHTML = "R$" + this.saldo.toFixed(2);
        this.movimentacao.push(dataCurta() + "- DEP - R$" + valor.toFixed(2));
        valorHTML.value = "";
        
    },
    
    sacar : function() {

        let valor = Number(valorHTML.value);

        if(valor > this.saldo){
            alert('Saldo insuficiente !')
        } else {
            this.saldo -= valor;
            this.movimentacao.push(dataCurta() + "-SAQ - R$" + valor.toFixed(2));
        }

        saidaSaldo.innerHTML = "R$" + this.saldo.toFixed(2);
        valorHTML.value = "";
    },

    mostrarExtrato : function() {

        saidaExtrato.innerHTML = "Extrato: <br>";
        
        for( i = 0; i <= this.movimentacao.length-1; i++){
            saidaExtrato.innerHTML += this.movimentacao[i] + "<br>";

        }
    }
}