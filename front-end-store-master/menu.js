let itensDoMenu = document.querySelectorAll('#menu-principal li');

itensDoMenu.forEach(function(itemEl) {
  itemEl.addEventListener('click', ativaItemMenu);
});

function ativaItemMenu(e) {
  itensDoMenu.forEach(function(itemEl) {
    itemEl.classList.remove('menu-ativo');
  });
  e.currentTarget.classList.add('menu-ativo');
}
