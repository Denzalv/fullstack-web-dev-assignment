## Jawablah pertanyaan di bawah ini:

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

## Jawaban:

1. Node js adalah sebuah runtime untuk javascript yang di bangun dengan engine javascript v8 milik google, dan juga node js biasa digunakan untuk menjalankan kode javascript dari sisi server, sedangkan javascript adalah sebuah bahasa pemrograman yang biasanya bekerja pada sisi client untuk membuat konten html dan css menjadi menarik dan lebih interaktif.

2. Node Js Architecture "Single Thread Event Loop:
   <br>a. _Single Thread_
   <br>---> Hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program
   <br>b. _Even Loop_
   <br>---> _event queue_ berguna sebagai penampung ketika ada perintah baru yang akang di eksekusi
   <br>---> _event loop_ akan terus memeriksa sampai semua perintah selesai dieksekusi
   <br>c. _Server side scripting_
   <br>---> Menjalankan javascript dari sisi server

3. Modules di Node JS:
   <br>a._Built in Module_
   <br>---> adalah module default yang sudah tersedia dan siap digunakan dari node js
   <br>b. _External module_
   <br>---> adalah module yang didapat dari suatu komunitas atau organisasi lain dan siap digunakan
   <br>c. _Custom module_
   <br>--- > adalah module yang di buat oleh pribadi

4. Beberapa contoh module di Node js:
   <br> a. _Built in Module_
   <br>---> http, fs, url
   <br> b. _External Module_
   <br>---> sequelize
   <br> c. _Custom Module_
   <br>---> exports.kali = (a,b) => {
   return a \* b;
   };
