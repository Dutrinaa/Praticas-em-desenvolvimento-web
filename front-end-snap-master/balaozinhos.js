const balaozinhoEl = document.querySelector("#balaozinho");
const arrMarcacoesEl = document.querySelectorAll(".marcacao");
const botaoEl = document.querySelector('#definir-marcacao');

for (marcacaoEl of arrMarcacoesEl){
    marcacaoEl.addEventListener("mouseover", entrou);
    marcacaoEl.addEventListener("mouseout", saiu);
    marcacaoEl.style.cursor = "help";
}   

botaoEl.addEventListener('click', function () {
    arrMarcacoesEl[0].style.transition ='all 200ms ease';
    arrMarcacoesEl[0].style.left = document.querySelector('#marcacao-x').value+'px';
    arrMarcacoesEl[0].style.top = document.querySelector('#marcacao-y').value+'px';
    arrMarcacoesEl[0].style.width = document.querySelector('#marcacao-largura').value+'px';
    arrMarcacoesEl[0].style.height = document.querySelector('#marcacao-altura').value+'px';

});

function entrou(e){
    let currenttarget = e.currentTarget;
    balaozinhoEl.innerHTML="<h2>"+currenttarget.dataset.titulo+"</h2>" 
    +"<p>"+currenttarget.dataset.conteudo+"</p>";
    balaozinhoEl.style.pointerEvents = "none";
    balaozinhoEl.style.display = "";
    currenttarget.addEventListener('mousemove', function(e) {
        balaozinhoEl.style.top = e.pageY+'px';
        balaozinhoEl.style.left = e.pageX+'px';
    });
}   

function saiu(e){
    balaozinhoEl.innerHTML = ("");
    balaozinhoEl.style.display = "none";
}
balaozinhoEl.style.display = "none";