// Herança

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

//Criando uma SUB CLASSE, Ela ESTENDE os Metodos e Atributos da Super Classe
class Passaro extends Animal{
    //Criando um Metodo Expecifico da Classe
    voar(){
        document.write('+Voar');
    }
}

//Criando uma SUB CLASSE, Ela ESTENDE os Metodos e Atributos da Super Classe ******ATENÇÂO AQUI EXTENDS PASSARO*******
class Papagaio extends Passaro{
    //Criando um Metodo Expecifico da Classe
    repetir(){
        document.write('+Repetir');
    }
    
}

//Instanciando Sub Classe Papagaio 
var papagaio = new Papagaio();

//Invocando Metodos da Super Classe e das Sub Classes atraves de Sobrecarga
papagaio.dormir();
papagaio.voar();
papagaio.repetir();