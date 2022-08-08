
/* 
 var: Declara uma variável, opcionalmente, inicializando-a com um valor.
Experimental.
 
let: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
Experimental 

const: Declare uma constante de escopo de bloco, apenas de leitura.
 
*/

// "FUNÇÃO"
//=========================== 

// function greetMe(nome){
//     alert("Olá " + nome);
// }
// greetMe("mundo com javascript"); // " OLÁ MUNDO JAVASCRIPT"

// "DECLARAÇÕES DE VARIAVEIS"
//=============================

// var idade = 25; // declarar variavel global;
// console.log(idade); // buscar valor;

// let idade = 25; // declarar variavel escopo de bloco;
// console.log(idade); // buscar valor;

// const estado = 'São Paulo'; // declarar valor fixo;
// alert('estado'); // Mostrar em janela de alerta;

// "OBJETO"
//===============================

// let idade = 25;
// let sexo = 'Homem';

// let pessoa = {
//  idade: 25,
//  sexo: 'Homem'
// }; 

// console.log(pessoa);

// "ARRAYS"
//===============================

// let familia = [26, 50, 60, 44, 1, 5,];

// console.log(familia[3]);

// "TAREFA"
//===============================

// function dizerNome(){
//     console.log('Daniel');
// }

// dizerNome();

// "Operdores aritiméticos"
//===============================

// let salario = 100;

// // + , - , * , / , **

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// let idade = 18;

// console.log(idade--);
// console.log(idade++);

// "OPERADORES TERNARIO"
//===============================

//tem um cliente, 100 premium, comum

// let pontos= 200;
// let tipo = pontos > 200 ? 'premium' : 'comum';
// console.log(tipo);

// "OPERADORES LÓGICOS"
//===============================

//Operador(&&) AND
//Retorna true se os dois operadores forem true

console.log(false && false);

//Operador(||) OU
//Retorna true se um dos operadores forem true
// let maiorIdade = false;
// let carteira = true;
// let aplicar = maiorIdade || carteira;

// console.log('Pode Aplicar:',aplicar);

// //Operador(!) NOT
// //Retorna Negado para dois valores false

// let candidato = !aplicar;

// console.log('Candidato Recusado',candidato);

// "COMPARAÇÕES"
//===============================

// Se: IF e Senão: ELSE 
// Switch ..case

// if(valor){
//  //primeira condição
// }else if(valor){
// //segunda condição
// }else{
// //fechamento de validação
// }

// let permissao; //comum,gerente,diretor

// switch (permissao){

//     case 'comum': 
//     console.log('Usuário comum');
//     break;

//     case 'gerente': 
//     console.log('Usuário gerente');
//     break;

//     case 'diretor': 
//     console.log('Usuário diretor');
//     break;

//     default: console.log('Usuário não reconhecido!');
// }