//METODO SOME//
let arreglo=["golf", "Futbol", "Natacion", "baloncesto", "boleibol"]
let even = (element) => element == "baloncesto";

console.log(arreglo.some(even));


let arreglo = ["golf", "Futbol", "Natacion", "baloncesto", "boleibol"]
let even = (element) => element.indexOf("sto") != -1;

console.log(arreglo.some(even));


//INVERTIR PALABRAS //
let datos = ["golf", "Futbol", "Natacion", "baloncesto", "boleibol"];
let invertido = datos.map(reverseDatos);
function reverseDatos(str) {
    
    let splitDatos = str.split("");
 
    
    let reverseDatos = splitDatos.reverse(); 
 
    
    let joinDatos = reverseDatos.join(""); 
    
    
    return joinDatos; 
 }
 
 console.log(invertido);
 
