import { usePut, useGet } from './requisitions.js';

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
let arrayClientes = []
let optionSelected = document.querySelector('option:checked').value
let newDesc = document.querySelector("#descricao")

function handleClick(event) {
  let valueCheck = event.target.value;
  if(event.target.checked){
    arrayClientes.push(valueCheck)
  }

  if(arrayClientes.includes(valueCheck) && !event.target.checked){
    let index = arrayClientes.indexOf(valueCheck)
    if(index > -1){
      arrayClientes.splice(index, 1)
    }
  }

  console.log(arrayClientes)

};

window.addEventListener('load', async (event) => {
  let response = await useGet('/clientes')
  let stringElement = ""
  response?.map((i) => {
    let check = false;
    if(clientesAlocados.includes(i.codCliente)){
      check = true
      arrayClientes.push(i.codCliente )
    }
    
    let element = `
      <div class="col">
        <input class="form-check-input selectCliente" type="checkbox" value="${i.codCliente}" onClick="handleClick(this)" name="cliente" ${!check ? "" : "checked"}>
        <label class="form-check-label" for="status">${i.nomCliente}</label>
      </div>
    `
    checkClientes.insertAdjacentHTML('beforeend',element)
  })
  
})

const boxes = document.querySelectorAll('.selectCliente');
boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    let valueCheck = event.target.value;
    if(event.target.checked){
      arrayClientes.push(valueCheck)
    }

    if(arrayClientes.includes(valueCheck) && !event.target.checked){
      let index = arrayClientes.indexOf(valueCheck)
      if(index > -1){
        arrayClientes.splice(index, 1)
      }
    }

    console.log(arrayClientes)

  });
});

selectStatus.addEventListener('change', (event) => {
  optionSelected = event.target.value
})
newNomTarefa.addEventListener('change', (event) => {
  nomTarefa = event.target.value
})
newDesc.addEventListener('change', (event) => {
  descTarefa = event.target.value
})
document.querySelector("#salvarEditCliente")?.addEventListener('click', async (event) => {
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