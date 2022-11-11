//criar um método para ler propriedades de um objeto e 
//exibir as propriedades do tipo sting que estão nesse objeto.

const filme = {
    titulo: 'Vingadores',
    ano: 2019,
    diretor:'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
    if(typeof obj[prop]==='string')
    console.log(prop, obj[prop]);
}