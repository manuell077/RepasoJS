let capitalizar = function(cadena){
     
     let cadenaNueva = cadena.toLowerCase();

     let cadenaConMayuscula = cadenaNueva[0].toUpperCase() + cadenaNueva.slice(1);
      
     console.log(cadenaConMayuscula)



}


let palabra = prompt("Ingrese una palabra")
console.log(capitalizar(palabra))