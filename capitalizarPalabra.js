let capitalizarPalabra = function(cadena){
     
    let cadenaNueva = cadena.split(' ');  
     
    let cadenaCapitalizada = [];

    for(let i = 0 ; i<cadenaNueva.length ; i++){
          
         cadenaCapitalizada[i] = cadenaNueva[i].charAt(0).toUpperCase() + cadenaNueva[i].slice(1); 

        

    }
    return cadenaCapitalizada;


}
let palabra = prompt("Ingrese una palabra ");
console.log(capitalizarPalabra(palabra));