---
title: Mengenal CSS Sprites
author: Aris FM
layout: post
permalink: /archives/2010/10/mengenal-css-sprites.html
categories:
  - Design
tags:
  - css
  - css sprite
---
Dalam [tutorial theme WordPress][1] kemarin, saya menggunakan teknik CSS Sprites untuk membuat efek rollover pada logo blog. Nah, kali ini saya akan menjelaskan tentang CSS Sprites dan penggunaannya.

Konsep CSS Sprites kira-kira seperti ini: 

*   Beberapa gambar yang berbeda digabungkan menjadi satu gambar dengan software pengolah gambar, atau istilahnya membuat gambar master.
*   Gambar master itu ditampilkan dalam beberapa elemen HTML pada suatu halaman web dengan posisi atau ukuran yang berbeda dengan menggeser posisi gambar menggunakan CSS

Untuk lebih jelasnya silakan lihat ilustrasi berikut ini:

<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/ilustrasi-sprite.jpg?fit=500%2C661" alt="ilustrasi-sprites" class="aligncenter size-full wp-image-485" data-recalc-dims="1" />

**Mengapa Menggunakan CSS Sprites?**

Kelebihan utama CSS Sprites adalah mengurangi HTTP Request dari sebuah halaman web. Misalnya saja kita ingin menampilkan 5 buah ikon sosial media di blog kita, anggaplah 1 ikon ukurannya 2 KB, jadi total ukurannya 10 KB. Kemudian 5 ikon itu kita gabungkan dengan photoshop dan ukurannya menjadi 8 KB, ada penghematan 2 KB kan? Dengan menggunakan CSS Sprites selain mengurangi ukuran file juga mengurangi HTTP Request, dari 5 menjadi hanya 1. Bagi situs sekelas Yahoo atau Google yang mempunyai pengunjung ratusan juta, pengurangan sekecil itu adalah sebuah efisiensi yang sangat besar.

Salah satu contoh blog Indonesia yang menggunakan CSS Sprites adalah [Navinot][2]. Di blog ini hampir semua gambar dalam CSS dikombinasikan dalam sebuah gambar master berukuran besar, jumlahnya kurang lebih ada 20! Saya perkirakan nilai efisiensinya mencapai 50%.

<div id="attachment_495" class="wp-caption aligncenter" style="width: 510px">
  <img src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/navinot-sample.jpg?fit=500%2C354" alt="navinot webpage" class="size-full wp-image-495" data-recalc-dims="1" /><p class="wp-caption-text">
    Elemen yang dilingkari menggunakan CSS Sprites
  </p>
</div>

<div id="attachment_496" class="wp-caption aligncenter" style="width: 510px">
  <img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/navinot-sprites.jpg?fit=500%2C268" alt="navinot-sprites" class="size-full wp-image-496" data-recalc-dims="1" /><p class="wp-caption-text">
    Gambar yang digunakan untuk CSS Sprites
  </p>
</div>

**Bagaimana cara menggunakan CSS Sprites?**

Pada prinsipnya CSS Sprites adalah menggeser koordinat X dan Y suatu gambar dengan CSS. Lihat baris kode berikut:

<pre>h1 a {
   background-image:url(images/logo.png);
   background-position:0 0;
   height:86px;
   text-indent:-9999px;
   width:334px;
}
h1 a:hover{background-position:0 86px;}
</pre>

Penjelasannya begini:  
CSS mengatur agar elemen anchor (link) pada h1 menampilkan sebuah gambar (logo.png) dengan koordinat X dan Y masing-masing 0. Kemudian CSS mengatur agar ketika elemen anchor(link) pada h1 di-hover koordinat Y berpindah ke posisi 86px. Jadi CSS Sprites itu sebenarnya cuma memindah-mindah posisi gambar pada suatu elemen.

Anda masih bingung? Jika iya silakan baca-baca tulisan tentang CSS Sprites berikut :

1.  [A List Apart &#8211; CSS Sprites: Image Slicing’s Kiss of Death][3]
2.  [CSS Tricks | CSS Sprites: What They Are, Why They’re Cool, and How To Use Them][4]
3.  [Smashing Magazine | The Mystery Of CSS Sprites: Techniques, Tools And Tutorials][5]

 [1]: http://cekerholic.com/archives/2010/10/konversi-desain-dari-photoshop-ke-theme-wordpress.html
 [2]: http://www.navinot.com/
 [3]: http://www.alistapart.com/articles/sprites
 [4]: http://css-tricks.com/css-sprites/
 [5]: http://www.smashingmagazine.com/2009/04/27/the-mystery-of-css-sprites-techniques-tools-and-tutorials/