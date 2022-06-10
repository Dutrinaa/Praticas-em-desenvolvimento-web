document.querySelectorAll('.botao-expandir-retrair').forEach(botao => {
  botao.addEventListener('click', abrirTexto);
});

  function abrirTexto(e){
    let botao = e.currentTarget;
    let expandir = botao.parentNode;
    let sinalBotao = expandir.classList.toggle('expandido');

    if(sinalBotao === true)
      botao.innerHTML = "-";
    else
      botao.innerHTML = "+";
}