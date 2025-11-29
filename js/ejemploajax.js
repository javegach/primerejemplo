// Referencia a los campos del formulario
var código = document.getElementById("id");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var comentarios = document.getElementById("comentarios");
var telefono = document.getElementById("telefono");

// Prueba

async function recuperarDatos() {
  try {

    console.log(location.protocol + '//' + location.host);
    const response = await fetch(location.protocol + '//' + location.host + '/db.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

recuperarDatos();

// let myData;

// // Recuperar Todos los Usuarios
// async function fetchGet() {
//     try {
//         const response = await fetch('http://localhost:3000/usuarios');

//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         console.log("Reponse:", response);
//         const data = await response.json(); // Convierte response a JSON
//         console.log("Reponse Json:", data);
//         myData = data; // Asigna los datos en formato Json a la variable global
//         //console.log("Datos guardados en la variable:", myData);

//          if (myData != undefined) {
//             myData.forEach(item => {
//                 console.log(item.id);
//                 console.log(item.nombre);
//                 console.log(item.correo);
//                 console.log(item.comentarios);
//                 console.log(item.telefono);
//         });
//         }
//     } catch (error) {
//         console.error("Error ejecutando la petición Get:", error);
//     }
// }

// fetchGet();

// // Recuperar un Usuario por Id
// async function fetchGetbyID(id) {
//     try {
//         const response = await fetch('http://localhost:3000/usuarios/' + id);

//         if (response.ok) {
//             const data = await response.json(); // Convierte response a JSON

//             nombre.value = data.nombre;
//             correo.value = data.correo;
//             comentarios.value = data.comentarios;
//             telefono.value = data.telefono;
//         }
//         else {
//             alert("Error: " + response.status);
//         }

//     } catch (error) {
//         console.error("Error ejecutando la petición Get:", error);
//     }
// }

// var btnBuscar = document.getElementById("btnBuscar");

// btnBuscar.addEventListener('click', function (event) {
//     // Evitamos que se envie el formulario cancelando el evento
//     event.preventDefault();

//     fetchGetbyID(código.value);

// });

// código.addEventListener('keyup', function (event) {
//     // Evitamos que se envie el formulario cancelando el evento
//     event.preventDefault();

//     fetchGetbyID(código.value);

// });

// // Registrar nuevo usuario
// async function fetchPost() {
//     try {

//         const usuario = {
//             id: código.value,
//             nombre: nombre.value,
//             correo: correo.value,
//             comentarios: comentarios.value,
//             telefono: telefono.value

//         };
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(usuario),
//         };

//         const response = await fetch('http://localhost:3000/usuarios', options);
//         //const data = await response.json(); // Convierte response a JSON
//         if (response.ok) {            
//             const responseData = await response.json();
//             console.log(responseData);
//         }
//         else {
//             alert("Error: " + response.status);
//         }

//     } catch (error) {
//         console.error("Error ejecutando la petición Get:", error);
//     }
// }

// var btnRegistrar = document.getElementById("btnRegistrar");

// btnRegistrar.addEventListener('click', function (event) {
//     // Evitamos que se envie el formulario cancelando el evento
//     event.preventDefault();

//     fetchPost();

// });

// // Actualizar usuario
// async function fetchPut() {
//     try {

//         const usuario = {
//             id: código.value,
//             nombre: nombre.value,
//             correo: correo.value,
//             comentarios: comentarios.value,
//             telefono: telefono.value

//         };
//         const options = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(usuario),
//         };

//         const response = await fetch('http://localhost:3000/usuarios/' + código.value, options);
//         //const data = await response.json(); // Convierte response a JSON
//         if (response.ok) {
//             const responseData = await response.json();
//             console.log(responseData);
//         }
//         else {
//             alert("Error: " + response.status);
//         }

//     } catch (error) {
//         console.error("Error ejecutando la petición Get:", error);
//     }
// }

// var btnActualizar = document.getElementById("btnActualizar");

// btnActualizar.addEventListener('click', function (event) {
//     // Evitamos que se envie el formulario cancelando el evento
//     event.preventDefault();

//     fetchPut();

// });

// // Eliminar por Id
// async function fetchDeletebyID(id) {
//     try {

//         if (window.confirm("Esta seguro que desea eliminar el elemento?")) {

//         const response = await fetch('http://localhost:3000/usuarios/' + id, {
//             method: 'DELETE'
//         });
//         //const data = await response.json(); // Convierte response a JSON
//         if (response.ok) {
//             código.value = "";
//             nombre.value = "";
//             correo.value = "";
//             comentarios.value = "";
//             telefono.value = "";
//         }
//         else {
//             alert("Error: " + response.status);
//         }

//         }

//     } catch (error) {
//         console.error("Error ejecutando la petición Get:", error);
//     }
// }

// var btnEliminar = document.getElementById("btnEliminar");

// btnEliminar.addEventListener('click', function (event) {
//     // Evitamos que se envie el formulario cancelando el evento
//     event.preventDefault();

//     fetchDeletebyID(código.value);

// });


