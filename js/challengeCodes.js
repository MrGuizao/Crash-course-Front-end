// desafio 001 CRIAR UM TODO LIST
document.querySelector("#challenge001").addEventListener("click", () => {
     let nomes = [];
     nomes.push(document.querySelector('#challenge01').value); //pega o valor digitado no campo nome
     nomes.forEach(el => {
          let createList = document.createElement("li"); //cria um elemento da lista
          document.querySelector(".challenges ul").appendChild(createList).innerHTML = el;

     })
     document.querySelector('#challenge01').value = '';
});

// DESAFFIO 02: FAZER UMA CARTEIRA DIGITAL COM DESPEZAS E LUCROS
