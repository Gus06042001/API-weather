//função para buscar o cep
 async function getAddresByCep(){
    const cep = document.querySelector('input#CEP').value
    try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    document.getElementById('rua').innerHTML = `<p>${data.logradouro}</p>`
    document.getElementById('bairro').innerHTML = `<p>${data.bairro}</p>`
    document.getElementById('uf').innerHTML = `<p>${data.localidade}</p>`
    } catch (error) {
        alert(error.message);
    }
    
}

