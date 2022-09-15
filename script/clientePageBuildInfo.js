import {dataCliente} from "../data/data.js"
import {dataTributacao} from "../data/data.js"
import {dataTarefas}   from "../data/data.js"
import { useGet } from "./requisitions.js";
import { usePost } from "./requisitions.js";
import { usePut } from "./requisitions.js";
import { useDelete } from "./requisitions.js";

window.addEventListener('load', buildInfos(dataCliente))

window.addEventListener('load', () => {
    let list = document.querySelector("#dropdownCliente")
    dataCliente.map((i) => {
        let opt = document.createElement('option');
        opt.value = i.codCliente;
        opt.innerHTML = i.nomCliente;
        list.appendChild(opt)
    })
})

function buildInfos(data){ 
    let table = document.querySelector("#tableBody")
    table.innerHTML = ""

    data.map((i) => {

        let tributacao = dataTributacao.filter((t) => t.codTributacao == i.codTributacao)
        table.insertAdjacentHTML('beforeend',`
        <tr>
            <td scope="row">
                <button class="action_button" onclick="detalhesCliente(${i.codCliente})">
                    <span class="iconify" data-icon="akar-icons:eye" data-width="16"></span>
                </button class="action_button">
                <button class="action_button" onclick="deleteCliente(1010)">
                    <span class="iconify" data-icon="bi:x-lg" data-width="16"></span>
                </button>
            </td>
            <td scope="row">${i.nomCliente}</td>
            <td>${i.cnpj}</td>
            <td>${i.cpf}</td>
            <td>${tributacao[0].nomTributacao}</td>
            <td>${i.codAcessos}</td>
        </tr>
    `)
    })
}

let list = document.querySelector("#dropdownCliente")

list.addEventListener('change', (event) => {event.preventDefault();
    let value = event.target.value
    let dataFiltered = dataCliente.filter((i) => i.codCliente == value)

    value ? buildInfos(dataFiltered) : buildInfos(dataCliente)
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

formCriarCliente.addEventListener('submit', (event) => {
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
        codAcessos: codAcessoCliente,
        codCliente: getCodCliente()
    }

    dataCliente.push(bodyClient)
    setCodCliente();
    buildInfos(dataCliente)
})


console.log(await useGet("v1/teste"))