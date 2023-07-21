function fetchJson(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Error fetching JSON: ' + error.message);
    });
}

// Ejemplo de cómo llamar y usar la función fetchJson:
const url = './test.json';

fetchJson(url)
  .then(data => {
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    console.log('Error al obtener los datos:', error);
  });
