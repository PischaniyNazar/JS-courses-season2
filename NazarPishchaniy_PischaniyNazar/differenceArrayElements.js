// Завдання 3
function difference(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr1.splice(i, 1);
                i--;
            }
        }
    }
    return arr1;
}

console.log(difference([1,2,3,4], [7,6,5,4,3]));
console.log(difference([7,6,5,4,3], [1,2,3,4]));