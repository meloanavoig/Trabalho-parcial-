var form = document.querySelector('form');
var resultadoCNPJ = document.querySelector ('#resultadoCNPJ');
var dados;

document.querySelector("#resultadoCNPJ").addEventListener
function buscarCNPJ(CNPJ) {
fetch(`https://api.cnpja.com.br/companies/${CNPJ}`, {
  "method": "GET",
  "headers": {
    "authorization": "8dc0c941-11b9-442f-a9ca-511f4e65a0c9-d6366f66-b92f-4705-8756-d543a312eca9"
  }
})
.then(function(response){
    return response.json();
})

.then(function(dados){
    console.log(dados);

    localStorage.setItem('dadosCNPJ', JSON.stringify([dados.name, "Fundação: " + dados.founded, 
     "Telefone: " + dados.phone, "Email: " + dados.email ]))
    
    Dados = JSON.parse(localStorage.getItem('dadosCNPJ'))

    document.querySelector("#name").innerHTML = Dados[0]
    document.querySelector("#found").innerHTML = Dados[1]
    document.querySelector("#tel").innerHTML = Dados[2]
    document.querySelector("#email").innerHTML = Dados[3]

    });
}

form.addEventListener('submit', function(evento) {
evento.preventDefault();
buscarCNPJ(resultadoCNPJ.value);
});