fetch('https://api.mcsrvstat.us/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));