let cadenaadn = prompt("Por favor ingrese la cadena: ")

const transcribir = (cadenaadn) => {
  let array = cadenaadn.split("");
  console.log(array);

  for (let n = 0; n < array.length; n++) {
    if (array[n] === "G" || array[n] === "g") {
      array[n] = "C";
    } else if (array[n] === "C" || array[n] === "c") {
      array[n] = "G";
    } else if (array[n] === "T" || array[n] === "t") {
      array[n] = "A";
    } else if (array[n] === "A" || array[n] === "a") {
      array[n] = "U";
    }
  }
 
  return array.join("");
}

let res = transcribir(cadenaadn);

console.log("CADENA ADN: " + cadenaadn);
console.log("CADENA ARN: "+res);