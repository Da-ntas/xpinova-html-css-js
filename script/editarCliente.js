import {dataTributacao} from '../data/data.js'
import { usePut } from './requisitions.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codCliente = urlParams.get('codCliente')
const nomCliente = urlParams.get('nomCliente')
const cnpjCliente = urlParams.get('cnpj')
const cpfCliente = urlParams.get('cpf')
const codAcessoCliente = urlParams.get('codAcesso')
const nomTributacao = urlParams.get('nomTributacao')

if(codCliente){
    let list = document.querySelector("#tributacaoCliente")
    document.querySelector("#nomCliente").value = nomCliente
    document.querySelector("#cnpjCliente").value = cnpjCliente
    document.querySelector("#cpfCliente").value = cpfCliente
    document.querySelector("#codAcessoCliente").value = codAcessoCliente

    dataTributacao?.map((i) => {
        let opt = document.createElement('option');
        opt.value = i.codTributacao;
        opt.innerHTML = i.nomTributacao;
        opt.selected = i.nomTributacao == nomTributacao ? true : false
        list.appendChild(opt)
    })
}

document.querySelector("#salvarEditCliente")?.addEventListener('click', async (event) => {
    event.preventDefault();

    let nome = document.querySelector("#nomCliente").value
    let cnpj = document.querySelector("#cnpjCliente").value
    let cpf = document.querySelector("#cpfCliente").value
    let codAcesso = document.querySelector("#codAcessoCliente").value
    let codTributacao = document.querySelector("#tributacaoCliente").value

    let body = {
        "codCliente": codCliente,
        "nomCliente": nome,
        "cnpj": cnpj,
        "cpf": cpf,
        "codTributacao": codTributacao,
        "codAcessos": codAcesso
    }
    let {data: response} = await usePut('/clientes', body)

    if(response){
        location.href = `detalhesCliente.html?codCliente=${response.codCliente}`
    }
})