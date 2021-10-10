function pesquisar(){
    let ce = document.getElementById('cep')
    let cep = ce.value


    var xhr = new XMLHttpRequest();

    xhr.open('GET', `http://viacep.com.br/ws/${cep}/json/`)

    xhr.responseType = "json";

    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var resposta = xhr.response;

            document.getElementById('logradouro').value = resposta.logradouro
            document.getElementById('complemento').value = resposta.complemento    
            document.getElementById('bairro').value = resposta.bairro
            document.getElementById('localidade').value =  resposta.localidade
            document.getElementById('uf').value = resposta.uf

            console.log(xhr)
            console.log(resposta)
        }

    }
    
};
