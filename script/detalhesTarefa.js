import { useGet } from "./requisitions.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codTarefa = urlParams.get('codTarefa');

let dataTarefa = await useGet(`/tarefas?codTarefa=${codTarefa}`)

if(dataTarefa){
    let nomTarefa = document.querySelector("#nomTarefa")
    let clientesAlocados = document.querySelector("#clientesAlocados")
    let status = document.querySelector("#statusTarefa")
    let descTarefa = document.querySelector("#descTarefa")

    
    nomTarefa.innerText = dataTarefa[0]?.nomTarefa
    // clientesAlocados.innerText = dataTarefa[0]?.cnpj
    clientesAlocados.innerHTML = "Zezinho"
    status.innerText = dataTarefa[0]?.status
    descTarefa.innerText = dataTarefa[0]?.descTarefa
}