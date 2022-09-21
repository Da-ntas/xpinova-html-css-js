import { usePut } from './requisitions.js';

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const codCliente = urlParams.get('codTarefa')
// const nomCliente = urlParams.get('nomTarefa')
// const cnpjCliente = urlParams.get('clientesAlocados')
// const cpfCliente = urlParams.get('statusTarefa')
// const codAcessoCliente = urlParams.get('descTarefa')



// if(codCliente){
//     let list = document.querySelector("#tributacaoCliente")
//     document.querySelector("#nomCliente").value = nomCliente
//     document.querySelector("#cnpjCliente").value = cnpjCliente
//     document.querySelector("#cpfCliente").value = cpfCliente
//     document.querySelector("#codAcessoCliente").value = codAcessoCliente

//     dataTributacao?.map((i) => {
//         let opt = document.createElement('option');
//         opt.value = i.codTributacao;
//         opt.innerHTML = i.nomTributacao;
//         opt.selected = i.nomTributacao == nomTributacao ? true : false
//         list.appendChild(opt)
//     })
// }

const boxes = document.querySelectorAll('.selectCliente');
let arrayClientes = []

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

// document.querySelector("#salvarEditCliente")?.addEventListener('click', async (event) => {
//     event.preventDefault();

//     let nome = document.querySelector("#nomCliente").value
//     let cnpj = document.querySelector("#cnpjCliente").value
//     let cpf = document.querySelector("#cpfCliente").value
//     let codAcesso = document.querySelector("#codAcessoCliente").value
//     let codTributacao = document.querySelector("#tributacaoCliente").value

//     let body = {
//         "codCliente": codCliente,
//         "nomCliente": nome,
//         "cnpj": cnpj,
//         "cpf": cpf,
//         "codTributacao": codTributacao,
//         "codAcessos": codAcesso
//     }
//     let {data: response} = await usePut('/tarefas', body)

//     if(response){
//         location.href = `detalhesTarefa.html?codTarefa=${response.codTarefa}`
//     }
// })