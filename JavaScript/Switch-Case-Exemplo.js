// OBS: Também pode ser utilizada a função parseInt, para converter String em Inteiro

var option = prompt('Digite uma Opção');

switch(option){

    case '1':  //caso o número inserido seja 1
        document.write('Option 1');
        break;
    
    case '2':  //caso o número inserido seja 2
        document.write('Option 2');
        break;

    default: //caso o valor inserido não corresponda a nenhuma opção
        document.write('Opção Invalida');
}