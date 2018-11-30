// Podem ser utilizadas as funções Break ou continue, Break força a parada, Continue ignora o restante da interação atual.


//WHILE
var x = 1; 

document.write('Inicio do Loop <br>');

while (x <= 10){
    document.write(x + '<br>');

/*    if( x == 3){
        break; //continue;
    }
*/
    x++;
}

document.write('Fim do Loop');

//DO WHILE
var x = 1;

do{
    document.write(x + '<br>');

    x = x + 2;
    //break
    //continue
}while (x <= 10);

/*FOR 
for(variavel; condicao; incremento){
    ações
}
*/

for( x = 1; x <= 10; x++){
    document.write( x + '<br>')
}
