const gerargif = document.querySelector('#gerargif');
const limpar = document.querySelector('#limpar');
const catgif = document.querySelector('#catgif');
const content = document.querySelector('#content');

// Função para gerar um GIF aleatório
gerargif.addEventListener('click', function() { 
  fetch('https://cataas.com/cat')
    .then(response => {
      const url = response.url;
      catgif.src = url;
    })
    .catch(error => console.error('Erro:', error));

  // Segunda API
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3')
    .then(response => response.json())
    .then(data => {
      let facts = '';
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          facts += data[i].text + '<br>';
        }
      } else {
        facts = data.text;
      }
      content.innerHTML = facts; // Adicionando os fatos ao elemento 'content'
    })
    .catch(error => console.error('Erro:', error));
});

// Função para limpar o GIF e os fatos
limpar.addEventListener('click', () => {
  catgif.src = '';
  content.innerHTML = '';
});
