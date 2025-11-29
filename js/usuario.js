class Usuario{

    constructor(nombre, correo, edad)
    {
        this.nombre = nombre;
        this.correo = correo;

        if(edad != undefined)
        {
            this.edad = edad;
        }

    }

    saludar(){
        console.log("Hola, " + this.nombre);
    }

    devuelvaañonacimiento(año_actual){
        
        if(this.edad == undefined)
        {
            return "No se ha definido la edad";
        }
        
        return año_actual - this.edad;
    }
}
