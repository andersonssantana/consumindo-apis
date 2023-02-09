const callEndpoint = (ddd, callback) => {
  const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
  fetch(url)
    .then((request) => {
      if (request.ok) {
        return request.json();
      }
      throw new Error('ihhhh deu ruim');
    })
    .then((data) => callback(data))
    .catch((error) => console.error(error.message));
};

const generateResult = ({ state, cities }) => {
  const listContainer = document.querySelector('#api-result');
  const title = document.querySelector('h1');
  title.innerText = `Cidades do ${state} - ${cities.length} cidades`;
  cities.forEach((el) => {
    const line = document.createElement('tr');
    const column = document.createElement('td');
    column.innerText = el;
    line.appendChild(column);
    listContainer.appendChild(line);
  });
};

const cityCode = 15;

window.onload = () => {
  callEndpoint(cityCode, generateResult);
};
