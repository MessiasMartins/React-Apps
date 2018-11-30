var age = prompt('Digite sua Idade');

if(age >= 0 && age < 15){
	alert('Criança');
}else if(age >= 15 && age < 30){
	alert('Jovem');
}else if(age >= 30 && age < 60){
	alert('Adulto');
}else{
	alert('Idoso');
}