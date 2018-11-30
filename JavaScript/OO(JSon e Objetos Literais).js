// Herança Objetos Literais e Json

//Criando Super Classe
class Animal{
    
    //Criando construtor para a Super Classe
    constructor(cor, peso){
        this.cor = cor;
        this.peso = peso;
    }

    //Criando um Metodo dentro da Super Classe
    dormir(){
        document.write('+Dormir');
    }
}

//Criando uma SUB CLASSE, Ela ESTENDE os Metodos e Atributos da Super Classe
class Cao extends Animal{
    //Criando um Metodo Expecifico da Classe
    latir(){
        document.write('+Latir');
    }
}

//Instanciando Sub Classe Cao
var cao = new Cao('Marrom', 30, 'Labrador');

//Criando Objeto Literal ******Objetos Literais já tem os atributos pré-defnidos********
var objetoLiteral = {
    cor: 'Marrom',
    peso: 30,
    raca: 'Labrador',
    filhotes:{filhote1: 'Rex', filhote2: 'Doug'}
}

//Instanciando Objeto Literal
//*********Atenção na Sintaxe, "" e '' são diferentes************
var objetoJson = '{"cor": "Marrom", "peso":30, "raca": "Labrador"}';

//Convertendo texto Json para Objeto
var objeto = JSON.parse(objetoJson);

document.write(objeto.raca);