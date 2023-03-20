'use strict';
// let hasDrivers = false;
// const passTest = true;
// if (passTest) hasDrivers = true;
// if (hasDrivers) console.log("posso dirigir!");

// const nome = prompt("qual seu nome?");
// const anos = prompt("qual sua idade?");
// const idade = anos <= 18;
// console.log(idade ? `${nome} é menor de idade` : `${nome} é maior de idade: ${anos} anos`);

// const idade = 1996;
// const teste = funcao => 2023 - idade;
// const teste2 = function () {
//      console.log("funciona");
// }
// teste2()

// const nascimento = ano => 2023 - ano;
// const parque = idade => {
//      if (idade <= 12) {
//           console.log(`${idade} anosss: Menor de idade não entra`);
//      } else if (idade <= 18) {
//           console.log(`${idade} anos: Menor de idade não entra`);
//      } else {
//           console.log(`${idade} anos: Pode entrar`);
//      }
// }
// parque(nascimento(1990));


// Coding challenge 05
// calclar scores 
// const calcScore = function (val1, val2, val3) {
//      return (val1 + val2 + val3) / 3;
// }
// // criar checkWins para descobrir qual time venceu
// checkWinner = (avgKoala, avgDolfin) => {
//      if (avgDolfin / 2 > avgKoala) {
//           console.log(`Dolfin won: ${avgDolfin} vs ${avgKoala}`)
//      } else if (avgKoala / 2 > avgDolfin) {
//           console.log(`Koala won: ${avgKoala} vs ${avgDolfin}`)
//      } else {
//           console.log(`No one won: ${avgKoala} vs ${avgDolfin}`)
//      }
// }
// checkWinner(calcScore(23, 34, 27), calcScore(85, 54, 41));

// teste = () => console.log("Guilherme esta testando arrow function");
// teste()


// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS
// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS
// ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS - ARRAYS

// const animais = ["cachorro", 'gato', 'mouse', 'ant', 'spider'];
// animais.push("new spider")// adiciona no final
// animais.pop()// deleta no final
// animais.unshift("new spider") // adiciona no começo
// animais.shift()// deleta no começo
// console.log(animais);

// coding challenge 07
// const bills = [125, 555, 44];
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals);

// const jonas = {
//      name: "jonas",
//      job: "teacher",
//      friends: ["Michael", "thiago", "bruno"],
//      age: 46,
//      hasDriverLicence: false,

//      getSummary: function () {
//           return `${this.name} is a ${this.age} years old ${this.job} and he has
//           ${this.hasDriverLicence ? 'a' : 'no'} driver licence.`
//      }
// }
// console.log(`${jonas.name} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
// const idade = "age";
// console.log(jonas[idade])
// console.log(jonas.getSummary())

// const john = {
//      fullName: "John",
//      mass: 98,
//      height: 1.78,
//      calcBMI: function () {
//           this.bmi = this.mass / this.height ** 2;
//           return this.bmi.toFixed(1);
//      }
// }

// const mark = {
//      fullName: "Mark",
//      mass: 68,
//      height: 1.88,
//      calcBMI: function () {
//           this.bmi = this.mass / this.height ** 2;
//           return this.bmi.toFixed(1);
//      }
// }
// john.calcBMI();
// mark.calcBMI();
// console.log(john.bmi, mark.bmi);

// john.bmi > mark.bmi ? console.log(`${john.fullName}'s BMI: (${john.bmi}) is highter than ${mark.fullName}'s BMI: (${mark.bmi})`) :
//      console.log(`${mark.fullName}'s BMI: (${mark.bmi}) is highter than ${john.fullName}'s BMI: (${john.bmi})`)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for(let i = arr.length - 1; i >= 0; i--){
//      console.log(arr[i]);
// }

// let random = 0;
// while (random !== 6) {
//      console.log(random);
//      random = Math.round(Math.random() * 10);
// }

const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * 0.15).toFixed(2) : (bill * 0.20).toFixed(2);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let avarage = 0;

for (let i = 0; i < bills.length; i++) {
     tips.push(calcTip(bills[i]));
     totals.push(Number(tips[i]) + Number(bills[i]));
     console.log(`Conta de: R$${bills[i]}. Gorgeta de R$${tips[i]}, total de R$${totals[i]}`);
     avarage += totals[i];
}
console.log(`Média de R$ ${(avarage / bills.length)}`);