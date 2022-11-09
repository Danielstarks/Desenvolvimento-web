// var valor global;
// let valor escopo de bloco;
// const valor fixo;

// função tradicional
// function teste(){
//     console.log('daniel');
// }
// teste();

// //arow function
// const nome = () => {
//     console.log('bin');
// }

// nome();

// // async
// (
//  function(){
//     alert('Olá');
//  }
// )();

// Callback function

// function teste(nome, func){
// console.log(nome);
// par = {
// nome: 'bin'
// };
// func(par);
// }

// teste('daniel',function(par){
//    alert(par.nome);
// });

//Class js

//class teste{

/*constructor(){
   this.nome = 'bin';
  }*/

//    constructor(nome){
//     this.nome = nome;
//     console.log(this.nome);
//    }

//    printNome(){
//   //  console.log(this.nome);
//    }

// }

// var instancia = new teste('ingridy');

/*instancia.nome = 'daniel';

instancia.printNome();

var instancia2 = new teste();

instancia2.printNome(); */

//promise

// function teste() {
//     return new Promise(function (resolve, reject) {

//         if(1 == 2){
//             resolve('danki');
//         }else{
//             reject('falhou')
//         }

//     });
// }

// teste().then(function(val) {
//     alert(val);
// }).catch(function (error) {
//     alert(error);
// })


// //async function

// function teste(){

//     return new  Promise(function(resolve, reject) {

//         setTimeout(resolve,2000, 'primeiro')

//     });
// }
// function teste2() {

//     return new Promise(function (resolve, reject) {

//         setTimeout(resolve, 1000, 'segundo')

//     });
// }


// (
//     async function(){

//        await teste().then(function(val){
//             console.log(val);
//         });
        
//        await teste2().then(function (val) {
//             console.log(val);
//         });

//         console.log('depois');
//     }
// )();
