// 1. Apa itu synchronous?
/* --> Synchronous adalah sebuah operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan alias berurutan.
 */
// 2. Apa itu asynchronous?
/*--> Asynchronous tidak perlu menunggu operasi sebelumnya selesai untuk mengeksekusi operasi setelahnya.
 */
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/* --> Bisa 
*/
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/* --> 
	first log:  1
	first log:  2
	first log:  3
	first log:  4
	first log:  5
	second log:  6
	second log:  6
	second log:  6
	second log:  6
	second log:  6
*/
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/*-->
di awal i di  loop menghasilkan 1-5, setelah itu ditambahkan setTime untuk menambah delay dan yang keluar ketika i di 
console log adalah 6 sebanyak 5 kali.

untuk first log mengapa tidak sama dengan secondlog adalah karena perulangan sudah selesai sebelum delay berjalan.
*/
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  let a = i
  setTimeout(() =>
  console.log("second log: ", a), 100); // 02 - Kedua
}
/* -- Hasil --- 
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  1
second log:  2
second log:  3
second log:  4
second log:  5
*/
