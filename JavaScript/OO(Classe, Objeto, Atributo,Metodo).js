//Clase planta de uma casa
//Objeto casa no mundo real
//Atributos define como é (cor, tamanho)
//Metodos ações que o objeto realiza

//Criando classe
class Casa{

    //O construtor automatiza a criação de elementos quando a classe é instanciada
constructor(corAtributo, quantidadeQuartosAtributo){
    this.cor = corAtributo;
    this.quantidadeQuartos = quantidadeQuartosAtributo;
}
    //Metodo
    getInformacoes(){
        document.write('cor' + this.cor + '+ qtdQuartos:' + this.quantidadeQuartos);
    }

    //Metodo
    abrirPortao(){
        document.write('Abrir portão');
    }
}

//Instanciando classe
var casa = new Casa('Vermelha', 5);
//casa.abrirPortao('Frente');
casa.getInformacoes();