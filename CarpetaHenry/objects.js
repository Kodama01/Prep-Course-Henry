var deportes = {
    conPelota: ['Football', 'Basketball', 'Golf'],
    sinPelota: ['Boxeo', 'Natacion', 'BMX']
};

var persona = {
    nombre: 'Manuel Tenorio',
    edad: 18,
    estudios: { esProgramador: true }
}

console.log(persona.estudios);

persona.estudios = false;
delete persona.nombre
console.log(persona);

var funciones = {
    Frase: function () {
        console.log('Kheso con bocadillo')
    }
};
funciones.Frase();

var Ropa = { Torso: ['Hoodie', 'Camiseta', 'Cadena'], Piernas: ['Boxers', 'Jeans'] };

console.log(Ropa)

Ropa['Cabeza'] = ['Lentes de Sol', 'Gorra'];

console.log(Ropa)
//Bracket y Dot notation en funciones externas.

var comidas = {};
var diferenciaNotacion = function (p1, p2) {
    comidas.p1 = ['Frutas', 'Vegetales'];
    comidas[p2] = ['Amvorgesa', 'Pizza'];
};

diferenciaNotacion('Wacala', 'Riko');
console.log(comidas);

//Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. 
//Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

//Metodos

//hasOwnProperty retorna booleano al verificar si existe o no una propiedad dentro del objeto.
var Libro = { Nombre: '1984', Genero: 'Actualidad', Año: 1992 };
var contiene = Libro.hasOwnProperty('Autor');
var contiene2 = Libro.hasOwnProperty('Año');
console.log(contiene, contiene2);


//Keys retorna un arreglo con todas las propiedades del objeto llamado.
var allProperties = Object.keys(Libro);
console.log(allProperties);

//for in se usa para recorrer las propiedades de un objeto. Es el equivalente a for para los arrays.
var Casa = { Habitaciones: 3, Baños: 2, Sala: 1, Comedor: 1 };
for (i in Casa) {
    console.log('Esta es la seccion: ' + i);
    console.log('Esta es la cantidad en que tiene mi casa: ' + Casa[i])
}

//this se utiliza para llamar el valor de una propiedad especifica del objeto.
let datosMascota = { animal: 'Gato', raza: 'Calico', color: 'Negro y Blanco', amigable: true, dueño: 'Manuel Tenorio', nombre: 'Haru',
    info: function(){
        console.log('Mi ' + this.animal + ' es de color ' + this.color + '.' + ' Su nombre es ' + this.nombre);
    }
}
datosMascota.info();


