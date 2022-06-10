
function entendendoParaCada(vetorElementos, elementoBusca) {
    let quantidade = 0;
    for (let elemento of vetorElementos) {
        if(elemento === elementoBusca)
            quantidade++;
    }

    escreva(0.4,"Quantidade de vezes do elemento no vetor", quantidade);
    
    return quantidade;
}

function obtemMes(numMes) {
    if (numMes < 1 || numMes > 12) {
        escrevaMensagem(0.5, "Mês inválido: " + numMes);
        return "";
    }
    
    let meses = [
        "",
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];
    
    escreva(0.5, "Mês", meses[numMes]);
    return meses[numMes];
}

function velocidadeAlturaBola(gravidade,velocidadeInicial,valorInteiro) {
    for (let tempo = 1; tempo <= valorInteiro; tempo++){
        escreva(3, "h(" + tempo + ")", alturaBola(tempo, velocidadeInicial, gravidade));
        escreva(3, "v(" + tempo + ")", velocidadeBola(tempo, velocidadeInicial, gravidade));
    }
}

function somatorio(valorInteiro) {
    let somatorio = 0;
    let denominador = 1;
    for (denominador; denominador <= valorInteiro; denominador++){
        somatorio = somatorio + 1/denominador;
        if(somatorio === 1){  
        }
        else{
        denominador++;
        }
    }
    escreva(4,"valor de S",somatorio);
}

function obtemPosicaoElemento(vetor,elementoBusca){
    let i = 0;
    for(let elemento of vetor){
        if(elemento === elementoBusca)
            break;
         i++;
        }

        if(i === vetor.length)
            escrevaMensagem(5, "null");
        else
            escreva(5,"Indice da primeira aparicao do elemento",i);
}

function operacaoVetor(vetor){
    let minimo;
    let maximo;
    let i = 0;
    for(let numero of vetor){
        if(i === 0){
            minimo = numero;
            maximo = numero;
        }
        if(numero > maximo)
            maximo = numero;
        if(numero < minimo)
            minimo = numero;
        i++;    
    }

    let resultado = (minimo + maximo) / 2;

    escreva(6, "Minimo e maximo dividido por 2",resultado);

    return resultado;

}

function fibonacci(tamanhoSequencia) {
    let arrSequencia = [0,1];
    let fib_atual = arrSequencia[1];
    let fib_proximo;
    let fib_anterior = arrSequencia[0];

    for(let i = 2; i < tamanhoSequencia; i++){
        fib_proximo = fib_atual + fib_anterior;
        arrSequencia.push(fib_proximo);
        fib_anterior = fib_atual;
        fib_atual = fib_proximo;
    }
      
    escreva(7, "Fib(" + tamanhoSequencia + ")", arrSequencia);
    return arrSequencia;
}



function exibeAmigos(pessoa){
    let numeroDaPessoa = pessoas.indexOf(pessoa);
    let amigosDaPessoa = [];
    for(let i = 0; i < pessoas.length; i++){
        if(amizades[numeroDaPessoa][i] === 1)
            amigosDaPessoa.push(pessoas[i]); 
    }

    escreva(8, "Amigos do(a) " + pessoa + "", amigosDaPessoa);
    return amigosDaPessoa;
}

function exibeAmigosSemEscreva(pessoaSemEscreva){  // crie a mesma funcao "exibe amigos" denovo mas dessa vez sem usar a funcao "escreva" nela
    let numeroDaPessoaSemEscreva = pessoas.indexOf(pessoaSemEscreva);
    let amigosDaPessoaSemEscreva = [];
    for(let i = 0; i < pessoas.length; i++){
        if(amizades[numeroDaPessoaSemEscreva][i] === 1)
            amigosDaPessoaSemEscreva.push(pessoas[i]); 
    }

    return amigosDaPessoaSemEscreva;
}

function exibeAmigosEmComum(primeiraPessoa,segundaPessoa){
    let amigosPrimeiraPessoa = exibeAmigosSemEscreva(primeiraPessoa);
    let amigosSegundaPessoa = exibeAmigosSemEscreva(segundaPessoa);
    let amigosEmComum = [];

    for(let i = 0; i < amigosPrimeiraPessoa.length; i++){
        for(let j = 0; j < amigosSegundaPessoa.length; j++){
            if(amigosPrimeiraPessoa[i] === amigosSegundaPessoa[j]){
                amigosEmComum.push(amigosPrimeiraPessoa[i]);
            }
        }
    }
    escreva(8, "" + primeiraPessoa + " e " + segundaPessoa + "", amigosEmComum);
}

let vetor = [1,2,3,4,3];
let frutas = ['Pera','Uva','Abacaxi','Cenoura'];
let pessoas = ['Alice','Bob','Carol','Daniele'];
let amizades = [
    [0,0,0,1],
    [1,0,1,1],
    [0,0,0,1],
    [1,1,0,0],
]

entendendoParaCada(vetor,3);
obtemMes(3);
velocidadeAlturaBola(9.81,50,20);
somatorio(1);
somatorio(10);
somatorio(100);
obtemPosicaoElemento(frutas,"Cenoura");
operacaoVetor(vetor);
fibonacci(7);
fibonacci(10);
fibonacci(15);
exibeAmigos('Alice');
exibeAmigos('Bob');
exibeAmigosEmComum('Bob','Alice')