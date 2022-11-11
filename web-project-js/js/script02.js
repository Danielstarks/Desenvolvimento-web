//identificar números impa ou par de uma  lista.

exibirTipo(8);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i,'Par');
        else {
            console.log(i,'Impar');
        }
    }
}