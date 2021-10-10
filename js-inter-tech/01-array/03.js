const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

let newArr = []

function searchInArray(arr, num) {
    arr.forEach(function(value) {
        value.forEach(function(val){
            newArr.push(val);
        })
    })
    if (newArr.indexOf(num) == -1) {
        return null;
    } else {
        return newArr.indexOf(num);
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));