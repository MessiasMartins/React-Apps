// E (&&) - Verdadeiro se todas as expressões forem verdadeiras
// OU - AND (||) - Verdadeiro se pelo menos uma das expressões forem verdadeiras
// Negação - NOT (!) - Inverte o resultado da expressão de comparação


// EXEMPLO 1 UTILIZANDO O OPERADOR &&

if(2 == 2 && 3 > 2 && a == b){
    document.write('Verdadeiro');
}else{
    document.write('Falso');
}

// EXEMPLO 2

var notas = prompt('Digite a nota do Aluno')
var faltas = prompt('Digite a quantidade de faltas')

var media = 7;
var faltas_maximas = 15;

if (nota >= media && faltas <= faltas_maximas){
    document.write('Aluno Aprovado');
}else{
    document.write('Aluno Reprovado');
}