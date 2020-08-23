compu = () => console.log('um novo teste');

const promessa = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve(console.log('object'))
     }, 2000);
     setTimeout(() => {
          reject('EROUUUUUUU');
     }, 2000)
});

promessa.then(result => result);
promessa.catch(result => console.log(result));

const juro = new Promise((resolve, reject) => {
     resolve(25 * 2)
})
juro.then(console.log);


nova = (a = 3, b = 5, c = 6) => {
     return {
          a, 
          b, 
          c
     }
}
console.log(nova(20, 40, 50))
const rand = Math.round(Math.random() * 10) + 1
tempo = () => {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               if (rand >= 5) {
                    resolve('maior que 5')
               } else {
                    reject('menor que 5')
               }
          }, 1000);

     }).then((n) => console.log(`numero: ${rand}: é maior que 5`)).catch((n) => console.log(`numero: ${rand}: é menor que 5`))
}
tempo();


// async
time = (tempo = 1000, inc = 1) => {
     setTimeout(() => {
          console.log(`async sendo chamado: ${inc}`);
     }, tempo)
     return inc;
}

demora = async () => {
     let num = 5;
     await time();
     await time(2000, 5);
     await time(1000, 3);
}

demora() 
