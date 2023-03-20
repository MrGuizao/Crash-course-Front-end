// Faça um programa que peça dois números e verifique (usando if e else) e imprima o maior deles  
maiorNumero = (a = 23, b = 10) => {
     console.log((a >= b ? `Maior: ${a}` : `Maior: ${b}`));
}
// maiorNumero()

// Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo 
negOuPos = (n1 = 23) => {
     return console.log((n1 >= 0) ? `Numero é positivo: ${n1}` : `Numero é negativo: ${n1}`);
}
// negOuPos()

// Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;  
function maiorDosTres(n1, n2, n3) {
     if (n1 >= n2 && n1 > n3) {
          return console.log(n1);
     }
     if (n2 >= n1 && n2 > n3) {
          return console.log(n2);
     }
     if (n3 >= n2 && n3 > n1) {
          return console.log(n3);
     }
}
// maiorDosTres(12, 11, 10)

// Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;  
function maiorMenor(n1, n2, n3) {
     let maior, menor;
     if (n1 > n2 && n1 > n3) {
          maior = n1;
     }
     else if (n2 > n1 && n2 > n3) {
          maior = n2;
     }
     else if (n3 > n2 && n3 > n1) {
          maior = n3;
     }
     if (n1 < n2 && n1 < n3) {
          menor = n1;
     }
     else if (n2 < n1 && n2 < n3) {
          menor = n2;
     }
     else if (n3 < n2 && n3 < n1) {
          menor = n3;
     }
     console.log(`Maior: ${maior} | Menor: ${menor}`);
}
// maiorMenor(42, 458, 12)

// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.
function souRico(n1 = 2.300, n2 = 1245.00, n3 = 12.40) {
     let maior;
     if (n1 > n2 || n1 > n3) {
          maior = n1;
     }
     else if (n2 > n1 || n2 > n3) {
          maior = n2;
     }
     else if (n3 > n1 || n3 > n2) {
          maior = n3;
     }
     console.log("Você deve comprar o produto de R$" + maior);
}
// souRico()

// Faça um programa que leia três números e mostre-os em ordem decrescente.
function decrescente(n1, n2, n3) {
     if (n1 > n2 && n1 > n3 && n3 < n1 && n3 < n2) {
          console.log(object);
     }
     else if (n2 > n1 && n2 > n3) {
          maior = n2;
     }
     else if (n3 > n2 && n3 > n1) {
          maior = n3;
     }
     if (n1 < n2 && n1 < n3) {
          menor = n1;
     }
     else if (n2 < n1 && n2 < n3) {
          menor = n2;
     }
     else if (n3 < n2 && n3 < n1) {
          menor = n3;
     }
     console.log("A ordem decrescente é " + maior + meio + menor);
}

function aluno(n1, n2) {
     let media = (n1 + n2) / 2;
     if (media >= 9 && media <= 10) {
          console.log(media + ": A - Aprovado");
     }
     else if (media >= 7.5 && media <= 9) {
          console.log(media + ": B - Aprovado");
     }
     else if (media >= 6 && media <= 7.5) {
          console.log(media + ": C - Aprovado");
     }
     else if (media >= 4 && media <= 6) {
          console.log(media + ": D - Reprovado");
     }
     else if (media <= 4) {
          console.log(media + ": E - Reprovado");
     }
}
// aluno(7.3, 8.5);

function parImpar(num){
     return console.log((num % 2 === 0) ? `Par` : `Impar`);
}
// parImpar(247);

