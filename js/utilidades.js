function MostrarAviso(){
    alert("Hola!");
    var aviso = confirm("Seleccione una opción por favor!");
    console.log(aviso);
}

function Suma(num1, num2){
    console.log("La suma es:" + (num1 + num2));
    return num1 + num2;
}

let Resta = function (num1, num2){
    console.log("La resta es:" + (num1 - num2));
    return num1 - num2;
}

function obtenerNombre(nombre, apellido1, apellido2){
    if(apellido2 == undefined)
        {
            return `Nombre de la Persona: ${nombre} ${apellido1} * ${Suma(1,2)} * `;
        }  
    
    return `Nombre de la Persona: ${nombre} ${apellido1} ${apellido2} * ${Suma(1,2)} * `;   
}

