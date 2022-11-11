//radar de velocidade 
//velocidade maxima 70km/h;
//a cada 5km acima do limite você ganha 5 pontos;
//Math.floor();
//caso pontos maior que 12 -> "Carteira suspendida".

verificarVelocidade(70);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }

}