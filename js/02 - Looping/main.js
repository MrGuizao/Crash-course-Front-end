// WHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILE
// WHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILE
// WHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILEWHILE - WHILE
// 1- Faça um programa que receba um número e que calcule e mostre a tabuada desse número.
rep01 = n => {
     let num = 0;
     while (num <= 10) {
          console.log(`${n} X ${num} = ${n * num}`);
          num += 1;
     }
}
// rep01(12)

// 2- Faça um programa que verifique e mostre os números entre 1.000 e 2.000 (inclusive) que, quando divididos por 5 produzam resto igual a 2.
rep2 = (n = 1000) => {
     while (n <= 2000) {
          if(n % 5 === 2){
               console.log(n);
          }
          n += 1;
     }
}
// rep2()

rep03 = () => {
     let teste = window.prompt("lados do qudrado");
     let soma = (teste * 4) / 2;
     window.alert("a soma é de " + soma)
}
// rep03()

repetition04 = () => {
     
}
