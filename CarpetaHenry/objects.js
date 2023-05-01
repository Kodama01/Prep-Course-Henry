var deportes = {
                conPelota:['Football','Basketball','Golf'] ,  
                sinPelota:['Boxeo','Natacion','BMX']
                };

var persona = {
                nombre:'Manuel Tenorio',
                edad: 18,
                estudios: {esProgramador : true}
}

console.log(persona.estudios);

persona.estudios = false;
delete persona.nombre
console.log(persona);

var funciones = {
    Frase: function(){
        console.log('Kheso con bocadillo')}
    };
funciones.Frase();