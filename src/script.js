const callEndpoint = (ddd, callback) => {
  const BASE_URL = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

  fetch(BASE_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro da API: Ihhh deu ruim');
    })
    .then((data) => callback(data))
    .catch((error) => console.error(error.message));
};

const generateResult = ({ cities, state }) => {
  const tableContainer = document.querySelector('#api-result');
  const title = document.querySelector('h1');

  title.innerText = `Cidades do estado ${state} - ${cities.length} cidades`;

  cities.forEach((city) => {
    const line = document.createElement('tr');
    const column = document.createElement('td');

    column.innerText = city;
    line.appendChild(column);
    tableContainer.appendChild(line);
  });
};

const cityCode = 31;

window.onload = () => {
  callEndpoint(cityCode, generateResult);
};
