const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    let value = 0;
    arr.forEach(function(item) {
        if (Array.isArray(item)) {
            value += sumOfArray(item)
        } else {
            value += item;
        }
    });
    return value;
} 
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));