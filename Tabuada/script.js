/*prompt serve para solicitar que o usuário digite algo*/
var n = prompt('Digite um número: ') /*5*/;
var i;

for (i = 1; i <= 10; i++) {

    document.getElementById('tabuada').innerHTML += n + 'x' + '=' + (n * i) +'<br>';
}