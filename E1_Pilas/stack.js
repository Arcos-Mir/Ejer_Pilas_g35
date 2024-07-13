/* Ejercicio 1 Pilas */

/* 1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]. */

console.log('--------  PILAS --------');

class Stack {
    constructor() {
        this.data = [];
    }

    add(newArray) {
        this.data.push(newArray);
    }

    showArray() {
        if(this.data.length == 0) {
            return undefined;
        }
        return this.data[this.data.length -1];
    }
}
let number = 0;
function myFunction(stack, number) {
    number = prompt("Ingresa un número entero");

    if(stack.data.length < parseInt(number)) {
        console.log(number);
        console.log('El número es mayor que la longitud de la pila');
        return undefined;
    }
    return stack.data.slice(0, number);
}

let stackProducts = new Stack();

console.log('--------  ELEMENTOS DEL ARREGLO --------');
stackProducts.add('Manzana');
console.log(stackProducts.showArray());
stackProducts.add('Cebolla');
console.log(stackProducts.showArray());
stackProducts.add('Apio');
console.log(stackProducts.showArray());
stackProducts.add('Naranja');
console.log(stackProducts.showArray());
stackProducts.add('Papaya');
console.log(stackProducts.showArray());
stackProducts.add('Sandía');
console.log(stackProducts.showArray());
stackProducts.add('Melón');
console.log(stackProducts.showArray());

console.log('--------  MOSTRAR CANTIDAD DE ELEMENTOS DEL ARREGLO --------');
console.log(myFunction(stackProducts, number));
console.log(myFunction(stackProducts, number));