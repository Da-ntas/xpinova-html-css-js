import { dataTributacao } from "../data/data.js"
import { buildInfos, mountSelect } from "./buildTable.mjs"
import { useGet, usePost, usePut, useDelete } from "./requisitions.js";

const dataTarefa = await useGet("/tarefas")

window.addEventListener('load', dataTarefa && buildInfos(dataTarefa, "tarefa"), dataTarefa && mountSelect(dataTarefa, "tarefa"))

// let listTarefa = document.querySelector("#dropdownTarefas")
let listStatus = document.querySelector("#dropdownStatus")

// listTarefa.addEventListener('change', (event) => {event.preventDefault();
//     let value = event.target.value
//     let valueStatus = listStatus.value

//     let dataFiltered = dataTarefa.filter((i) => i.codTarefa == value)
//     if(valueStatus){
//         dataFiltered = dataTarefa.filter((i) => i.codTarefa == value && i.status == valueStatus);
//     }

//     value ? buildInfos(dataFiltered, "tarefa") : buildInfos(dataTarefa, "tarefa")
// })

listStatus.addEventListener('change', (event) => {event.preventDefault();
    let value = event.target.value
    // let valueTarefa = listTarefa.value

    let dataFiltered = dataTarefa.filter((i) => i.status == value)
    // if(valueTarefa){
    //     dataFiltered = dataTarefa.filter((i) => i.status == value && i.codTarefa == valueTarefa);
    // }
    value ? buildInfos(dataFiltered, "tarefa") : buildInfos(dataTarefa, "tarefa")
})