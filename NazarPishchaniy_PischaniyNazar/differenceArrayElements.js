// Завдання 3
function difference(arr1, arr2){
    let newArray = [];
    arr1.forEach(function(elementArr1){
        if (arr2.indexOf(elementArr1) === -1){
            newArray.push(elementArr1);
        }
    })
    return newArray;
}

console.log(difference([1,2,3,4], [7,6,5,4,3]));
console.log(difference([7,6,5,4,3], [1,2,3,4]));