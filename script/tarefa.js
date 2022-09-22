function detalhesTarefa(codTarefa){
    window.location.href = `detalhesTarefa.html?codTarefa=${codTarefa}`
}

function editarTarefa(codTarefa, nomTarefa, status, descTarefa){
    window.location.href = `editarTarefa.html?codTarefa=${codTarefa}&nomTarefa=${nomTarefa}&status=${status}&descTarefa=${descTarefa}`
}

document.querySelector("#editTarefa")?.addEventListener('click', (event) => {
    event.preventDefault();

    let stringCodCliente = ""
    let clientesAlocados = document.querySelectorAll(".getCodCliente");
    clientesAlocados.forEach((cliente, index) => {
        let clienteAttribute = cliente.getAttribute('dataKey')
        if(index >= 1){
            stringCodCliente = stringCodCliente + `,${clienteAttribute}`
        } 
        // else if (index === clientesAlocados.length - 1)
        //     stringCodCliente = stringCodCliente + `,${clienteAttribute})`
        else
            stringCodCliente = stringCodCliente + `${clienteAttribute}`
    })
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let codTarefa = urlParams.get('codTarefa');
    let nomTarefa = document.querySelector("#nomTarefa").innerText;
    let status = document.querySelector("#statusTarefa").innerText;
    let descTarefa = document.querySelector("#descTarefa").innerText;

    window.location.href = `editarTarefa.html?codTarefa=${codTarefa}&nomTarefa=${nomTarefa}&clientesAlocados=${stringCodCliente}&statusTarefa=${status}&descTarefa=${descTarefa}`
})

