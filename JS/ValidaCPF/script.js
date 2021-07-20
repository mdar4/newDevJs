function validarCPF() {

    // receber o cpf informado na pag html
    let cpf = String(document.getElementById('cpf').value);

    //armazena a somatória de valores para cáculo dv
    let soma = 0;

    // laço que calcula a soma do primeiro dv
    for(i=0; i<=8; i++){

        soma += cpf[i] * (10-i);
    }

    //calculo do primeiro dv 
    let calcDV1 = 11 - (soma % 11);

    //zerando a soma para iniciar o proximo passo 
    soma = 0

    // laço que calcula a soma do segundo dv
    for(i=0; i <=9; i++) {
        soma += cpf[i] * (11 -i);
    }

    // cálculo do segundo dv
    let calcDV2 = 11 - (soma % 11);

    // verificação se os dv calculados são iguais aos dv digitados
    if(cpf[9] == calcDV1 && cpf[10] == calcDV2) {
        alert('CPF é válido.')
    } else {
        alert('CPF inválido.')
    }
}