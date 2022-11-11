//Nota aluno


const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const valor = calcularMedia(notas);
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
    for (let valor of notas) {
        soma += valor
    }
    const media = soma / (notas.length);
    
}