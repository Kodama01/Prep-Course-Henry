function Carro(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.info = function(){
        
    }
}

let nuevoCarro = new Carro (2,'Negro','Lamborghini',2020,4)
console.log(nuevoCarro);
console.log(nuevoCarro.color);