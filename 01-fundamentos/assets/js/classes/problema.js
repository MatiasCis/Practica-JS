


const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad }`);
    }
}
    
function Persona(nombre, edad){
    console.log('Se ejecuto esta línea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad }`);
    }
}
const maria = new Persona('María', 18);
console.log(maria)
maria.imprimir();