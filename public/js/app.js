// components
import render from "./components/render.js";
import getData from "./components/request.js";

// variables
const getAdvice = document.getElementById('getAdvice');

// funcion Global
const ShowInfo = async () => {
  try {
    const info = await getData();
    render(info);
  } catch (error) {
    console.log(error);
  };
};

ShowInfo()
getAdvice.onclick = () => ShowInfo();