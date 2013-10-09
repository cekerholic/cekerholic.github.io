---
title: 'WordPress Tips: Memaksimalkan Fungsi functions.php'
author: Aris FM
layout: post
permalink: /archives/2010/10/wordpress-tips-memaksimalkan-fungsi-functions-php.html
categories:
  - Wordpress
tags:
  - functions.php
---
Dalam sebuah theme WordPress umumnya terdapat sebuah file bernama functions.php. File ini fungsinya hampir mirip seperti WordPress plugin, artinya file ini dapat mengaktifkan fitur-fitur WordPress tertentu yang secara *default* belum aktif seperti *post thumbnail, navigation menu, theme widget* dan lain-lain. Untuk lebih lengkapnya silakan lihat [Function Reference][1] di WordPress Codex. Selain mengaktifkan fitur standar WordPress, functions.php bisa juga kita manfaatkan untuk menggantikan fungsi plugin sehingga kita bisa meminimalkan penggunaan plugin di blog WordPress kita.

Berikut beberapa fitur di blog saya yang dijalankan oleh functions.php:

**1. Menonaktifkan fitur *auto-save***  
Saat menulis posting biasanya WordPress akan melakukan* auto-save* draft posting kita. Fitur ini sebenarnya bagus karena kita tidak perlu menyimpan draft posting secara manual dan juga mengurangi risiko posting yang kita tulis hilang karena mati listrik atau koneksi internet putus. Tapi fitur ini juga mengakibatkan database blog kita jadi membengkak, apalagi jika sebuah posting beberapa kali diedit, jadi saya memutuskan untuk mematikannya.

**2. Memodifikasi tampilan komentar**  
Yang saya maksud adalah kode PHP dari daftar komentar, bukan tampilan CSS-nya.

**3. Memfilter komentar dari admin blog (saya)**  
Komentar dari saya di blog ini secara otomatis tidak masuk dalam hitungan jumlah komentar di suatu postingan, tujuannya adalah supaya jumlah komentar yang tampil dalam posting benar-benar komentar dari pengunjung blog.  
Fitur ini sebenarnya saya *copy-paste* dari sebuah plugin bernama [Comment Counts Filter][2] buatan [Ainun Nazieb][3], seorang blogger Indonesia.

**4. Modifikasi tampilan *excerpt* (ringkasan) posting**  
Fitur *Excerpt default* WordPress sangat jelek, semua format HTML otomatis akan hilang dalam sebuah *excerpt* posting. Sebenarnya cukup banyak plugin wordpress yang berfungsi untuk memodifikasi tampilan *excerpt*, tapi saya lebih suka memanfaatkan functions.php.

Masih banyak sekali fungsi-fungsi dari functions.php karena hampir semua plugin WordPress sebenarnya bisa digantikan dengan mengedit functions.php (tentu saja harus disertai dengan pengetahuan PHP yang memadai). Beberapa yang pernah saya coba adalah: menampilkan jumlah *follower* twitter, membatasi jumlah dan ukuran huruf dari widget *tag-cloud*, menampilkan status dari twitter, membuat auto bit.ly short-link dan beberapa fitur lainnya. Mungkin dalam posting-posting selanjutnya saya akan menulis tutorial yang berhubungan dengan functions.php, tunggu aja tanggal mainnya <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_wink.gif?w=604' alt=';)' class='wp-smiley' data-recalc-dims="1" />

 [1]: http://codex.wordpress.org/Function_Reference
 [2]: http://wordpress.org/extend/plugins/comments-count-filter/
 [3]: http://nazieb.com/