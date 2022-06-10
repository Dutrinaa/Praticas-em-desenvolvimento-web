let entrouAux = false;
let categoriaEl = "outros";
let marcadoBool = false;
botaoEl = document.querySelector("#incluir-nova-tarefa");
botaoEl.addEventListener("click", function () {
  tarefaEl = document.getElementById("nova-tarefa-nome").value;
  insereTarefaNoVetor(tarefaEl);
  if (entrouAux === false) {
    for (let i = 0; i < tarefas.length; i++) {
      insereTarefaNaPagina(tarefas[i]);
    }
  } else {
    insereTarefaNaPagina(tarefas[tarefas.length - 1]);
  }
});

let tarefas = [
  {
    nome: "Comprar leite",
    categoria: "compras",
    marcado: false,
  },
  {
    nome: "Escutar chimbinha",
    categoria: "lazer",
    marcado: true,
  },
];

function insereTarefaNoVetor(tarefaVetor) {
  tarefas.push({nome: tarefaVetor, categoria: categoriaEl, marcado: marcadoBool,});
}

function insereTarefaNaPagina(tarefaPagina) {
  let listaEl = document.querySelector("#lista-tarefas");
  let liNovoEl = document.createElement("li");
  listaEl.appendChild(liNovoEl);
  liNovoEl.innerHTML = tarefaPagina.nome;
  liNovoEl.classList.add("item-tarefa");
  entrouAux = true;
  if (tarefaPagina.marcado == true) {
    liNovoEl.classList.add('marcado');
  }
  let limparInput = document.getElementById("nova-tarefa-nome");
  limparInput.value = '';
  limparInput.focus();
}
