//Arreglo

const arreglo = new Array();
arreglo.push(1);

console.log(arreglo);

const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);

console.log(arreglo2);

const arr = [1,2,3,4];

const arr2 = [...arr, 5]; // ... (operador spread) extrae informacion del objeto

const arr3 = arr2.map(function(x){
    return x;
});
// ref: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

console.log('---------');
console.log(arr);
console.log(arr2);
console.log(arr3);