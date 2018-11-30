//Super Classe
class ContBank{
    constructor(saldo){
        this.saldo = 0;
    }
//Metodos
    deposito(valorDeposito){
        this.saldo = this.saldo + valorDeposito;
    }
    saque(valorSaque){
        this.saldo = this.saldo - valorSaque;
    }
    exibirSaldo(){
        document.write('Saldo Atual:' + this.saldo);
    }

}
//Instanciando 
var newConta = new ContBank();
//Evocando Metodos
newConta.deposito(100);
newConta.saque(50);
newConta.exibirSaldo();

//***********************************EXERCICIO2*****************************************

class Calculadora{

    static somar(num1, num2){
				
        return num1 + num2;
    }
}

var soma = Calculadora.somar(10, 10);
document.write(soma);

//***********************************EXERCICIO3*****************************************

class Funcionario{
    constructor(salarioBase){
        this.salario = salarioBase;
        this.total = 0;
        
    }
    calcularSalario(){
        this.total = this.salario + 100;
    }
    exbirSalario(){
        document.write('Seu salario é: '+ this.total);
    }
}

class Programador extends Funcionario{
    calcularSalario(){
        super.calcularSalario();
        this.total = this.total + 300 - 100;
    }
}

var programador = new Programador(1000);
programador.calcularSalario();
programador.exbirSalario();