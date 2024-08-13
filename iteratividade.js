function envio(){
    let elementName = document.getElementById("Name").value;
    let elementIdade = document.getElementById("Age").value;
    let elementCPF = document.getElementById("Cpf").value;
    console.log(elementName);
    console.log(elementIdade);
    console.log(CpfValidator(elementCPF));
}

function CpfValidator(CPF){
    if (CPF == ""){
        alert("Cpf vazio");
        return false;
    }
    else{
        return true
    }
}

let botSub = document.getElementById("botao-submit")
console.log(botSub);

//botSub.addEventListener("click", submit)