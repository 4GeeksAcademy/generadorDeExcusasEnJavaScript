/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let excuse = generateExcuse();
  document.querySelector("#la-excusa").innerHTML = excuse;
};

let generateExcuse = () => {
  let who = [
    "El gato del vecino",
    "Mi jefe",
    "El cartero",
    "Mi loro",
    "Una araña"
  ];
  let action = [
    "se comió",
    "se tropezó",
    "aplastó",
    "accidentalmente quebró",
    "resbaló"
  ];
  let what = ["mi merienda", "mi teléfono", "el zapato"];
  let when = [
    "mientras salía de casa",
    "cuando iba en camino hacia allá",
    "mientras estaba en el gimnasio",
    "durante mi descanso",
    "mientras estaba en una reunión"
  ];
  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
