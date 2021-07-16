function conjugarVerbo(){
    var verb = document.getElementById("verb").value;

    var radical = verb.substr(0,verb.length-2);
    var people = ['Eu','Tu','Ele','Nós','Vós','Eles'];
    var conjugacao = verb.substr(verb.length-2,2);
    var linha = '';

    switch(conjugacao) {

        case 'ar':
            var terminacao = ['o','as','a','amos','ais','am'];
            break;
        case 'er':
            var terminacao = ['o','es','e','emos','eis','em'];
            break;
        case 'ir':
            var terminacao = ['o','es','e','imos','is','em'];
            break;
        default:
            conjugacao = 0;

    }
    if(conjugacao != 0){
        
        for (i = 0; i <=5; i++){
            linha += people[i] + ' '+ radical + terminacao[i] + '<br>';
        }
    }else{
        linha = 'Verbo não é válido.'
    }
    document.getElementById('paper').innerHTML = linha
}