var num1 = prompt('Digite um número');
var operacao = prompt('Soma ou Subtração?');
var num2 = prompt('Digite um segundo número');

function executar(num1, num2, operacao){

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = 0;

    if (operacao == 'Soma'){
       resultado = num1 + num2;
       
    }

    if (operacao == 'Subtração'){
        resultado = num1 - num2;
    }
    return resultado;
}

document.write('O resultado é:' + executar(num1,num2,operacao));