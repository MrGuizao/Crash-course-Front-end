'use strict'
// variaveis
// Template literals
// ARROW FUNCTION
// DESTRUCTURING
// const tirar = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = tirar;
// console.log(d, a);
// const tirar2 = { nome: 'gui', idade: 34 }
// const { nome, idade } = tirar2;
// console.log(nome, idade);
// const { nome: a, idade: b } = tirar2;
// console.log(a, b);

// const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const restaurant = {
//      name: 'Classico Italiano',
//      location: 'Via Angelo Tavanti 23, Firenze, Italy',
//      categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//      starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//      mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//      order: function (start, main) {
//           return [this.categories[start], this.categories[main]];
//      },
//      openingHours: {
//           thu: {
//                open: 12,
//                close: 22,
//           },
//           fri: {
//                open: 11,
//                close: 23,
//           },
//           sat: {
//                open: 0, // Open 24 hours
//                close: 24,
//           },
//      },
// };

// const [a, b, c] = restaurant.categories;
// console.log(a, b, c);
// const [x, y, z] = [a, b, c];
// console.log(x, y, z);
// console.log(restaurant.categories); //mostra as opções
// const [newClass, newClass2] = restaurant.order(0, 2); //cria 2 novas variaveis e adiciona os valores de restaurant.order nelas 
// console.log(restaurant.order(0, 2)); // apenas printa pelo metodo
// console.log(newClass, newClass2); //apenas printa pelas novas variaveis
// const emp = ['Rohit', 1211, 'Software Engineer'];
// const teste = {name: 'Rohit', id: 1211, designation: "Software Engineer"}
// const getDetailArr = ([name, id, designation]) => console.log(`Employee's name: ${name}, ID: ${id}, Designation: ${designation}`);
// const getDetailObj = ({name, id, designation}) => console.log(`Employee's name: ${name}, ID: ${id}, Designation: ${designation}`);
// getDetailArr(emp);
// getDetailObj(teste);



// PARAMETROS PADRÃO
// const OLAR = (oi = 'PADRAO akakakak') => console.log(oi);
// REST E SPREAD
// const OLAR2 = (a = 5, b = 10, ...c) => console.log(`padrão: ${a - b} === rest: C ${c} C`);
// OLAR();
// OLAR2(3, 4, 5, 6, 7, 8, 9, 'gui');
// console.log(...emp);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = [10, 11, 12, 13, 14, 15];
// const [a, b, ...resTest] = arr;
// console.log(a, b, resTest);
// const [x, y, ...z] = [...arr, ...arr2];
// console.log(x, y, z);
// const r = 1203
// const t = 2
// const p = 30
// const u = 42
// const arra = [1123, 43, 6, 57, 56, 58, 578];
// const [ere, ...rest] = [r, t, p, u];
// console.log(ere, rest);
// const nova = [...arra, r, t, p, u]
// console.log(nova);
// console.log(23 || "OU"); // mostra o primeiro verdadeiro
// console.log(1 && 67 && "E"); // mostra o primeiro falso
// console.log(arra[3] !== 57 || "erro");


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




// Coding chalenge 01 
const game = {
     team1: 'Bayern Munich',
     team2: 'Borrussia Dortmund',
     players: [
          [
               'Neuer',
               'Pavard',
               'Martinez',
               'Alaba',
               'Davies',
               'Kimmich',
               'Goretzka',
               'Coman',
               'Muller',
               'Gnarby',
               'Lewandowski',
          ],
          [
               'Burki',
               'Schulz',
               'Hummels',
               'Akanji',
               'Hakimi',
               'Weigl',
               'Witsel',
               'Hazard',
               'Brandt',
               'Sancho',
               'Gotze',
          ],
     ],
     score: '4:0',
     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
     date: 'Nov 9th, 2037',
     odds: {
          team1: 1.33,
          x: 3.25,
          team2: 6.5,
     },
};
// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk1, ...others1] = players1;
// console.log(gk1, others1);

// const fullPlayers = [...players1, ...players2];
// console.log(fullPlayers);

// const reservas = [...players1, "ASPAS", "COUTINHO"];
// console.log(reservas);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const { odds: { team1: team3, x: draw2, team2: team4 } } = game;
// console.log(team3, draw2, team4);


