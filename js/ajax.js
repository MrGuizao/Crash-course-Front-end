const input = document.querySelector('input');

const pro = new Promise((resolve, reject) => {
     resolve(document.querySelector('form').addEventListener('submit', e => {
          e.preventDefault();
          // USANDO FETCH
          fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST',
               body: JSON.stringify({
                    title: input.value,
                    body: 'bar',
                    userId: 1
               }),
               headers: {
                    "Content-type": "application/json; charset=UTF-8"
               }
          }).then(res => res.json()).then(data => {
               const li = document.createElement('li');
               li.innerHTML = `${data.id += 1} - Título: ${data.title}`;
               document.querySelector('body').appendChild(li);

          });

          document.querySelector('form').reset();
     })
     )
})



















// method: 'POST',
//      body: JSON.stringify({
//           corpo,
//           corpo2
//      }),
//      headers: {
//           "Content-type": "application/json; charset=UTF-8"
//      }