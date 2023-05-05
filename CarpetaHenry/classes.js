//FUNCION CONSTRUCTORA

// function Carro(puertas, color, marca, año, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//     this.info = function(){
//         console.log('Este es un ' + this.marca + ' de color ' + this.color + ' del año ' + this.año)
//     }
// }

// let nuevoCarro = new Carro (2,'Negro','Lamborghini',2020,4)
// console.log(nuevoCarro);
// console.log(nuevoCarro.color);
// nuevoCarro.info();

//-------------------------------------------------------------------------

//EXPRESION DE CLASE

// class Carro{
//     constructor(puertas, color, marca, año, ruedas){
//      this.puertas = puertas;
//      this.color = color;
//      this.marca = marca;
//      this.año = año;
//      this.ruedas = ruedas;
//     }
//     info(){
//         console.log('Este es un ' + this.marca + ' de color ' + this.color + ' del año ' + this.año + ' con ' + this.puertas + ' puertas y ' + this.ruedas + ' ruedas.')
//     }
// }

// let segundoAuto = new Carro(2,'Negro','Lambo',2016,4);
// console.log(segundoAuto);
// segundoAuto.info();


//GETTERS & SETTERS

class Rectangle {
    constructor (_width,_height){
        this.height = _height;
        this.width = _width;
        this.numOfLogs = 0;
    }
    get area (){        
        this.numOfLogs++;                    //Count times that we call the area
        return this.width * this.height;    //GETTER
    }
    set area(area){                         //SETTER
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}
let rectangleOne = new Rectangle(3,5);    //GETTER
console.log(rectangleOne.area)
rectangleOne.area = 23 , 12;              //SETTER sets the values of height and width in rectangleOne to new ones
console.log(rectangleOne.area);
console.log(rectangleOne.area);
console.log(rectangleOne.area);

console.log(rectangleOne.numOfLogs);



