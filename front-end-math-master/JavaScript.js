let variavel_resolver = document.querySelector("#resolver");
variavel_resolver.addEventListener("click", function () {
    document.getElementById("resultado-delta").value = '';
    document.getElementById("resultado-x1").value = '';
    document.getElementById("resultado-x2").value = '';
    document.getElementById("raizes").value = '';
    document.getElementById("direcao").value = '';
    document.getElementById("vertice-x").value = '';
    document.getElementById("vertice-y").value = '';

    let qtd_a = document.querySelector("#coeficiente-a").value;
    let qtd_b = document.querySelector("#coeficiente-b").value;
    let qtd_c = document.querySelector("#coeficiente-c").value;

    if(qtd_a == 0){
        window.alert('A equacao nao eh de segundo grau.');
        return false;
    }

    let delta = qtd_b ** 2 - 4 * qtd_a * qtd_c;
    document.getElementById("resultado-delta").value = delta;

    if(delta >= 0){
        if(delta === 0)
            document.getElementById("raizes").value = 1;

    
        let x1 = ((qtd_b * -1) + Math.sqrt(delta)) / qtd_a * 2;
        document.getElementById("resultado-x1").value = x1;

        let x2 = ((qtd_b * -1) - Math.sqrt(delta)) / qtd_a * 2;
        document.getElementById("resultado-x2").value = x2;

        document.getElementById("raizes").value = 2;

        if(qtd_a > 0)
            document.getElementById("direcao").value = 'Concava para cima';
        else
            document.getElementById("direcao").value = 'Concava para baixo';

        let vx = (qtd_b * -1) / 2 * qtd_a;
        document.getElementById("vertice-x").value = vx;

        let vy = (delta * -1) / 4 * qtd_a;
            document.getElementById("vertice-y").value = vy;

    }
    else
        document.getElementById("raizes").value = 0;
    
});
