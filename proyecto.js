//Genera un patron de asteriscos en forma de piramide 


let bucle = function(){

    asteriscos = ""


    for (let i = 1; i <= 10; i++){
        
        asteriscos = " ".repeat(10-i) +  "**".repeat(i) + " ".repeat(10-i) ;
        console.log(asteriscos);
        
    }
    



}    

bucle();