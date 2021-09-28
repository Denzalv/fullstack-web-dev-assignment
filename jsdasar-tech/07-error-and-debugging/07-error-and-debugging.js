/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Apabila telah terjadi kesalahan type
/// - Apabila referensi ilegal telah terjadi
/// - Apabila telah terjadi angka "diluar jangkauan"
/// - Apabila telah terjadi kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - Terjadi Error
/// - Reference Error
/// - Variable "salaryWithConst" tidak bisa diakses sebelum diinisialisasi
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
