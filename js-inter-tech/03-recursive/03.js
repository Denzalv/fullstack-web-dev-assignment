const arr = [1, 2, 3, 4, 5];
function searchInArray( arr,num ) { 
    (arr.indexOf(num) === -1) ?
     console.log("Angka Tidak Di temukan") :
     console.log("Angka ditemukan pada index : " + arr.indexOf(num))
}
searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);
