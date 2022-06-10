const inputNomeEl = document.getElementById('input-nome');
const inputCorEl = document.getElementById("input-cor");
const inputCabeloEl = document.getElementById("input-cabelo");
const cabeloEl = document.getElementById("avatar-cabelo");
const nomeEl = document.getElementById("avatar-nome");

inputNomeEl.addEventListener("change", mudarNome);
inputCabeloEl.addEventListener("change", mudarCabelo);
inputCorEl.addEventListener("input", mudarCor);

function mudarNome(){
    nomeEl.innerHTML = inputNomeEl.value;
}

function mudarCor(){
    document.getElementById("avatar-preview").style.backgroundColor = inputCorEl.value;
}

function mudarCabelo(){
    cabeloEl.src = inputCabeloEl.value;

}