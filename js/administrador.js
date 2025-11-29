class Administrador extends Usuario{

    constructor(nombre, correo, edad, autorización){
        super(nombre, correo, edad);
        this.autorización = autorización;
    }

    autorizar(){
        alert("Autorizar: " + this.autorización);
    }

    saludar(){
        console.log("Hola Administrador, " + this.nombre);
    }

}