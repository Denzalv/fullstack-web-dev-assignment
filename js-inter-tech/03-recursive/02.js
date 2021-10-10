const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    let value = 0;
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            value += sumOfArray(item)
        } else {
            value += item;
        }
    });
    return value / arr.length;
} 

const avg1 = sumOfArray(arr1);
const avg2 = sumOfArray(arr2);
function countAboveAvg( arr, avg ) {
    let hasil = [];
    arr.forEach((value) =>{
        if(value >= avg){
            hasil.push(value);
        }
    })
    return hasil.length;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
