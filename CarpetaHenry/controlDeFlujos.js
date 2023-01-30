function viajar (destino){
    if (destino === "Brasil"){
        console.log("Gire a la Izquierda");
    } else if (destino === "Argentina"){
        console.log("Gire a la Derecha");
    } else{
        console.log("Tas perdido")
    }
}
viajar ('Brasil');

function puedeManejar (age){
    if (age >= 18){
        console.log("Puede Manejar")
    } else if (age < 18){
        console.log("No puede manejar");
    } else {
        console.log("Dato no valido")
    }
}
puedeManejar ("queso");