// variaveis

// Template literals

// ESTRUCTURING
// const tirar = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = tirar;
// console.log(d, a);

// const tirar2 = { nome: 'gui', idade: 34 }
// const { nome, idade } = tirar2;
// console.log(nome, idade);

// const { nome: a, idade: b } = tirar2;
// console.log(a, b);


// ARROW FUNCTION


// PARAMETROS PADRÃO
OLAR = (oi = 'PADRAO') => console.log(oi);

// REST E SPREAD
OLAR2 = (a = 5, b = 10, ...c) => console.log(`padrão: ${a} - ${b} === rest: ${c}`);
// OLAR2(3, 4, 5, 6, 7, 8, 9, 'gui');


// NOTAÇÃO LITERAL
// ex = (nome, idade) => {
//      return {
//           nome: nome,
//           idade
//      }
// }

// CLASS
// class Pessoa {
//      fala = () => {
//           console.log('olar meu bom');
//      }
// }
// class Animal extends Pessoa {
//      run = () => {
//           console.log('eu aqui')
//           this.fala();
//      }
// }
// const n = new Pessoa();
// console.log(n.fala());

