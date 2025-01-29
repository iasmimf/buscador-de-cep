function obterCep(){


    let cep = document.getElementById("cep").value ;

    document.getElementById("endereco").innerHTML = cep

//const axios = require('axios');


axios.get('https://viacep.com.br/ws/' + cep + '/json/')
  .then(function (response) {
    // manipula o sucesso da requisição

    document.getElementById("endereco").innerHTML =
     'Endereço: ' + response.data.logradouro +
     '<br> Bairro: ' + response.data.bairro +
     '<br> Cidade: ' + response.data.localidade +
     '<br> Estado: ' + response.data.estado +
     '<br> Região: ' + response.data.regiao +
     '<br>  Ddd: ' + response.data.ddd +
     '<br>  Uf: ' + response.data.uf +
     '<br>  Código ibge: ' + response.data.ibge 
/*
    bairro
    : 
    "Barreirinha"
    cep
    : 
    "82560-100"
    complemento
    : 
    ""
    ddd
    : 
    "41"
    estado
    : 
    "Paraná"
    gia
    : 
    ""
    ibge
    : 
    "4106902"
    localidade
    : 
    "Curitiba"
    logradouro
    : 
    "Rua União da Vitória"
    regiao
    : 
    "Sul"
    siafi
    : 
    "7535"
    uf
    : 
    "PR"

//////*/

    console.log(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });


    //alert(cep);

    
  
}