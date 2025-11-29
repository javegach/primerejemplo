let tarea = {
    titulo: "Realizar una práctica",
    texto: "Práctica sobre JavaScript",
    tiempo: 30,
    aviso: function() { alert("Tiempo de la tarea: " + this.tiempo);},
    finalizado: true
}

console.log("Título de la tarea: " + tarea.titulo);
tarea.aviso();
tarea.tiempo = 40;
tarea.aviso();