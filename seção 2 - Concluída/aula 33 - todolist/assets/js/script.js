let btnAdcionar = document.querySelector(".adicionar-tarefa");
let tarefas = document.querySelector(".tarefas");
let newTask = document.querySelector("#input-new-task");

function criaLi(){
    const li = document.createElement("li");
    return li;
}

newTask.addEventListener("keypress", function (e){
    if (e.keyCode == 13){
        if(!newTask.value) return;
        adicionarTarefa(newTask.value);
    }
})

function criaBotaoApagar(li){
    li.innerText += "  "
    const botaoApagar = document.createElement("button");
    botaoApagar.setAttribute("class", "btnExcluir");
    botaoApagar.innerHTML = "❌";
    li.appendChild(botaoApagar);
}

function limpaInput(){
    newTask.value = "";
    newTask.focus();
}

function adicionarTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnAdcionar.addEventListener("click", function () {
    if(!newTask.value) return;
    adicionarTarefa(newTask.value);
});

document.addEventListener("click", function (e) {
    const el = e.target;
    console.log(el);

    if (el.classList.contains("btnExcluir")){
        el.parentElement.remove();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);
}