//FOR
//var suma = 0;
// for (var i=0 ; i<5 ; i++){
//     suma = suma + i ;
//     console.log('var iteracion',i);
// }
// console.log("car suma: ", suma)

//for (let i = 1; i <=4; i++){
//    console.log(`iteracion ${i}`);
//}
//console.log('Fin.');

// for (let i = 4; i >= 1; i--){ //Aqui se ejecuta como la iteracion anterior AL REVES
//     console.log(`iteracion ${i}`);
// }
// console.log('Fin.');

// for (let i = 1; i <= 4; i++){ //Aqui hay un bucle anidado.
//     console.log(`Empieza iteracion # ${i}`);
//     for (let n = 1; n < 4; n++){
//         console.log(n);
//     }
// }
// console.log('Fin del ciclo.')

/**for se utiliza cuando se sabe la cantidad exacta de pasos que se desean ejecutar; este es el 2do parametro
 * entre los parentesis.*/


//WHILE
// var suma = 0;
// while (suma < 3){
//     suma = suma + 1;
//     console.log(suma);
// }
// //-----------------
// let x = 1;
// while (x <= 10){
//     console.log(`iteracion de ${x}`);
//     x++;
// }
// console.log('Fin de While');

/**while se utiliza cuando no se sabe cuantos pasos se necesitan hasta finalizar la ejecucion.*/

//DO WHILE
let y = 1;
do {
    console.log(`Iteracion # ${y}`);
    y++;
} while( y <=4);