function metodosVetor(vetor){
    let vetorArrumado = vetor.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;

        return 0;
    });
    vetorArrumado.pop();
    vetorArrumado.unshift('Abacate');
    escreva(0.6,"Vetor modificado :", vetorArrumado);
}

function metodosString(string){
    let frase = string.toUpperCase();
    frase = frase.replaceAll('O','A');
    escreva(0.7,"Palavra ou frase original :",string);
    escreva(0.7,"Palavra ou frase modificada :",frase);
}

function converteData(data){
    let dataSemBarras = data.replaceAll('/','');
    let numeroDoMesString = dataSemBarras[2] + dataSemBarras[3];
    let numeroDoMes = parseInt(numeroDoMesString,10);
    let mesEmExtenso = obtemMes(numeroDoMes);
    let v = [];
    escreva(9, "" + dataSemBarras[0] + + dataSemBarras[1] + " de " + mesEmExtenso + " de " + dataSemBarras[4] + + dataSemBarras[5] + + dataSemBarras[6] + + dataSemBarras[7] + "", v);

}

function eliminaCaracteres(texto, caracteresParaEliminar) {
    for (let caracterEliminar of caracteresParaEliminar) {
        texto = texto.replaceAll(caracterEliminar,'');
    }
    escreva(10, "texto final - eliminação de " + caracteresParaEliminar, texto);  
    return texto;
}

function substituaCaracteres(texto, caracteresProcura, caracteresSubstituirPor) {
    for(let i = 0; i < caracteresProcura.length; i++) {
        let caractereProcura = caracteresProcura[i];
        let caractereSubstituirPor = caracteresSubstituirPor[i];
        texto = texto.replaceAll(caractereProcura,caractereSubstituirPor);
    }
    
    escreva(10,"texto final (substituição de  " + caracteresProcura + " por " + caracteresSubstituirPor + ")", texto);
    
    return texto;
}

function verificaPalindromo(fraseOuPalavra) {
    let texto = fraseOuPalavra.replaceAll(' ','');
    texto = texto.replaceAll('ô','o');
    texto = texto.replaceAll('ê','e');
    texto = texto.replaceAll('â','a');
    texto = texto.replaceAll('á','a');
    texto = texto.replaceAll('é','e');
    texto = texto.replaceAll('í','i');
    texto = texto.replaceAll('ó','o');
    texto = texto.replaceAll('ú','u');
    texto = texto.replaceAll('ç','c');
    texto = texto.replaceAll('-','');
    texto = texto.replaceAll('!','');
    texto = texto.replaceAll('?','');
    texto = texto.replaceAll('.','');
    texto = texto.replaceAll(',','');
    texto = texto.toLowerCase();
    let vetor = texto.split('');
    let vetorReverso = texto.split('');
    let aux = 0;
    vetorReverso.reverse();

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === vetorReverso[i]){
            aux = i;
        }
        else{
            escrevaMensagem(11,"A palavra ou frase: " + fraseOuPalavra + ", nao é um palindromo");
            return false;
            break;
        }
    }
    if (aux === (vetor.length - 1)){
        escrevaMensagem(11,"A palavra ou frase: " + fraseOuPalavra + ", é um palindromo");
        return true;
    }
}

function daOiPara(funcaoDeDarOi, strPessoa) {
    
    //veja que aqui, independente do nome da função
    //externa, invocamos ela como funcaoDeDarOi
    strOi = funcaoDeDarOi(strPessoa);
    
    escrevaMensagem(12, "============= Minha linda interface de dar oi =========");
    escrevaMensagem(12, strOi);
    escrevaMensagem(12, "========================");
}

function oiPortuguesFormal(strPessoa) {
    return "Oi Sr(a). " + strPessoa + ", como vai?";
}

let oiPortugues = function(strPessoa) {
    return "Oi " + strPessoa + ", blza?"
};

function oiParaOsCasas(strPessoa){
    return "Cole " + strPessoa + ", bao?";
}

let oiNormal = function(strPessoa) {
    return "Iai, suave " + strPessoa + ",?"
};

daOiPara(oiPortuguesFormal,"Daniel");
daOiPara(oiPortugues,"Daniel");
daOiPara(function(strPessoa) {
    return "Hi " + strPessoa + ", how are you?";
},"Daniel");
daOiPara(oiParaOsCasas,"Daniel");
daOiPara(oiNormal,"Daniel");
daOiPara(function(strPessoa) {
    return "Hey " + strPessoa + ", whats up?";
},"Daniel");

function executaOperacaoVetor(funcaoDaOperacao,primeiroVetor,segundoVetor){
    if (primeiroVetor.length === segundoVetor.length){
        funcaoDaOperacao(primeiroVetor,segundoVetor);
        escreva(13, "O resultado do vetor apos a operacao foi:", vetorResultado);
    }
    else{
        escrevaMensagem(13,"Nao foi possivel executar a operacao.");
        return false;
    }

}

function soma(primeiroVetor, segundoVetor){
    for (let i = 0; i < primeiroVetor.length; i++)
        vetorResultado[i] = primeiroVetor[i] + segundoVetor[i];
    
    return vetorResultado;
}

function subtracao(primeiroVetor, segundoVetor){
    for (let i = 0; i < primeiroVetor.length; i++)
    vetorResultado[i] = primeiroVetor[i] - segundoVetor[i];

return vetorResultado;
}

function multiplicacao(primeiroVetor, segundoVetor){
    for (let i = 0; i < primeiroVetor.length; i++)
    vetorResultado[i] = primeiroVetor[i] * segundoVetor[i];
    
return vetorResultado;
}

let sequencia1 = [5,9,-4,8,-1,2,0,4,10,15];
let sequencia2 = ['Pera','Uva','Abacaxi','Cenoura'];
let sequencia3 = [1,2,3,4,3,14,'Morango'];
let vetorDeCincoPosicoesUm = [4,8,9,10,21];
let vetorDeCincoPosicoesDois = [6,11,-5,14,7];
let vetorResultado = [];

metodosVetor(sequencia1);
metodosVetor(sequencia2);
metodosVetor(sequencia3);
metodosString('Morango');
metodosString('Pessego');
metodosString('Melancia');
converteData('17/05/2005');
converteData('09/01/2004');
converteData('19/01/2021');
eliminaCaracteres('correndo contra o tempo', 'coe');
substituaCaracteres('o sapo nao lava o pe', 'aoe', 'iiu');
verificaPalindromo("Socorram-me, subi no ônibus em Marrocos");
verificaPalindromo("A cara rajada da jararaca");
verificaPalindromo("Asa");
executaOperacaoVetor(soma,vetorDeCincoPosicoesUm,vetorDeCincoPosicoesDois);
executaOperacaoVetor(subtracao,vetorDeCincoPosicoesUm,vetorDeCincoPosicoesDois);
executaOperacaoVetor(multiplicacao,vetorDeCincoPosicoesUm,vetorDeCincoPosicoesDois);