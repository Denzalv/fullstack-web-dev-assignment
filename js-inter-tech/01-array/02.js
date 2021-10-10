const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) { 
    let sum = 0;
    let hasil = [];

    arr.forEach(function(value){
        sum = sum + value;
    })
    let avg = sum/arr.length;
    arr.forEach(function(value){
        if(value > avg){
            hasil.push(value);
        }
    })
    return hasil.length;
 }

console.log(getAverage(arr1))
console.log(getAverage(arr2))
