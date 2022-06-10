function testeSaidas() {
    escrevaMensagem(0.1, "Exercício 0.1");
    let a = 1;
    let b = 2;
    let c = [1,3,2,123,2321,32,1];
    let d = [
        [12,21,21,1,2],
        [12,1,2,3,1,1],
        [1,1,2,3,1,4]
    ];
    let m = [
        [0,0,0,1],
        [1,0,1,1],
        [0,0,0,1],
        [1,1,0,0],
    ]
    let pessoas = ["Alice", "Bob", "Carol","Daniele"];
    let e = true;
    
    escreva(0.1, "Variável a", a);
    escreva(0.1, "Variável b", b);
    escreva(0.1, "Variável a + b", a + b);
    escreva(0.1, "Variável d", d);
    escreva(0.1, "Variável e", e);
    escrevaMensagem(0.1, "Felipe Dutra Cerbino");
    
}

function soma(n1,n2) {
    let somat = n1 + n2;

    escreva(0.2, "Soma de dois numeros",somat);

}

function calculos(n) {
    escreva(0.3, "Quadrado de N", n * n);
    escreva(0.3, "Metade de N", n / 2);
    escreva(0.3, "Raiz Quadrada de N", Math.sqrt(n));

}

function alturaBola(tempo, velocidadeInicial, gravidade) {
    let altura = (velocidadeInicial * tempo) - (gravidade * (tempo * tempo) / 2);
    
    escreva(1, "h(" + tempo + ")", altura);
    
    return altura;
}

function velocidadeBola(tempo,velocidadeInicial,gravidade) {
    let velocidade = (velocidadeInicial - (gravidade * tempo));

    escreva(2, "v(" + tempo + ")", velocidade);

    return velocidade;
}

testeSaidas();
soma(5,-2);
calculos(100);
alturaBola(1,50,9.81);
alturaBola(5,50,9.81);
alturaBola(10,50,9.81);
velocidadeBola(1,50,9.81);
velocidadeBola(5,50,9.81);
velocidadeBola(10,50,9.81);