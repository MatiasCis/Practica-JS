

class Persona{
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log( this.nombre );
        console.log( 'Metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase= 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;     
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita( ){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quiensoy(){
        console.log( `Soy ${ this.nombre } y mi identidad es ${this.codigo}` )
    }

    miFrase(){
        this.quiensoy(); 
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker', 'SpiderMan', 'jajaja');
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza'
console.log(spiderman.getComidaFavorita)
console.log(spiderman)


console.log( 'Conteo estatico', Persona._conteo );
console.log(Persona.conteo)
console.log(Persona.mensaje())

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna)