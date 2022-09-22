import { useGet } from "./requisitions.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codTarefa = urlParams.get('codTarefa');

let dataTarefa = await useGet(`/tarefas?codTarefa=${codTarefa}`);

function createList(data){
    let string = ""
    data.forEach(cliente => {
        string = string + `<li key=${cliente.codCliente}>${cliente.clientes.nomCliente }</li>`
    });
    return string
}

if(dataTarefa){
    let nomTarefa = document.querySelector("#nomTarefa");
    let clientesAlocados = document.querySelector("#clientesAlocados");
    let status = document.querySelector("#statusTarefa");
    let descTarefa = document.querySelector("#descTarefa");

    
    let dataCliente = dataTarefa[0]?.clientes;

    nomTarefa.innerText = dataTarefa[0]?.nomTarefa;
    status.innerText = dataTarefa[0]?.status;
    descTarefa.innerText = dataTarefa[0]?.descTarefa;
    clientesAlocados.innerHTML = createList(dataCliente);
}