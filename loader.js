function load(path) {
  return fetch(path)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log('Error:', error);
      throw error;
    });
}


(async () => {
  let testjson = await load('./test.json');
  console.log(testjson);
})();