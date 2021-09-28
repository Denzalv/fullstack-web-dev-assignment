/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (i=1; i<=100; i++) { //mulai perulangan 1-100
    let bill = 0 //penanda
    for(p=i; p>=1; p=p-1){ 
      if(i%p === 0){
        bill = bill + 1
      }
    }
    if(bill === 2){
      console.log(i)
    }
 }


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 50;
let hasil = 0;

/// EDIT HERE
while (primeCounter <=250) {
	primeCounter++

	let bill = 0;
	for (p = primeCounter; p>= 1 ; p=p-1){
		if(primeCounter % p ===0){
			bill = bill + 1
		}

	}

	if (bill === 2){
		hasil++

		if (hasil === fiftiethPrime){
			console.log(hasil + " Should be " + primeCounter)
		}else {
			console.log(hasil)
		}
	}
}


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 50;
let result = 0;
/// EDIT HERE
do { 
	oddCounter++
	if((oddCounter %2)===1){
		console.log(oddCounter)
		result++

		if(result === fiftiethOdd){
			console.log(result + " Should be " + oddCounter )
		}
	}
} while (oddCounter<100)
