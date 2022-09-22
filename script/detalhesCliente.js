import {dataTributacao} from '../data/data.js'
import { useGet } from "./requisitions.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codCliente = urlParams.get('codCliente');

let dataCliente = await useGet(`/clientes?codCliente=${codCliente}`)

function createList(data){
    let string = ""
    data.forEach(cliente => {
        string = string + `<li class="getCodTarefa" dataKey=${cliente.codTarefa}>${cliente.tarefas.nomTarefa}</li>`
    });

    return string
}

if(dataCliente){
    let nome = document.querySelector("#nomCliente")
    let cnpj = document.querySelector("#cnpjCliente")
    let cpf = document.querySelector("#cpfCliente")
    let tributacao = document.querySelector("#tributacaoCliente")
    let codAcesso =document.querySelector("#codAcessoCliente")
    let tarefas =document.querySelector("#tarefasLinkadas")
    let tributacaoData = dataTributacao.filter((i) => i.codTributacao == dataCliente[0]?.codTributacao)

    let dataTarefa = dataCliente[0]?.tarefas;
    // let listTarefa = []
    // dataTarefa?.map((nC) => listTarefa.push(`${nC.tarefas.nomTarefa}`))

    nome.innerText = dataCliente[0]?.nomCliente || ""
    cnpj.innerText = dataCliente[0]?.cnpj || ""
    cpf.innerText = dataCliente[0]?.cpf || ""
    tributacao.innerText = tributacaoData[0]?.nomTributacao || ""
    codAcesso.innerText = dataCliente[0]?.codAcessos || ""
    // tarefas.innerText = listTarefa.toString() || "";
    tarefas.innerHTML = createList(dataTarefa)
} 