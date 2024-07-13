/* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 */

class Destiny {
    constructor() {
        this.data = [];
    }
    //Generar los métodos de la clase
    //Método agregar destino
    addDestiny(newDestiny) {
        this.data.push(newDestiny);
    }

    //Método pop para eliminar los elementos del tope de la pila
    deleteTop() {
        if(this.data.length == 0) {
            return undefined;
        }
        return this.data.pop();
    }
    //Método peek para mostrar los elementos previos de la pila
    showDestiny() {
        if(this.data.length == 0) {
            return undefined;
        }
        return this.data[this.data.length -1];
    }
}

let stackDestiny = new Destiny();

console.log('--------  ELEMENTOS DEL ARREGLO --------');
console.log('--------------  RECORRIDO --------------');
console.log('--------------  BUEN VIAJE -------------');
stackDestiny.addDestiny('Pueblo Origen');
console.log(stackDestiny.showDestiny());
stackDestiny.addDestiny('Pueblo 1');
console.log(stackDestiny.showDestiny());
stackDestiny.addDestiny('Pueblo 2');
console.log(stackDestiny.showDestiny());
stackDestiny.addDestiny('Destino');
console.log(stackDestiny.showDestiny());

/* console.log(stackDestiny); *///imprime el arreglo

console.log('---------------  REGRESO ---------------');
console.log('Último lugar visitado');
console.log(stackDestiny.showDestiny());
stackDestiny.deleteTop();

console.log('Lugar visitado previamente');
console.log(stackDestiny.deleteTop());

console.log('Lugar visitado previamente');
console.log(stackDestiny.deleteTop());

console.log('----¡Bienvenido a casa!!! ----');
console.log(stackDestiny.deleteTop());

//si llega a un punto donde no hay lugares previos imprime undefined
/* console.log('Lugar visitado previamente');
console.log(stackDestiny.deleteTop()); */