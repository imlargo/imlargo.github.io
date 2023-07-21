//Definir funcion de carga
function load(path) {
  return fetch(path)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log('Error:', error);
      throw error;
    });
}

console.log("aaa")
//Cargar las variables de cada base de datos
(async () => {
  console.log("Iniciando")
  let testjson = await load('./test.json');
  console.log(testjson);
})();