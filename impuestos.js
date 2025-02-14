let calcularImpuestos = function(edad,ingresos){
     
    let impuestos = 0;
    let impuestosPagar = 0;

     if(edad >= 18 && ingresos >= 1000){
      
        impuestos = ingresos * 0.4;
        impuestosPagar = ingresos + impuestos;
       
        return impuestosPagar;

     }else{

        return 0;
     }


}


let edad = parseInt(prompt("Ingrese la edad"));
let ingresos = parseInt(prompt("Digite el ingreso"));

console.log(calcularImpuestos(edad,ingresos));