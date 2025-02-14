let multiplicarArreglo = function(arreglo){
   
   let multiplicacion = 1 ; 
    
 
    
   for(let i = 0 ; i < arreglo.length ; i++){
        
        multiplicacion = arreglo[i] * multiplicacion ; 

        

   }
   

   return multiplicacion;


}

let numero = [3,2,2]

console.log(multiplicarArreglo(numero));