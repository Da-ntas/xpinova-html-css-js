function detalhesTarefa(codTarefa){
    window.location.href = `detalhesTarefa.html?codTarefa=${codTarefa}`
}

function editarTarefa(codTarefa, nomTarefa, status, descTarefa){
    window.location.href = `editarTarefa.html?codTarefa=${codTarefa}&nomTarefa=${nomTarefa}&status=${status}&descTarefa=${descTarefa}`
}

document.querySelector("#editTarefa")?.addEventListener('click', (event) => {
    event.preventDefault();
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let codTarefa = urlParams.get('codTarefa');
    let nomTarefa = document.querySelector("#nomTarefa").innerText;
    let clientesAlocados = document.querySelector("#clientesAlocados").innerText;
    let status = document.querySelector("#statusTarefa").innerText;
    let descTarefa = document.querySelector("#descTarefa").innerText;

    window.location.href = `editarTarefa.html?codTarefa=${codTarefa}&nomTarefa=${nomTarefa}&clientesAlocados=${clientesAlocados}&statusTarefa=${status}&descTarefa=${descTarefa}`
})

