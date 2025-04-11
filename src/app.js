import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const worldWideWeb = "www.";
  const dacom = ".com"
  let pronombre = ['el', 'la',];
  let adjetivo = ['grandioso', 'gran', 'loco', 'mago', 'capo', 'feo'];
  let nombre = ['trotador', 'mapache', 'mapache', 'mapache', 'perro', 'sapo', 'gato'];

  for (let pro = 0; pro < pronombre.length; pro++) {

    for (let adj = 0; adj < adjetivo.length; adj++) {

      for (let nom = 0; nom < nombre.length; nom++) {

console.log(worldWideWeb+pronombre[pro]+adjetivo[adj]+nombre[nom]+dacom)
      }

    }


  }

  console.log("Hello Rigo from the console!");
};
