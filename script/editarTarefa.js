import { usePut, useGet } from './requisitions.js';
import { dataCliente } from '../data/data.js'

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const codTarefa = urlParams.get('codTarefa')
let nomTarefa = urlParams.get('nomTarefa')
const clientesAlocados = urlParams.get('clientesAlocados').split(',')
const statusTarefa = urlParams.get('statusTarefa')
let descTarefa = urlParams.get('descTarefa')
const selectStatus = document.querySelector("#status")
const checkClientes = document.querySelector("#checkClientes")

if(codTarefa){
  document.querySelector("#nomTarefa").value = nomTarefa
  document.querySelector("#descricao").value = descTarefa
  document.querySelector(`[value=${statusTarefa}]`).selected = true
}

let newNomTarefa = document.querySelector('#nomTarefa')
let arrayClientes = [...clientesAlocados]
let optionSelected = document.querySelector('option:checked').value
let newDesc = document.querySelector("#descricao")

window.addEventListener('load', async (event) => {
  // let response = await useGet('/clientes')
  let response = dataCliente

  response?.map((i) => {
    
    let div = document.createElement('div');
    div.classList.add('selectItem');
    div.id = i.codCliente;
    div.innerText = i.nomCliente;

    if(arrayClientes.includes(i.codCliente.toString())){
      div.classList.add('selectItem_selected')
    }

    div.addEventListener('click', (event) => {
      event.preventDefault();
      let valueCheck = event.target.id.toString();

      if(div.className.includes('selectItem_selected')){
        if(arrayClientes.includes(valueCheck)){
          let index = arrayClientes.indexOf(valueCheck)
          if(index > -1){
            arrayClientes.splice(index, 1)
          }
        }
        div.classList.remove('selectItem_selected')
      }
      else{
        div.classList.add('selectItem_selected');
        arrayClientes.push(valueCheck)

      }      
    })
    
    checkClientes.appendChild(div)
  })
  
})

selectStatus.addEventListener('change', (event) => {
  optionSelected = event.target.value
})
newNomTarefa.addEventListener('change', (event) => {
  nomTarefa = event.target.value
})
newDesc.addEventListener('change', (event) => {
  descTarefa = event.target.value
})
document.querySelector("#salvarEditTarefa")?.addEventListener('click', async (event) => {
    event.preventDefault();

    //let nome -> nomTarefa
    //let desc -> descTarefa
    //let status -> optionSelected
    //let clientes
    let arrayFormatadoClientes = arrayClientes.map((i) => {
      return { codCliente: i}
    })

    let body = {
        "codTarefa": codTarefa,
        "nomTarefa": nomTarefa,
        "descTarefa": descTarefa,
        "status": optionSelected,
        "clienteRel": arrayFormatadoClientes
    }

    let {data: response} = await usePut('/tarefas', body)

    if(response){
        location.href = `detalhesTarefa.html?codTarefa=${response.codTarefa}`
    }
})