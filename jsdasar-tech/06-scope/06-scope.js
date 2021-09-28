/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

/// - Terdapat dua jenis variabel scope yang ada di JavaScript yaitu Global Variable dan Local Variable
/// >  Local => Variabel yang dideklarasikan di dalam fungsi pada JavaScript.
/// > Global => Semua variabel yang dibuat di luar fungsi disebut variabel global JavaScript.

// Contoh Implementasi Sederhana

const bahagianyadiriku = " Karena kamu" // Global Variabel

function mungkinakufunction(){
	const sepertinyaakulocal = "Benarkah?" // Local Variabel
	return sepertinyaakulocal
}
console.log(mungkinakufunction())


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - console.log menampilkan "Mariah"
/// - karena variabel printFirstName hanya memiliki parameter name, bukan variabel name
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
