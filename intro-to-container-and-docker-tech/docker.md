# Jawablah pertanyaan di bawah ini:

## 1. Jelaskan apa yang dimaksud dengan container pada docker !
- Unit standar perangkat lunak yang mengemas kode dan semua dependensinya sehingga aplikasi berjalan dengan cepat dan andal dari satu lingkungan komputasi ke lingkungan komputasi lainnya.
## 2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
- _VM_ memakan banyak resource dan waktu utk booting karena melakukan virtualisasi pada host hardware-nya, Sedangkan _container_ kebalikannya dari vm, container melakukan virtualisasi pada host OS-nya

## 3. Apa yang dimaksud dengan docker file ?
- Dokumen teks yang berisi semua perintah yang dapat dipanggil pengguna pada baris perintah untuk merakit gambar.
## 4. Apa yang dimaksud dengan docker registery ?
- Wadah untuk menyimpan Docker image. Docker image akan memberi reaksi sesuai perintah yang diberikan. Misalnya, saat diberi perintah docker push, docker image akan didorong atau dibagikan ke registry Docker Hub.

## 5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
- Bisa dengan cara Meletakkan semua perintah Anda dalam wrapper skrip , lengkap dengan informasi pengujian dan debugging. Jalankan wrapper skrip sebagai CMD Anda.

- Bisa juga dengan  menggunakan kontrol pekerjaan bash untuk memfasilitasi itu.

- Atau memakai Docker compose