import {dataCliente} from '../data/data.js'
import {dataTributacao} from '../data/data.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codCliente = urlParams.get('codCliente')

let clienteInfo = dataCliente.filter((i) => i.codCliente == codCliente)

if(clienteInfo.length > 0){
    let nome = document.querySelector("#nomCliente")
    let cnpj = document.querySelector("#cnpjCliente")
    let cpf = document.querySelector("#cpfCliente")
    let tributacao = document.querySelector("#tributacaoCliente")
    let codAcesso =document.querySelector("#codAcessoCliente")
    let tributacaoData = dataTributacao.filter((i) => i.codTributacao == clienteInfo[0].codTributacao)

    nome.innerText = clienteInfo[0].nomCliente
    cnpj.innerText = clienteInfo[0].cnpj
    cpf.innerText = clienteInfo[0].cpf
    tributacao.innerText = tributacaoData[0].nomTributacao
    codAcesso.innerText = clienteInfo[0].codAcessos
}