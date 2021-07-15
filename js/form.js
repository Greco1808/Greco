var titulo = document.querySelector(".titulo");
titulo.textContent = "Teta Nutricao"

var adicionaPaciente = document.querySelector("#adicionar-paciente")


adicionaPaciente.addEventListener("click", function(event){

event.preventDefault()

var form = document.querySelector("#form-adiciona")

var paciente = obtemPacienteform(form) 

var pacienteTr = montaTr(paciente)

var erros = validaPaciente(paciente);
console.log(erros)

if (erros.length > 0){
	exibeMensagemErros(erros);
	return;	
	}

adicionaPacientenaTabela (paciente)

form.reset()
var mensagensErro = document.querySelector("#mensagens-erro")
mensagensErro.innerHTML = "";

}
)

function adicionaPacientenaTabela (paciente) {

	var pacienteTr = montaTr(paciente)
	var tabela = document.querySelector("#tabela-pacientes")
	tabela.appendChild(pacienteTr)
	}


function obtemPacienteform(form) {


 var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value) 
    }
    
return paciente

}

function montaTd(dado, classe) {

	var td = document.createElement("td")
	td.textContent = dado
	td.classList.add(classe)

	return montaTd

}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}


function validaPaciente(paciente) {
	var erros = [];

	if(!validaPeso(paciente.peso)) erros.push("peso é inválido"); 
	if(!validaAltura(paciente.altura)) erros.push("altura é inválida");
	if(paciente.nome.length == 0) erros.push("o nome não pode estar em branco");
	if(paciente.gordura.length == 0)erros.push("a gordura não pode estar em branco");
	if(paciente.altura.length == 0)erros.push("a altura não pode estar em branco");
	if(paciente.peso.length == 0)erros.push("o peso não pode estar em branco");		
	
	return erros
		
	}

	function exibeMensagemErros(erros) {

		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML ="";

		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li)
		})
	}

	