const form = document.getElementsByTagName("form");
console.log(form);
console.log("Formulario en la posición 0:");
console.log(form[0]);

var nombre = document.getElementById("nombre");
console.log(nombre);

var nombreerror = document.querySelector('#nombre + span.error');
console.log(nombreerror);

// nombre.addEventListener(
// );

// Variable Global
var Errores = false;
var Actualizando = false;

function ValidarFormulario(){

    muestrarOcultarError(nombre, nombreerror);
    muestrarOcultarError(document.getElementById("correo"), document.querySelector('#correo + span.error'));
    muestrarOcultarError(document.getElementById("comentarios"), document.querySelector('#comentarios + span.error'));
    muestrarOcultarError(document.getElementById("telefono"), document.querySelector('#telefono + span.error'));
    muestrarOcultarError(document.getElementById("cantidad"), document.querySelector('#cantidad + span.error'));
    muestrarOcultarError(document.getElementById("password"), document.querySelector('#password + span.error'));
    muestrarOcultarError(document.getElementById("archivo"), document.querySelector('#archivo + span.error'));
    muestrarOcultarError(document.getElementById("unidades"), document.querySelector('#unidades + span.error'));
    muestrarOcultarError(document.getElementById("fecha"), document.querySelector('#fecha + span.error'));

}

document.getElementById("correo").addEventListener('input', function(event){

   muestrarOcultarError(document.getElementById("correo"), document.querySelector('#correo + span.error'));

});

document.getElementById("btnEjecutar").addEventListener('click', function(event){

    //ValidarFormulario();

    let nuevoArreglo = [];

    nuevoArreglo[0] = nombre;
    nuevoArreglo[1] = document.getElementById("correo");

    console.log("Campos correctos:");
    console.log(verificarCampoCorrecto(nuevoArreglo));
    
    alert("Formulario Revisado");

});


form[0].addEventListener('submit', function(event){
    // Evitamos que se envie el formulario cancelando el evento
    event.preventDefault();
    
    Errores = false;

    ValidarFormulario();

    // if(!nombre.validity.valid){
    //     // Mostrar el error en el span
    //     Errores = true;

    //     console.log(nombre.validity.typeMismatch);
    //     console.log(nombre.validity.patternMismatch);

    //     if(nombre.validity.valueMissing)
    //     {
    //         nombreerror.textContent = "Debe introducir la información del campo";
    //     }
    //     else if(nombre.validity.badInput){
    //         nombreerror.textContent = "El campo no cumple con el tipo de campo";
    //     }
    //     else if(nombre.validity.typeMismatch || nombre.validity.patternMismatch){
    //         nombreerror.textContent = "El campo no cumple con el formato";
    //     }
    //     else if(nombre.validity.tooShort){
    //         nombreerror.textContent = "El campo no cumple con la longitud mínima: " + nombre.minLength;
    //     }
    //     else if(nombre.validity.tooLong){
    //         nombreerror.textContent = "El campo no cumple con la longitud máxima: " + nombre.maxLength;
    //     }
    //     else if(nombre.validity.rangeUnderflow){
    //         nombreerror.textContent = "El campo no cumple con el valor mínimo: " + nombre.min;
    //     }
    //     else if(nombre.validity.rangeOverflow){
    //         nombreerror.textContent = "El campo no cumple con el valor máximo: " + nombre.max;
    //     }
    //     else
    //     {
    //         nombreerror.textContent = "El campo no cumple con validación";
    //     }

    // }
    // else{
    //     // Ocultar el error en el span
    //     nombreerror.innerHTML = '';
    // }

    if (Errores)
    {
        alert("Se encontraron errores!");
    }
    else
    {
        alert("Formulario Enviado!");
        console.log("Nombre: " + nombre.value);
        console.log("Correo electrónico: " + document.getElementById("correo").value);
        console.log("Comentarios: " + document.getElementById("comentarios").value);
    }
    

});


// Crear una función que muestra el error de acuerdo con el campo y el campo de erorr (span) que se envíe como parámetro
function muestrarOcultarError(campo, campospan)
{
       if(!campo.validity.valid){
        // Mostrar el error en el span
        Errores = true;

        //console.log(campo.validity.typeMismatch);
        //console.log(campo.validity.patternMismatch);

        if(campo.validity.valueMissing)
        {
            campospan.textContent = "Debe introducir la información del campo";
        }
        else if(campo.validity.badInput){
            campospan.textContent = "El campo no cumple con el tipo de campo";
        }
        else if(campo.validity.typeMismatch || campo.validity.patternMismatch){
            campospan.textContent = "El campo no cumple con el formato";
        }
        else if(campo.validity.tooShort){
            campospan.textContent = "El campo no cumple con la longitud mínima: " + campo.minLength;
        }
        else if(campo.validity.tooLong){
            campospan.textContent = "El campo no cumple con la longitud máxima: " + campo.maxLength;
        }
        else if(campo.validity.rangeUnderflow){
            campospan.textContent = "El campo no cumple con el valor mínimo: " + campo.min;
        }
        else if(campo.validity.rangeOverflow){
            campospan.textContent = "El campo no cumple con el valor máximo: " + campo.max;
        }
        else
        {
            campospan.textContent = "El campo no cumple con validación";
        }

    }
    else{
        // Ocultar el error en el span
        campospan.innerHTML = '';
    }
}


function verificarCampoCorrecto(arreglocampos)
{
    
    for(let i = 0; i < arreglocampos.length; i++)
    {

        if(arreglocampos[i].validity.valid){
            
            return true;
        
        }

    }

    return false;
     
}
