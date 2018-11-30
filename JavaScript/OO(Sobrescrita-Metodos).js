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
    //Criando um Novo Construtor para adicionar o atributo raça
   constructor(cor, peso, raca){
       //***********SUPER faz o acesso a Super Classe e seus atributos
       super(cor, peso);
       this.raca = raca;
   }

   getInformacoes(){
       document.write('-cor:'+ this.cor + '-peso:' + this.peso + '-raca:' + this.raca);
   }

   //Criando Metodo, Invocando e Concatenando a Super Classe
   dormir(){
        super.dormir();
        document.write(' Como um Cão ');
   }
    }

//Criando uma SUB CLASSE, Ela ESTENDE os Metodos e Atributos da Super Classe
class Passaro extends Animal{
    //Criando um Metodo Expecifico da Classe
    voar(){
        document.write('+Voar');
    }
}

//Instanciando Sub Classe Cao e passando seus Atributos
var cao = new Cao('Morrom', 30, 'Labrador');
//Invocando Metodos
cao.dormir();
cao.getInformacoes();

