document.writeln('Clase 12');
document.writeln('<br>');
document.writeln(4 + 5);
document.writeln('<br>');
document.writeln(saludo());

function saludo(){
    return "Hola Mundo!";
}

document.writeln('Dimensiones de la pantalla, ancho: ' + screen.width + ' pixeles y alto: ' + screen.height + "pixeles.");

document.writeln('<br>');
document.writeln('Última modificación de la página: ' + window.document.lastModified);

document.writeln('<br>');
window.onload = document.writeln('<img src="../assets/img/ucenfotec.png" alt="Universidad Cenfotec" >');

function escribirTexto(){
    document.getElementById('contenedor').innerHTML = "Escribiendo texto en el contenedor.";
}

// function escribirTextoIngresado(){
//     var texto = document.getElementById("fldTexto").value;
//     document.getElementById('contenedor').innerText = texto;
// }

function escribirTextoIngresado(){
    var texto = document.getElementById("fldTexto").value;
    document.getElementById('contenedor').innerHTML = texto;
}

function mostrarImagen(){
    document.getElementById('contenedor').innerHTML = '<img src="../assets/img/ucenfotec.png" alt="Universidad Cenfotec" >';
}

function agregarTexto(){
    var texto = document.createTextNode(" Esto es un nuevo texto.");
    document.getElementById('contenedorp').appendChild(texto);
}

function agregarElementos(){
    var elemento = document.createElement("span");
    elemento.style.cssText='border:8px solid blue;';
    
    var texto = document.createTextNode(" Elemento hijo.");
    elemento.appendChild(texto);
    
    document.getElementById('contenedorp').appendChild(elemento);
}