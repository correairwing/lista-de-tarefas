const form = document.getElementById('listaAtividades')
const nomeAtividades = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeAtividades = document.getElementById('nomeAtividades')

    if(nomeAtividades.includes(inputNomeAtividades.value)) {
        alert(`O contato já foi inserido`)
    } else {
        nomeAtividades.push(inputNomeAtividades.value);
    
        let linha = '<ul>';
        linha += `<li>${inputNomeAtividades.value}</li>`;
        linha += `</ul>`;
    
        linhas += linha
    }


    inputNomeAtividades.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('ul')
    corpoTabela.innerHTML = linhas;
}
