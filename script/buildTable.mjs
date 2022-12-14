import { dataTributacao, formatStatus} from "../data/data.js"

export function buildInfos(data, type){
    if(type == "cliente"){ 
        let table = document.querySelector("#tableBody")
        table.innerHTML = ""

        data.map((i) => {

            let tributacao = dataTributacao.filter((t) => t.codTributacao == i?.codTributacao);
            let nomTributacao = tributacao[0]?.nomTributacao;
            
            let dataTarefa = i?.tarefas;
            let tarefas = [];
            let stringList = ""
            dataTarefa?.map((nC) => stringList = stringList + `<li key=${nC?.codTarefa}>${nC?.tarefas?.nomTarefa}</li>`);

            table.insertAdjacentHTML('beforeend',`
            <tr id="${i?.codCliente}">
                <td scope="row">
                    <button class="action_button" onclick="detalhesCliente(${i?.codCliente})">
                        <span class="iconify" data-icon="akar-icons:eye" data-width="16"></span>
                    </button class="action_button">
                    <button class="action_button" onclick="editarCliente(${i?.codCliente}, '${i?.nomCliente}', ${i?.cnpj}, ${i?.cpf}, '${nomTributacao}', ${i?.codAcessos})">
                        <span class="iconify" data-icon="clarity:pencil-solid" data-width="16"></span>
                    </button>
                    <button class="action_button deleteCliente" value="${i?.codCliente}" onclick="deleteCliente(${i?.codCliente})">
                        <span class="iconify" data-icon="bi:x-lg" data-width="16"></span>
                    </button>
                </td>
                <td scope="row">${i?.nomCliente}</td>
                <td>${i?.cnpj}</td>
                <td>${i?.cpf}</td>
                <td>
                    <ul>
                        ${stringList}
                    </ul>
                </td>
                <td>${nomTributacao}</td>
                <td>${i?.codAcessos}</td>
            </tr>
        `)
        })
    }

    if(type == "tarefa"){
        let table = document.querySelector("#tableBody");
        table.innerHTML = "";
        
        data.map((i) => {
            let dataCliente = i?.clientes;
            let stringList = "";
            dataCliente?.map((nC) => {
                stringList = stringList +`<li key=${nC?.clientes?.codCliente}>${nC?.clientes?.nomCliente}</li>`
            })

            table.insertAdjacentHTML('beforeend',`      
            <tr>
            <td scope="row">
                <button class="action_button">
                    <span class="iconify" data-icon="akar-icons:eye" data-width="16" onclick="detalhesTarefa(${i?.codTarefa})"></span>
                </button class="action_button">
                <button class="action_button">
                    <span class="iconify" data-icon="clarity:pencil-solid" data-width="16" onclick="editarTarefa(${i?.codTarefa}, '${i?.nomTarefa}', '${i?.status}', '${i?.descTarefa}')"></span>
                </button>
                <button class="action_button deleteCliente">
                    <span class="iconify" data-icon="bi:x-lg" data-width="16" onclick="deletarTarefa()"></span>
                </button>
            </td>
                <td scope="row">${i?.nomTarefa}</td>
                <td>
                    <ul>
                        ${stringList}
                    </ul>
                </td>
                <td>${formatStatus(i?.status)}</td>
                <td>${i?.descTarefa}</td>
            </tr>
        `)
        })
    }
}

export function mountSelect(data, type){
    if(type == "cliente"){
        let list = document.querySelector("#dropdownCliente");
        
        data && data.map((i) => {
            let opt = document.createElement('option');
            opt.value = i?.codCliente;
            opt.innerHTML = i?.nomCliente;
            list.appendChild(opt);
        })
    }

    if(type == "tarefa"){
        let listSts = document.querySelector("#dropdownStatus");
        
        data && data.map((i) => {

            let optSts = document.createElement('option');
            optSts.value = i?.status;
            optSts.innerHTML = formatStatus(i?.status);
            listSts.appendChild(optSts);
        })
        
    }
}
