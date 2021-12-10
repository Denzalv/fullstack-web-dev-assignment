## Jawablah pertanyaan di bawah ini:

1. Apa perbedaan antara static web server dan dynamic web server?
2. Jelaskan arsitektur static site dan dynamic site
3. Apa saja yang dapat kita buat pada sisi server?
4. Mohon jelaskan apa itu RESTful?
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
6. Apa fungsi dari Response Codes?

## Jawaban:

1. Perbedaan _Static_ dan _Dinamic_ web server:
   <br>
   _Static_ web server mengirimkan file yang dihosting apa adanya ke browser, sedangkan _Dinamic_ web server akan memperbarui file yang dihosting sebelum mengirim konten ke browser melalui server HTTP

2. Arsitektur _Static_ dan _Dynamic_ site:
   <br>
   _Static_ site
   <br>
   ---> Client melakukan HTTP request pada web server, web server menerima request selanjutnya melakukan HTTP response berupa file hard code yang telah ada di server side.
   <br>
   _Dynamic_ site
   <br>
   ---> Client melakukan HTTP request, web server menerima request dari client lalu diproses pada web application serta database, setelah itu web application mengirimkan data kepada web server, selanjutnya web server melakukan HTTP response pada browser client.

3. Apa-apa saja yang dapat kita lakukan di sisi server:
   <br>
   1). Membuat penyimpanan dan pengiriman informasi menjadi lebih efisien
   <br>
   2). Menyesuaikan pengalaman pengguna
   <br>
   3). Mengontrol akses terhadap konten
   <br>
   4). menyimpan informasi sesi
   <br>
   5). Memberikan pemberitahuan dan komunikasi
   <br>
   6). Melakukan analisis data
   <br>

4. REST, atau Representational State Transfer, adalah gaya arsitektur untuk menyediakan standar antara sistem komputer di web, sehingga memudahkan sistem untuk berkomunikasi satu sama lain.

5. HTTP VERB:
   <br>
   1). _GET_
   <br>
   ---> mengambil sumber daya tertentu (berdasarkan id) atau kumpulan sumber daya
   <br>
   2). _POST_
   <br>
   ---> Membuat sumber daya baru
   <br>
   3). _PUT_
   <br>
   ---> Memperbarui sumber daya tertentu (berdasarkan id)
   <br>
   4). _DELETE_
   <br>
   --> Menghapus sumber daya tertentu dengan id
   <br>

6. _Response Code_ berfungsi untuk membantu mengidentifikasikan masalah ketika ada sebuah halaman web atau resource yang tidak termuat atau termuat dengan benar
