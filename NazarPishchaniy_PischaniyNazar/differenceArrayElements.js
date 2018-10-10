// Завдання 3
function difference(array1, array2){
    let newArray = [];
    array1.forEach(function(elementArray1){
        if (array2.indexOf(elementArray1) === -1){
            newArray.push(elementArray1);
        }
    })
    return newArray;
}

console.log(difference([1,2,3,4], [7,6,5,4,3]));
console.log(difference([7,6,5,4,3], [1,2,3,4]));