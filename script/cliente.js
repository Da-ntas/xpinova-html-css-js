function detalhesCliente(codCliente){
    location.href = `detalhesCliente.html?codCliente=${codCliente}`
}

function editarCliente(codCliente, nomCliente, cnpj, cpf, nomTributacao, codAcesso, codRelacionamento){
    location.href = `editarCliente.html?codCliente=${codCliente}&nomCliente=${nomCliente}&cnpj=${cnpj}&cpf=${cpf}&nomTributacao=${nomTributacao}&codAcesso=${codAcesso}&codRelacionamentos=${codRelacionamentos}`
}


document.querySelector("#editCliente")?.addEventListener('click', (event) => {
    event.preventDefault();
    let stringCodTarefa = ""
    let tarefasAlocadas = document.querySelectorAll(".getCodTarefa");
    tarefasAlocadas.forEach((cliente, index) => {
        let tarefaAttribute = cliente.getAttribute('dataKey')
        if(index >= 1){
            stringCodTarefa = stringCodTarefa + `,${tarefaAttribute}`
        } 
        else
            stringCodTarefa = stringCodTarefa + `${tarefaAttribute}`
    })
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let codCliente = urlParams.get('codCliente');
    let codRelacionamentos = urlParams.get('codRelacionamentos');
    let nomCliente = document.querySelector("#nomCliente").innerText
    let cnpjCliente = document.querySelector("#cnpjCliente").innerText
    let cpfCliente = document.querySelector("#cpfCliente").innerText
    let nomTributacao = document.querySelector("#tributacaoCliente").innerText
    let codAcessoCliente =document.querySelector("#codAcessoCliente").innerText

    window.location.href = `editarCliente.html?codCliente=${codCliente}&nomCliente=${nomCliente}&cnpj=${cnpjCliente}&cpf=${cpfCliente}&nomTributacao=${nomTributacao}&codAcesso=${codAcessoCliente}&tarefasAlocadas=${stringCodTarefa}&codRelacionamentos=${codRelacionamentos}`
})

