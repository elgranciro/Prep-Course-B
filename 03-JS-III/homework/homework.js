// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    let acumulador = 0;
    for (let i = 0; i <=10; i++) {
      acumulador = acumulador + i;
    }
    return acumulador
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  // let pares = [];
  // let indice = 0;

  // while (indice < array.length ){
  //   if (array[indice] % 2 === 0) {
  //     pares.push(array[indice]);
  //   }
  //   indice++;
  // }
  // return pares;

let pares = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2===0){
    pares.push(array[i])
  }
}
return pares;
}



function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map(function (elemento) {
    return Math.pow(elemento, 2)
  })
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  return array.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0)


}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  
  // return num.toString().length;

  let numAString = num + "a";

  return numAString.length -1;



}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
