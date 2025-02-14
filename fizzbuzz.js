

let fizzBuzz = function(entero){
   let cadena = "";

   if(numero % 3 == 0 && numero % 5 != 0){
     
    cadena = "fizz";
    return cadena;
   }else if(numero % 5 == 0  && numero % 3 != 0){
       cadena = "buzz";
       return cadena;
  
   }else if(numero % 3 == 0 && numero % 5 == 0){
      
         cadena = "fizzbuzz";
         return cadena;

   }else{
       return entero;
   }




}
let numero = parseInt(prompt("Ingrese un numero entero"));



console.log(fizzBuzz(numero));