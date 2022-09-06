const listaClientes = document.getElementById("listaClientes")
const cadastrarClientes = document.getElementById("cadastrarClientes")
const listaTarefas = document.getElementById("listaTarefas")
const nav = document.getElementById("sideNav")

function showSideNav() {
    nav.classList.remove("removeanimate");
    nav.classList.add("animate");
}

function hideSideNav(){
    nav.classList.remove("animate");
    nav.classList.add("removeanimate");
}



function getCurrentURL () {
    let url = new URL (window.location.href);
    let mainURL = url.pathname.split('/');
    return mainURL[2]
}

if(getCurrentURL().includes("lista_clientes")){
    listaClientes.style.fontSize = "25px";
    listaClientes.style.fontWeight = "500";
}
if(getCurrentURL().includes("cadastrar_cliente")){
    cadastrarClientes.style.fontSize = "25px";
    cadastrarClientes.style.fontWeight = "500";
}
if(getCurrentURL().includes("lista_tarefas")){
    listaTarefas.style.fontSize = "25px";
    listaTarefas.style.fontWeight = "500";
}
  
