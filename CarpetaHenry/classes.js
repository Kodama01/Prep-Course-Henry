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


//GETTERS & SETTERS (DEPRECATED)

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
    }                                                               //(GETTERS AND SETTERS) Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.
}
let rectangleOne = new Rectangle(3,5);    //GETTER
console.log(rectangleOne.area)
rectangleOne.area = 23 , 12;              //SETTER sets the values of height and width in rectangleOne to new ones
console.log(rectangleOne.area);
console.log(rectangleOne.area);
console.log(rectangleOne.area);

console.log(rectangleOne.numOfLogs);


//STATIC METHODS
class Square {
    constructor(_width){
        this.width = _width;
        this.height = _width;
    }
    static equals (a , b){                                      
        return (a.width * a.height === b.width * b.height)      
    }
    static validSquareDimensions (width,height){
        return width === height;
    }
}

let square1 = new Square(4);
let square2 = new Square(4)
console.log(square1);
console.log(Square.equals(square1,square2));
console.log(Square.validSquareDimensions(8,7));

//INHERITANCE & EXTENDS


//Parent class
class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
}

//Child class

class Programmer extends Person {                           //Now a Programmer can be interpreted as a special kind of person or a sub class
    constructor (_name,_age,_yearsOfExperience){
        super(_name,_age);                                  //"super" keyword calls the constructor from the parent class "person"
        //Custom Behaviour 
        this.yearsOfExperience = _yearsOfExperience;
    }
    code(){
        console.log(this.name + ' is coding')
    }
}

let programmers  = [
    new Programmer('Dominic',45,12),
    new Programmer('Oconor',36,9),
    new Programmer('David',39,5)
]

function developSoftware(programmers){
    //Develop software
    for(let prog of programmers){
        prog.code();
    }
}
developSoftware(programmers);

//POLYMORPHISM

class Animal{
    constructor(_name){
        this.name = _name;
    }
    makeSounds(){
        console.log('Generic Animal Sound')
    }
}

class Dog extends Animal{
    constructor(_name){
        super(_name)
    }
    makeSounds(){
        super.makeSounds();
        console.log('Woof woof bitch')
    }
}

let a1 = new Animal('Bull')
let a2 = new Dog('Greyhound')
a1.makeSounds();
a2.makeSounds();