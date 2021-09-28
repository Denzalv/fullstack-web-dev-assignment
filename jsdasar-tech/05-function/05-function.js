/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
	if(salary < 5000000){
		salary = salary * 0
		return salary + " ----- dengan Pajak 0% "
	} else if (5000000 <= salary && salary < 10000000 ){ //entah kenapa kalau tidak pakai && hasilnya tidak sesuai
		salary = salary * 0.05
		return salary + " ----- dengan Pajak 5% "
	} else if (10000000 <= salary && salary < 20000000){
		salary = salary * 0.1
		return salary + " ----- dengan Pajak 10% "
	} else if (20000000 <= salary){
		salary = salary * 0.2
		return salary + " ----- dengan Pajak 20% "
	}
		
}
console.log(taxCalc(4500000))
console.log(taxCalc(5000000))
console.log(taxCalc(20000000))




/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight, height) {
	bmi = (weight / (height ** 2)) * 10000
	console.log(bmi)
	 if (18.5 < bmi && bmi < 24.9){
		return  " normal "
	} else if (25 < bmi && bmi < 29.9){
		return  " over weight "
	} else if (30 < bmi && bmi < 34.5){
		return  " obese "
	} else if (35 < bmi){
		return  " extremely obese "
	}else (bmi < 18.5)
		return  " under weight "
}
console.log(checkBMI(80, 170))
console.log(checkBMI(80, 160))



/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
	let j=""
	sentence = sentence.split(" ")
	for (let i = 0 ; i < sentence.length; i++){
	sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substr(1)
	}
	j = sentence.join(" ")
	return j;

}
console.log(convToUpperCase("hello bandung"))
console.log(convToUpperCase("helloworldwide"))



/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
	let arr = [];
	let splitWord = word.split(" ")
	if (splitWord.length > 1){
		return  "kata tidak boleh dipisah"
	} 
	for (let index = 0; index < word.length; index++){
		if(!arr[word[index]]){
			arr[word[index]] = 1
		} else {
			arr[word[index]]++
		}
	}
	for (let index = 0; index < word.length; index++){
		if(arr[word[index]] == 1){
			return word[index]
		}
	}
	return ""
		
}

console.log(firstNonRepeatedChar("hello world"))
console.log(firstNonRepeatedChar("alloha"))
console.log(firstNonRepeatedChar("wooohoowh"))