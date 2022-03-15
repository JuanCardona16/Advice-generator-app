import printData from "./render.js";

const urlApi = 'https://api.adviceslip.com';

const getData = async () => {
  const response = await fetch(`${urlApi}/advice`);
  const data = await response.json();
  printData(data);
};

export default getData;
