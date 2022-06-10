const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let numImagemAtual = 0;
let proxImg = document.querySelector('#proximo');
let antImg = document.querySelector('#anterior');

proxImg.addEventListener('click',function () {
  if(numImagemAtual === 4){
    numImagemAtual = 0;
    document.getElementById("slide").src = 'https://fegemo.github.io/cefet-web/images/' + todasAsImagens[numImagemAtual];
  }
  else{
    numImagemAtual++;
    document.getElementById("slide").src = 'https://fegemo.github.io/cefet-web/images/' + todasAsImagens[numImagemAtual];
  }
});

antImg.addEventListener('click',function () {
  if(numImagemAtual === 0){
    numImagemAtual = 4;
    document.getElementById("slide").src = 'https://fegemo.github.io/cefet-web/images/' + todasAsImagens[numImagemAtual];
  }
  else{
    numImagemAtual--;
    document.getElementById("slide").src = 'https://fegemo.github.io/cefet-web/images/' + todasAsImagens[numImagemAtual];
  }
});