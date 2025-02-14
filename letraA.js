let numeroDeAes = function(texto){
    
    let expresion = /a/gi;
    let cantidad = texto.match(expresion).length;

    return cantidad;
}

let cadena = prompt("Ingresa una palabra");

console.log(numeroDeAes(cadena));
