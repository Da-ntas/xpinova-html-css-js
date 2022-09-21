import { useGet } from "./requisitions.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codTarefa = urlParams.get('codTarefa');

let dataTarefa = await useGet(`/tarefas?codTarefa=${codTarefa}`);

if(dataTarefa){
    let nomTarefa = document.querySelector("#nomTarefa");
    let clientesAlocados = document.querySelector("#clientesAlocados");
    let status = document.querySelector("#statusTarefa");
    let descTarefa = document.querySelector("#descTarefa");

    
    let dataCliente = dataTarefa[0]?.clientes;
    let nomes = [];
    dataCliente?.map((nC) => nomes.push(`${nC.clientes.nomCliente}`));

    nomTarefa.innerText = dataTarefa[0]?.nomTarefa;
    clientesAlocados.innerText = nomes.toString();
    status.innerText = dataTarefa[0]?.status;
    descTarefa.innerText = dataTarefa[0]?.descTarefa;

     
    // dataCliente?.map((nC) => {
    //     return `<li key=${nC.clientes.codCliente}>${nC.clientes.nomCliente}</li>`
    // });
}