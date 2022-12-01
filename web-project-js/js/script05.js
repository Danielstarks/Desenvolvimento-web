//Nota aluno


const array = [60, 100, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

   /* let soma = 0;
    for (let nota of notas) {
        soma += nota
    }
    const media = soma / (notas.length);
*/
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'

}

function calcularMedia(array){

    let soma = 0;

    for (let valor of array) {
        soma += valor
    }
    return soma/(array.length);
    
}