let removerCeros = function(numero){
    
    let arregloNuevo = [];
    let x = 0 ;
    for(let i = 0; i< numero.length ; i++){
        
        if(numero[i] != 0 ){ 

        
            arregloNuevo[x] =  numero[i];
            x++;
        }

    }

    for(let y = 0 ; y< arregloNuevo.length ; y++){

        console.log(arregloNuevo[y])
    }
    

}

arreglo = [2,3,4,0];

console.log(removerCeros(arreglo));