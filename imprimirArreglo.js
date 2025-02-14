let arreglo = []


let tamañoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo ")); 


for(let i = 0 ; i < tamañoArreglo; i++ ){
    
    let valor = parseInt(prompt("Ingrese el valor del arreglo " + i))
    arreglo.unshift(valor)

}



let imprimirArreglo = function(arreglo){
     
    for(let i = 0; i < arreglo.length ; i++){

        console.log(arreglo[i]);
        
    }


}


imprimirArreglo(arreglo)