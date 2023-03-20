// 'use strict'
// // 6) Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
// // área do retângulo. 
// // calcArea = (base = 12, alt = 2) => base * alt;
// // document.querySelector("#button").addEventListener("click", () => {
// //      let altura = document.querySelector("#get1").value;
// //      let base = document.querySelector("#get2").value;
// //      console.log(altura, base);
// //      alert("dimensão: " + (altura * base))
// // });
// // calcArea()
// // console.log(calcArea());

// // 7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// // dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
// calcIdade = (dia = 1, ano = 12, mes = 8) => console.log("Resultado em dias: " + (ano * 365) + (mes * 30) + dia);
// // calcIdade()

// // 8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// // brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// // de eleitores. 

// calcEleitor = (total = 32000, nulo = 7000, branco = 3002) => {
//      let valido = total - (nulo + branco);
//      console.log(`validos: ${valido} - total: ${total} - nulo: ${(nulo * 100 / total).toFixed(1)}% - branco: ${(branco * 100 / total).toFixed(1)}%`);
// }
// // calcEleitor()

// // 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// // Calcular e escrever o valor do novo salário. 
// calcSalario = (salario = 4500, reajuste = 12) => {
//      let aumento = reajuste * (salario / 100);
//      console.log("Novo valor: " + (aumento + salario));
// }
// // calcSalario()

// // 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// // distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
// // seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// // calcular e escrever o custo final ao consumidor.
calcCarro = (fabrica = 36.560) => {
     let roubo = 45, distribuidor = 28;
     let total = (fabrica * roubo / 100) + (fabrica * distribuidor / 100);
     console.log("Cu: " + (total + fabrica));
}
// // calcCarro()

// // 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// // mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// // efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// // vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// // vendedor.
// calcRevenda = () => {
//      let salario = 1300, comissao = 300, vendas = 6;
//      let total = salario + (comissao * vendas)
//      console.log("salario total: " + (total))
// }
// calcRevenda()



// DEPOIS DO ES6
// DEPOIS DO ES6
// DEPOIS DO ES6
// DEPOIS DO ES6


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const item of num) console.log(item);

for (let i = 0; i <= 10; i++) {
     console.log(i);
}
const nome = "Monalisa";
const objeto = {
     nome,
     idade: 27,
     acao() {
          console.log('Lisa');
     }
}
console.log(objeto.nome);

const string = "helcome to guilherme 1, guilherme 1";
console.log(string.replace("guilherme", "TESTE"));