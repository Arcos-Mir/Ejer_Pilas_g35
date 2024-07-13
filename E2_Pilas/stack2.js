/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7 

*/

class Stack2 {
    constructor(newElement, oldElement) {
        this.number = [];
        this.newElement = newElement;
        this.oldElement = oldElement
    }

    add(newArray) {
        this.number.push(newArray);
    }

    show() {
        if(this.number.length == 0) {
            return undefined;
        }
        return this.number[this.number.length -1];
    }

    deleteTop() {
        if(this.number.length == 0) {
            return undefined;
        }
        return this.number.pop();
    }
}

/* let number = 0;
oldElement = 2;
newElement = 7; */

/* function replace(arrayNumbers, newElement, oldElement) {
    
    for(let i = 0; i < number.length; i++) {

        if(stack2.number.length !== oldElement) {
            console.log(oldElement);
            console.log(`El número ${oldElement} no se encuentra en la pila`);
            return undefined;
        }
        return stack2.number.splice(oldElement, newElement);
    }
}

replace(); */


let arrayNumbers = new Stack2(7, 2);

console.log('--------  ELEMENTOS DEL ARREGLO --------');

arrayNumbers.add(3);
console.log(arrayNumbers.show());
arrayNumbers.add(2);
console.log(arrayNumbers.show());
arrayNumbers.add(3);
console.log(arrayNumbers.show());
arrayNumbers.add(4);
console.log(arrayNumbers.show());
arrayNumbers.add(6);
console.log(arrayNumbers.show());
arrayNumbers.add(8);
console.log(arrayNumbers.show());
arrayNumbers.add(1);
console.log(arrayNumbers.show());
arrayNumbers.add(2);
console.log(arrayNumbers.show());
arrayNumbers.add(5);
console.log(arrayNumbers.show());
arrayNumbers.add(5);
console.log(arrayNumbers.show());

console.log(arrayNumbers);