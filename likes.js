let valorIngresado = prompt("Ingrese un valor para convertirlo a miles o millones")



let likes = function(valor){
     let cadena = ""

    if(valor <= 999999 && valor >=1000){
       
       

             if(valor >= 1000 && valor <= 9999){
                  
                valor = valor[0]
                
             }else if(valor >= 10000 && valor <= 99999 ){
               
                valor = valor[0] + valor[1]
                
             }else if(valor >= 100000 && valor <= 999999 ){
                
                valor = valor[0] + valor[1] + valor[2]
             }

       
        

       cadena = valor + "k"
       

       
    }else if(valor >= 1000000){
        
        

        if(valor >= 1000000 && valor <= 9999999){
                  
            valor = valor[0]
            
         }else if(valor >= 10000000 && valor <= 99999999 ){
           
            valor = valor[0] + valor[1]
            
         }else if(valor >= 100000000 && valor <= 999999999 ){
            
            valor = valor[0] + valor[1] + valor[2]
         }

         cadena = valor + "m"

    }else{
        cadena = valor
    }

    return cadena


}


console.log(likes(valorIngresado))