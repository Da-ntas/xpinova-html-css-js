// import {dataCliente} from "../data/data.js"
import {dataTributacao, dataTarefas} from "../data/data.js"
import { buildInfos, mountSelect } from "./buildTable.mjs"
import { useGet, usePost, usePut, useDelete } from "./requisitions.js";

const dataCliente = await useGet("/clientes")

window.addEventListener('load', dataCliente && buildInfos(dataCliente, "cliente"), dataCliente && mountSelect(dataCliente, "cliente"))


async function deleteC(codCliente){
    let response = await useDelete('/clientes', { codCliente: codCliente})
    
    if(response)
        buildInfos(response)
}

window.deleteCliente = deleteC

let list = document.querySelector("#dropdownCliente")

list.addEventListener('change', (event) => {event.preventDefault();
    let value = event.target.value
    let dataFiltered = dataCliente.filter((i) => i.codCliente == value)

    value ? buildInfos(dataFiltered, "cliente") : buildInfos(dataCliente, "cliente")
})


let relTarefa = document.querySelector("#relacionarTarefa")

relTarefa.addEventListener('click', () => {
    let listTarefa = document.querySelector("#selectTarefaRelacionar")
    let listCliente = document.querySelector("#selectClienteRelacionar")

    dataCliente.map((i) => {
        let opt = document.createElement('option');
        opt.value = i.codCliente;
        opt.innerHTML = i.nomCliente;
        listCliente.appendChild(opt)
    })

    dataTarefas.map((i) => {
        let opt = document.createElement('option');
        opt.value = i.codTarefa;
        opt.innerHTML = i.nomTarefa;
        listTarefa.appendChild(opt)
    })
})

let criarCliente = document.querySelector("#criarCliente")

criarCliente.addEventListener('click', () => {
    let tributacaoCliente = document.querySelector("#tributacaoCliente")
    dataTributacao.map((i) => {
        let opt = document.createElement('option');
        opt.value = i.codTributacao;
        opt.innerHTML = i.nomTributacao;
        tributacaoCliente.appendChild(opt)
    })
})

let formCriarCliente = document.querySelector("#formCriarCliente")

formCriarCliente.addEventListener('submit', async (event)=> {
    event.preventDefault()

    let nomCliente = document.querySelector("#nomCliente").value
    let cnpjCliente = document.querySelector("#cnpjCliente").value
    let cpfCliente = document.querySelector("#cpfCliente").value
    let tributacaoCliente = document.querySelector("#tributacaoCliente").value
    let codAcessoCliente = document.querySelector("#codAcessoCliente").value
    
    let bodyClient = {
        nomCliente: nomCliente,
        cnpj: cnpjCliente,
        cpf: cpfCliente,
        codTributacao: tributacaoCliente,
        codAcessos: codAcessoCliente
    }
    
    let response = await usePost('/clientes', bodyClient)

    if(response)
        location.reload()
})

