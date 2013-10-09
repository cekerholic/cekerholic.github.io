---
title: Konversi Desain dari Photoshop ke Theme WordPress
author: Aris FM
layout: post
permalink: /archives/2010/10/konversi-desain-dari-photoshop-ke-theme-wordpress.html
categories:
  - Design
  - Wordpress
tags:
  - elegant
  - freebies
  - html/css
  - theme
  - tutorial
---
Tutorial ini adalah kelanjutan dari 2 tutorial sebelumnya di situs Desain Digital, yaitu [Mendesain Blog Elegan dengan Photoshop][1] dan dilanjutkan dengan [memotong PSD atau slicing][2]. Di tutorial ini kita akan mengubah hasil desain menjadi theme WordPress. Kita akan berkenalan dengan HTML5 dan beberapa efek CSS3 seperti box shadow, text shadow, dan rounded corner.

### Preview

Di bawah adalah hasil akhir tutorial. Sedikit berbeda dengan mockup PSD awal karena ada penambahan widget di bagian footer. Klik gambar untuk melihat live demo-nya.

[<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-1.jpg?w=604" data-recalc-dims="1" />][3]

<!--more-->

### Resource dan alat yang dibutuhkan

*   File hasil tutorial slicing minggu lalu, bisa diunduh [di sini][4].
*   Editor teks seperti [Notepad++][5] (Windows) atau [Gedit][6] (Linux).
*   [WordPress Codex][7], sebagai sumber referensi segala sesuatu tentang WordPress.
*   Tutorial dan pengenalan dasar-dasar pembuatan theme WordPress dari [WP Designer][8].
*   [XAMPP][9] untuk membuat lokal server dan menjalankan WordPress di PC. Tutorial XAMP bisa dilihat [di sini][10].
*   [WP Theme Test Data][11], sebuah dummy post resmi dari WordPress, digunakan untuk mengetes theme. Masukkan Test Data melalui dashboard WP &ndash;> Tools &ndash;> Import dan pilih Import from WordPress.
*   [Firefox][12]/[Safari][13]/[Chrome][14] + [Firebug][15] (opsional) untuk melakukan live preview dan mengecek elemen HTML/CSS. Pengguna Opera bisa menggunakan widget Opera [Dragonfly][16].

### Memahami Struktur Theme WordPress

Sebuah theme WordPress terdiri dari beberapa file PHP yang terpisah. Tetapi sebuah theme WordPress paling tidak harus mempunyai 2 buah file yaitu index.php dan style.css. Index.php digunakan untuk menampilkan halaman sebuah blog WordPress, sedangkan style.css untuk mengatur tampilannya.

Berikut daftar file yang akan kita buat dalam tutorial ini:

1.  style.css sebagai pengatur tampilan blog.
2.  header.php untuk menampilkan header blog memasukkan informasi dasar halaman blog (doctype, charset, judul blog, memanggil eksternal file CSS, dan tag-tag PHP dasar WordPress).
3.  index.php untuk menampilkan halaman muka blog (dalam index.php kita panggil header.php, sidebar.php dan footer.php sehingga menjadi sebuah halaman lengkap).
4.  sidebar.php untuk menampilkan sidebar blog.
5.  footer.php untuk menampilkan footer blog.
6.  single.php menampilkan halaman posting blog.
7.  comments.php untuk menampilkan komentar dan form komentar di sebuah posting atau halaman.
8.  page.php menampilkan halaman blog seperti halaman kontak, keterangan penulis dll.
9.  functions.php untuk membuat berbagai fungsi PHP WordPress.
10. reset.css mengatur tag-tag HTML standar yang belum diatur oleh style.css. Bisa diunduh [di sini][17].
11. screenshots.png menampilkan preview dari theme.

### Persiapan

Buat folder di directory theme WordPress dan beri nama Elegant-Design. Kumpulkan gambar hasil slicing ke dalam folder bernama images dan masukkan ke folder Elegant-Design. Buatlah terlebih dahulu informasi desain kita dalam style.css

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/*
Theme Name: Elegant Design
Theme URI: http://cekerholic.com
Description: Elegant Design for Wordpress Blog
Version: 1.0
Author: Mohammad Jeprie & Aris FM
Author URI: http://www.desaindigital.com
*/</span></pre>
      </td>
    </tr>
  </table>
</div>

Buat juga pengaturan beberapa tag HTML dasar yang sering dipakai dalam halaman web seperti paragraf, daftar (*list*), *emphasis* (huruf bercetak miring), *bold* (huruf tebal), gambar, tautan, dan lain-lainnya. WordPress juga memiliki kode CSS standar yang akan kita masukkan ke style.css

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Basic Styles
----------------------------- */</span>
body <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#fff</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/bg.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #933;">13.5px</span>/<span style="color: #cc66cc;">1.5</span> Helvetica<span style="color: #00AA00;">,</span>Arial<span style="color: #00AA00;">,</span><span style="color: #993333;">sans-serif</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">min-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1024px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #808080; font-style: italic;">/* Link */</span>
   a <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#1A9CD8</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">outline</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   a<span style="color: #3333ff;">:active</span><span style="color: #00AA00;">,</span>a<span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span>a<span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">underline</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #808080; font-style: italic;">/* Heading */</span>
   h1<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h2<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">24px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h3<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">16px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h4<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">14px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h5<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">13px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h6<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">12px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   h7<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">11px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #808080; font-style: italic;">/* Basic HTML Tags */</span>
   <span style="color: #00AA00;">*</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   img<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">&#125;</span>
   strong<span style="color: #00AA00;">,</span> b <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-weight</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">bold</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   em<span style="color: #00AA00;">,</span> i <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-style</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">italic</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   p <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   small <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">85%</span><span style="color: #00AA00;">&#125;</span>
   ins<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">&#125;</span>
   dl <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">15px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   dt <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-weight</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">bold</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   sup <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #993333;">smaller</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #993333;">normal</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">vertical-align</span><span style="color: #00AA00;">:</span><span style="color: #993333;">super</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   sub <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #993333;">smaller</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #993333;">normal</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">vertical-align</span><span style="color: #00AA00;">:</span>sub<span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   dd <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span>
   <span style="color: #00AA00;">&#125;</span>
   blockquote <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000;">"images/block.png"</span><span style="color: #00AA00;">&#41;</span> <span style="color: #993333;">no-repeat</span> <span style="color: #993333;">transparent</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   ul <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">outside</span> <span style="color: #993333;">disc</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span>
   <span style="color: #00AA00;">&#125;</span>
   ol <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">outside</span> <span style="color: #993333;">decimal</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span>
   <span style="color: #00AA00;">&#125;</span>
   ol ol<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">upper-alpha</span><span style="color: #00AA00;">&#125;</span>
   ol ol ol<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">lower-roman</span><span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #808080; font-style: italic;">/* HTML5 Elements */</span>
   article<span style="color: #00AA00;">,</span>aside<span style="color: #00AA00;">,</span>footer<span style="color: #00AA00;">,</span>header<span style="color: #00AA00;">,</span>nav<span style="color: #00AA00;">,</span>section<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* ------------------------------
Common Class & Wordpress Default CSS
----------------------------- */</span>
<span style="color: #6666ff;">.hide</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.aligncenter</span><span style="color: #00AA00;">,</span> div<span style="color: #6666ff;">.aligncenter</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.alignleft</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.alignright</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #6666ff;">.wp-caption</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background-color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#f3f3f3</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span> <span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#ddd</span><span style="color: #00AA00;">;</span>
   -khtml-border-radius<span style="color: #00AA00;">:</span> <span style="color: #933;">3px</span><span style="color: #00AA00;">;</span>
   -moz-border-radius<span style="color: #00AA00;">:</span> <span style="color: #933;">3px</span><span style="color: #00AA00;">;</span>
   -webkit-border-radius<span style="color: #00AA00;">:</span> <span style="color: #933;">3px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span> <span style="color: #933;">3px</span><span style="color: #00AA00;">;</span> <span style="color: #808080; font-style: italic;">/* optional rounded corners for browsers that support it */</span>
&nbsp;
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding-top</span><span style="color: #00AA00;">:</span> <span style="color: #933;">4px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">center</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.wp-caption</span> img <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> <span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.wp-caption</span> p<span style="color: #6666ff;">.wp-caption-text</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">11px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span> <span style="color: #933;">17px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">4px</span> <span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.sticky</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000;">"images/featured.png"</span><span style="color: #00AA00;">&#41;</span> <span style="color: #993333;">no-repeat</span> <span style="color: #993333;">scroll</span> <span style="color: #000000; font-weight: bold;">left</span> <span style="color: #000000; font-weight: bold;">top</span> <span style="color: #993333;">transparent</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">71px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">:</span><span style="color: #933;">-23px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span><span style="color: #933;">-23px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">71px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Membuat header.php

File header.php berisi tentang informasi dasar blog (DOCTYPE, charset, judul, pengkodean karakter dll), memanggil eksternal CSS, page navigation menu, logo blog, widget sosial media, dan category navigation. Di header.php juga terdapat kode PHP WordPress yang berfungsi untuk mengaktifkan plugin yaitu `wp_head()`. Berikut kode lengkap header.php beserta penjelasannya:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">&lt;!DOCTYPE html&gt;&lt;!-- DOCTYPE blog--&gt;
&lt;html lang="id"&gt;&lt;!--Mendefinisikan bahasa yang digunakan blog--&gt;
&nbsp;
&lt;head&gt;&lt;!--Informasi dasar halaman --&gt;
    &lt;meta charset="utf-8" /&gt;&lt;!-- pengkodean karakter--&gt;
&nbsp;
   &lt;!-- Judul blog --&gt;
    &lt;title&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>is_home<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">elseif</span> <span style="color: #009900;">&#40;</span>is_category<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> __<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Category &raquo; '</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'blank'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> wp_title<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' | '</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">TRUE</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'right'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">elseif</span> <span style="color: #009900;">&#40;</span>is_tag<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> __<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Tag &raquo; '</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'blank'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> wp_title<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' | '</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">TRUE</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'right'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">elseif</span> <span style="color: #009900;">&#40;</span>is_search<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> __<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Search results &raquo; '</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'blank'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #b1b100;">echo</span> the_search_query<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">' | '</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">elseif</span> <span style="color: #009900;">&#40;</span>is_404<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'404 '</span><span style="color: #339933;">;</span> wp_title<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' | '</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">TRUE</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'right'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #b1b100;">echo</span> wp_title<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' | '</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">TRUE</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'right'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">echo</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
   	 <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/title&gt;
&nbsp;
    &lt;!-- Memanggil CSS eksternal--&gt;
    &lt;link rel="stylesheet" href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'template_url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>/style.css" type="text/css" media="screen"/&gt;
&nbsp;
    &lt;!-- Memanggil Favicon Blog--&gt;
    &lt;link rel="shortcut icon" href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>/favicon.ico" /&gt;
&nbsp;
    &lt;!-- Memanggil umpan RSS blog--&gt;
    &lt;link rel="alternate" type="application/rss+xml" title="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> RSS" href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'rss2_url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" /&gt;
&nbsp;
    &lt;link rel="pingback" href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'pingback_url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" /&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> is_singular<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> wp_enqueue_script<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'comment-reply'</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> &lt;!-- Mengaktifkan komentar bersarang  --&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_head<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//kode PHP agar plugin bisa bekerja </span>
    <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/head&gt;
&nbsp;
&lt;!-- Halaman yang terlihat di peramban dimulai dari kode di bawah ini--&gt;
&lt;body&gt;
&nbsp;
&lt;!-- Page Navigation (dengan dropdown menu)--&gt;
&lt;nav&gt;
    &lt;ul&gt;
   	 &lt;li <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span>is_home<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> class="current_page_item"<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&gt;
   	 &lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'home'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;home&lt;/a&gt;&lt;/li&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_list_pages<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'sort_column=menu_order&short_order=DESC&title_li=&number=10'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">//Memanggil daftar page dari blog</span>
 <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/ul&gt;
&lt;/nav&gt;
&nbsp;
&lt;div id="header-wrapper"&gt;
    &lt;div class="bgheader-wrapper"&gt;
    &lt;header&gt;
   	 &lt;h1&gt;
   		 &lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/a&gt;&lt;!--Menampilkan judul dan link blog--&gt;
   	 &lt;/h1&gt;
  	 	&lt;p class="hide"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'description'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/p&gt;&lt;!-- Menampilkan deskripsi blog--&gt;
&nbsp;
   	&lt;!-- Menampilkan widget Social Media --&gt;
   	 &lt;section&gt;
   		 &lt;a class="sm subscriber" href=”<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span>rss2_url<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>”&gt;Subscribe to RSS Feed&lt;/a&gt;
   		 &lt;a class="sm fans" href=”http://facebook.com”&gt;Connect with me&lt;/a&gt;
   		 &lt;a class="sm follower" href="http://twitter.com/FM_Aris" &gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">print</span> twitter_followers_counter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'FM_Aris'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> Followers&lt;/a&gt;&lt;!--Ganti “FM_Aris” dengan nama Twitter anda
   	 &lt;/section&gt;
&nbsp;
   	 &lt;!-- Membuat category navigation--&gt;
   	 &lt;ul id="nav"&gt;
   		 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_list_categories<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'title_li=&orderby=count&number=9'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #666666; font-style: italic;">//Menampilkan daftar kategori</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;/ul&gt;
    &lt;/header&gt;
    &lt;/div&gt;
&lt;/div&gt;
&nbsp;
&lt;div id="wrapper"&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Sekarang mengatur tampilannya dengan CSS. Kita mulai dari navigation menu-nya dulu. Silakan masukkan kode ini di style.css

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Navigation Menu
----------------------------- */</span>
nav <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/nav_bg.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">11px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">min-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1024px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-transform</span><span style="color: #00AA00;">:</span><span style="color: #993333;">uppercase</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav a <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav ul <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav li <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav li<span style="color: #3333ff;">:hover </span>ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
nav li<span style="color: #3333ff;">:hover </span>ul ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
nav ul ul <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#111</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">2px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">130px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav ul ul li <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
nav li li<span style="color: #3333ff;">:hover </span>ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">&#125;</span>
nav ul ul ul <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span><span style="color: #933;">130px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span><span style="color: #933;">-3px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Cobalah lakukan tes di peramban, seharusnya kita akan melihat tampilan seperti ini:

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-2.jpg?w=604" data-recalc-dims="1" />

Berikutnya mengatur tampilan header. Kita akan bermain dengan efek CSS rollover image pada bagian logo blog.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Header Area
----------------------------- */</span>
<span style="color: #cc00cc;">#header-wrapper</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#070707</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">167px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">min-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1024px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
.bgheader-wrapper<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/head_bg.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">167px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">max-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1160px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#header-wrapper</span> header<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">167px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#header-wrapper</span> h1 <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">47px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#header-wrapper</span> h1 a <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background-image</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/logo.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">86px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">334px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
h1 a<span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">86px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span> <span style="color: #808080; font-style: italic;">/* Membuat efek rollover ketika logo situs di hover */</span></pre>
      </td>
    </tr>
  </table>
</div>

Langkah berikutnya adalah mengatur widget sosial media.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Social Media */</span>
   <span style="color: #cc00cc;">#header-wrapper</span> section<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">25px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">220px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.sm</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#FFFFFF</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">40px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.subscriber</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/rss.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.fans</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/fb.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.follower</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/tw.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span><span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Langkah berikutnya mengatur category navigation. Saatnya bermain-main dengan CSS3, kita akan membuat efek rounded corner dan box shadow.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Category Navigation */</span>
   <span style="color: #cc00cc;">#nav</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
       box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/cat_bg.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">13px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font-weight</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;">700</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">-10px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">959px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> a<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#7f7f7f</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> li <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/cat_border.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">display</span><span style="color: #3333ff;">:inline-</span>block<span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> li a <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.submenu</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/arrow.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">right</span> <span style="color: #933;">12px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> li<span style="color: #3333ff;">:hover </span>ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> li<span style="color: #3333ff;">:hover </span>ul ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> ul <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
       box-shadow<span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#efefef</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">2px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">150px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> ul li <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> ul li<span style="color: #3333ff;">:hover </span><span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#dbdbdb</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> li li<span style="color: #3333ff;">:hover </span>ul <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#nav</span> ul ul <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span><span style="color: #933;">150px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span><span style="color: #933;">-3px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Lakukan tes di peramban lagi, hasilnya akan tampak seperti di bawah.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-3.jpg?w=604" data-recalc-dims="1" />

### Membuat index.php

Index.php berfungsi menampilkan halaman depan blog secara keseluruhan. Secara umum fungsi index.php adalah:

1.  Menampilkan header.php dengan perintah `<?php get_header(); ?>`.
2.  Menampilkan konten blog melalui `the_loop()`.
3.  Menampilkan sidebar dengan perintah `<?php get_sidebar(); ?>`.
4.  Menampilkan footer dengan perintah `<?php get_footer(); ?>`.

Kali ini daftar posting akan kita tampilkan dalam bentuk *excerpt* atau ringkasan dengan thumbnail image. Berikut ini adalah isi dari index.php:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> get_header<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
&lt;div id="content"&gt;    
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">while</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> the_post<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Awal Wordpress Loop </span>
    <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
    &lt;article&gt;
    &lt;span <span style="color: #000000; font-weight: bold;">&lt;?php</span> post_class<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&gt;&lt;/span&gt;
   	 &lt;h2&gt;&lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_title<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/a&gt;&lt;/h2&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> the_post_thumbnail<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> the_excerpt<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
   	 &lt;p class="metadata"&gt;
   		 &lt;span class="author"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_author_posts_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="tags"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_tags<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="date"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_time<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'d M Y'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   	 &lt;/p&gt;
   	 &lt;p style="text-align:right"&gt;&lt;a class="more" href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;Read More&lt;/a&gt;&lt;/p&gt;
    &lt;/article&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endwhile</span><span style="color: #339933;">;</span><span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Akhir Wordpress Loop ?&gt;</span>
    <span style="color: #339933;">&lt;</span>p <span style="color: #000000; font-weight: bold;">class</span><span style="color: #339933;">=</span><span style="color: #0000ff;">"navigation"</span><span style="color: #339933;">&gt;&lt;</span>span <span style="color: #000000; font-weight: bold;">class</span><span style="color: #339933;">=</span><span style="color: #0000ff;">"nav-next"</span><span style="color: #339933;">&gt;</span><span style="color: #000000; font-weight: bold;">&lt;?php</span> next_posts_link<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'&laquo; older posts'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
    &lt;span class="nav-prev alignright"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> previous_posts_link<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'newer posts &raquo;'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;&lt;/p&gt;
&nbsp;
&lt;/div&gt;
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_sidebar<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_footer<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Atur dulu tampilan daftar posting. Di sini kita akan berkenalan dengan efek CSS3, yaitu gradient background dan text shadow pada bagian navigasi halaman.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Main Content
----------------------------- */</span>
<span style="color: #cc00cc;">#wrapper</span><span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">50px</span> <span style="color: #993333;">auto</span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">710px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">29px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
article<span style="color: #00AA00;">,</span><span style="color: #cc00cc;">#comments</span> <span style="color: #6666ff;">.commentbody</span><span style="color: #00AA00;">,</span><span style="color: #cc00cc;">#respond</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.pingbacklist</span> li<span style="color: #00AA00;">,</span><span style="color: #6666ff;">.trackbacklist</span> li <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
   box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">3px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
article h2 <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">13px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
article img<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">max-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">670px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.wp-post-image</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">140px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span> <span style="color: #933;">20px</span> <span style="color: #933;">20px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">140px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #808080; font-style: italic;">/* Post Metadata &#038; More Link */</span>
   .metadata<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span> <span style="color: #933;">12px</span>/<span style="color: #933;">24px</span> Georgia<span style="color: #00AA00;">,</span> Serif<span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.metadata</span> span<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">5px</span> <span style="color: #933;">35px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   .author<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/author.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   .tags<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/tag.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   .date<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/date.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #6666ff;">.more</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000;">"images/read_more.png"</span><span style="color: #00AA00;">&#41;</span> <span style="color: #993333;">repeat</span> <span style="color: #993333;">scroll</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #993333;">transparent</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#444444</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span> <span style="color: #933;">11px</span>/<span style="color: #933;">22px</span> georgia<span style="color: #00AA00;">,</span>times<span style="color: #00AA00;">,</span><span style="color: #993333;">serif</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">22px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span><span style="color: #993333;">center</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span>!important<span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #cc00cc;">#FFFFFF</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">81px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
&nbsp;
   <span style="color: #6666ff;">.nav-prev</span> a<span style="color: #00AA00;">,</span><span style="color: #6666ff;">.nav-next</span> a<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
       box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #3333ff;">:-moz-linear-</span>gradient<span style="color: #00AA00;">&#40;</span><span style="color: #993333;">center</span> <span style="color: #000000; font-weight: bold;">top</span> <span style="color: #00AA00;">,</span> <span style="color: #cc00cc;">#efefef</span><span style="color: #00AA00;">,</span> <span style="color: #cc00cc;">#ccc</span><span style="color: #00AA00;">&#41;</span><span style="color: #993333;">repeat</span> <span style="color: #993333;">scroll</span> <span style="color: #993333;">transparent</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">background</span><span style="color: #3333ff;">:-webkit-</span>gradient<span style="color: #00AA00;">&#40;</span>linear<span style="color: #00AA00;">,</span> <span style="color: #993333;">center</span> <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">,</span> <span style="color: #993333;">center</span> <span style="color: #000000; font-weight: bold;">bottom</span><span style="color: #00AA00;">,</span> from<span style="color: #00AA00;">&#40;</span><span style="color: #cc00cc;">#efefef</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">,</span> to<span style="color: #00AA00;">&#40;</span><span style="color: #cc00cc;">#ccc</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#ccc</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span> <span style="color: #933;">12px</span>/<span style="color: #933;">24px</span> georgia<span style="color: #00AA00;">,</span>times<span style="color: #00AA00;">,</span><span style="color: #993333;">serif</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">6px</span> <span style="color: #933;">12px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span>!important<span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Jika dilihat di peramban, maka kita akan mendapatkan pesan error. Ini terjadi karena ada tag PHP yang harus diatur dengan functions.php, yaitu post thumbnail. Bagian functions.php akan kita bahas nanti. Tampilan akhir konten blog akan seperti di bawah.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-4.jpg?w=604" data-recalc-dims="1" />

Di bawah adalah tampilan efek gradient background dan text-shadow pada navigasi halaman.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-5.jpg?w=604" data-recalc-dims="1" />

### Membuat sidebar.php

Bagian ini cukup sederhana. File sidebar.php akan menampilkan kotak pencarian dan widget dinamis yang dapat kita ubah melalui dashboard WordPress. Sama seperti di index.php, di sini kita juga membutuhkan functions.php agar sidebar widget bisa berfungsi. Berikut kode sidebar.php:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">&lt;aside id="sidebar"&gt;
	&lt;!--Form Pencarian--&gt;
   	 &lt;form id="search" method="get" action="<span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'url'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>/"&gt;   				 
   		 &lt;input type="text" class="search-field" name="s" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_search_query<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" /&gt;
   		 &lt;input type="submit" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> _e<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Search'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" class="search-submit"/&gt;    
   	 &lt;/form&gt;
&nbsp;
   &lt;!-- Widget Dinamis --&gt;
    &lt;section&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'dynamic_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> dynamic_sidebar<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/section&gt;
&nbsp;
&lt;/aside&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Mari kita atur tampilannya dengan CSS.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Sidebar
----------------------------- */</span>
<span style="color: #cc00cc;">#sidebar</span><span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">220px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Kotak Pencarian */</span>
<span style="color: #cc00cc;">#sidebar</span> form<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">220px</span><span style="color: #00AA00;">&#125;</span>
.search-field<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
   box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/search_bg.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">24px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">209px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
.search-submit<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/search.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">21px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span><span style="color: #933;">185px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span><span style="color: #933;">-27px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">21px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#sidebar</span> section<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
.sidebar<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
   -webkit-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
&nbsp;
   box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -moz-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
   -webkit-box-shadow<span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #933;">2px</span> <span style="color: #cc00cc;">#444</span><span style="color: #00AA00;">;</span>
&nbsp;
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span> <span style="color: #933;">12px</span> Georgia<span style="color: #00AA00;">,</span>Serif<span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">199px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#sidebar</span> h3 <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#sidebar</span> section ul<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#sidebar</span> section ul ul<span style="color: #00AA00;">,</span><span style="color: #cc00cc;">#sidebar</span> section ul ul ul<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#sidebar</span> section li<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Tampilannya nanti akan seperti di bawah.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-6.jpg?w=604" data-recalc-dims="1" />

### Membuat footer.php

Footer yang kita buat akan berbeda dengan hasil tutorial PSD yang dulu, kita akan menambahkan widget dinamis agar footer terlihat lebih penuh.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">&lt;/div&gt; &lt;!-- End Wrapper --&gt;
&nbsp;
&lt;div id="foot-wrapper"&gt;
&lt;aside id="foot-widget"&gt;
    &lt;section class="footw1"&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'dynamic_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> dynamic_sidebar<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'foot widget 1'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/section&gt;
&nbsp;
    &lt;section class="footw2"&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'dynamic_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> dynamic_sidebar<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'foot widget 2'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/section&gt;
&nbsp;
    &lt;section class="footw3"&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'dynamic_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> dynamic_sidebar<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'foot widget 3'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/section&gt;
&nbsp;
    &lt;section class="footw4"&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'dynamic_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> dynamic_sidebar<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'foot widget 4'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/section&gt;
&lt;/aside&gt;
&nbsp;
&lt;footer&gt;
    &lt;p&gt;&lt;span class="alignleft"&gt; Copyright &copy; <span style="color: #000000; font-weight: bold;">&lt;?php</span> the_time<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Y'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span> <span style="color: #000000; font-weight: bold;">&lt;?php</span> bloginfo<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span> &lt;/span&gt;
    &lt;span class="alignright"&gt;Designed by &lt;a href="http://desaindigital.com/"&gt;Mohammad Jeprie&lt;/a&gt; & coded by &lt;a href="http://cekerholic.com/"&gt;Aris FM&lt;/a&gt;&lt;/span&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_footer<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/p&gt;
&lt;/footer&gt;
&nbsp;
&lt;/div&gt;&lt;!-- End Foot Wrapper --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Atur tampilannya.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* ------------------------------
Footer
----------------------------- */</span>
<span style="color: #cc00cc;">#foot-wrapper</span> <span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#070707</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#999</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">min-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1024px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#foot-wrapper</span> a<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#999</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">underline</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#foot-wrapper</span> aside<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#foot-wrapper</span> section<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">225px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.footw1</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.footw2</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.footw3</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin-right</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
footer<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">images/nav_bg.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span> <span style="color: #933;">12px</span> Georgia<span style="color: #00AA00;">,</span>Serif<span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">min-width</span><span style="color: #00AA00;">:</span><span style="color: #933;">1024px</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
footer p<span style="color: #00AA00;">&#123;</span>
   <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
   <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Tampilan footer.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-7.jpg?w=604" data-recalc-dims="1" />

### Membuat single.php dan page.php

Secara umum single.php dan page.php memiliki kode yang sama dengan index.php, hanya saja di single.php dan page.php ada tambahan kode untuk menampilkan kolom komentar. Untuk menampilkan kolom komentar cukup memanggil comments.php dengan perintah `<?php comments_template(' ', true); ?>` sebelum akhir `the_loop()`. Kode lengkapnya seperti ini:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> get_header<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
&lt;div id="content"&gt;    
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #b1b100;">while</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> the_post<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
    &lt;article <span style="color: #000000; font-weight: bold;">&lt;?php</span> post_class<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&gt;
   	 &lt;h2&gt;&lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_title<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/a&gt;&lt;/h2&gt;
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> the_post_thumbnail<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> the_content<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_link_pages<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'before=&lt;p class="pagingpost"&gt;Page: &after=&lt;/p&gt;&next_or_number=number&pagelink=%'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;p class="metadata"&gt;
   		 &lt;span class="author"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_author_posts_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="tags"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_tags<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="date"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_time<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'d M Y'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   	 &lt;/p&gt;
    &lt;/article&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> comments_template<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endwhile</span><span style="color: #339933;">;</span><span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/div&gt;
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_sidebar<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_footer<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Di page.php, metadata posting (nama penulis, tag dan tanggal posting) akan kita hilangkan. Hapus kode berikut dari page.php

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">   	 &lt;p class="metadata"&gt;
   		 &lt;span class="author"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_author_posts_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="tags"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_tags<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   		 &lt;span class="date"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_time<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'d M Y'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
   	 &lt;/p&gt;</pre>
      </td>
    </tr>
  </table>
</div>

### Membuat comments.php

File comments.php berfungsi untuk menampilkan daftar komentar dan kotak komentar. Daftar komentar akan dibuat terpisah antara komentar, pingback, dan trackback dengan menggunakan callback function yang diatur di functions.php.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
<span style="color: #666666; font-style: italic;">// Do not delete these lines</span>
<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_SERVER</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'SCRIPT_FILENAME'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #0000ff;">'comments.php'</span> <span style="color: #339933;">==</span> <span style="color: #990000;">basename</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_SERVER</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'SCRIPT_FILENAME'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>
<span style="color: #990000;">die</span> <span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Please do not load this page directly. Thanks!'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> post_password_required<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;p class="nocomments"&gt;This post is password protected. Enter the password to view comments.&lt;/p&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span>
<span style="color: #b1b100;">return</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
&lt;!-- You can start editing here. --&gt;
&lt;section id="comments"&gt;
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>have_comments<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$wp_query</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comment'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;h3&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$wp_query</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comment'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> Comments&lt;/h3&gt;
   	 &lt;ol class="commentlist"&gt;
   		 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_list_comments<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'type=comment&callback=mytheme_comment'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;/ol&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'pingback'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;h3 id="pingbacks"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$wp_query</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'pingback'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> Pingbacks&lt;/h3&gt;
   	 &lt;ol class="pingbacklist"&gt;
   		 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_list_comments<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'type=pingback&callback=mytheme_pings'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;/ol&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'trackback'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;h3 id="trackbacks"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$wp_query</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comments_by_type</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'trackback'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> Trackbacks&lt;/h3&gt;
   	 &lt;ol class="trackbacklist"&gt;
   		 <span style="color: #000000; font-weight: bold;">&lt;?php</span> wp_list_comments<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'type=trackback&callback=mytheme_pings'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
   	 &lt;/ol&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #666666; font-style: italic;">// this is displayed if there are no comments so far ?&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'open'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$post</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comment_status</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
&lt;!-- If comments are open, but there are no comments. --&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #666666; font-style: italic;">// comments are closed ?&gt;</span>
<span style="color: #339933;">&lt;!--</span> <span style="color: #b1b100;">If</span> comments are closed<span style="color: #339933;">.</span> <span style="color: #339933;">--&gt;</span>
<span style="color: #339933;">&lt;</span>p <span style="color: #000000; font-weight: bold;">class</span><span style="color: #339933;">=</span><span style="color: #0000ff;">"nocomments"</span><span style="color: #339933;">&gt;</span>Comments are closed<span style="color: #339933;">.&lt;/</span>p<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>section<span style="color: #339933;">&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'open'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$post</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comment_status</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/section&gt;
&lt;section id="respond"&gt;
&lt;h3&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_form_title<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'Leave Your Comment Here'</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/h3&gt;
&lt;div class="cancel-comment-reply"&gt;
&lt;small&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> cancel_comment_reply_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/small&gt;
&lt;/div&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> get_option<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'comment_registration'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #339933;">!</span><span style="color: #000088;">$user_ID</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;p&gt;You must be &lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> get_option<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'siteurl'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>/wp-login.php?redirect_to=<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">urlencode</span><span style="color: #009900;">&#40;</span>get_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;logged in&lt;/a&gt; to post a comment.&lt;/p&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
&lt;form action="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> get_option<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'siteurl'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>/wp-comments-post.php" method="post" id="commentform"&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$user_ID</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;p&gt;Logged in as &lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> get_option<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'siteurl'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>/wp-admin/profile.php"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$user_identity</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/a&gt;. &lt;a href="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> wp_logout_url<span style="color: #009900;">&#40;</span>get_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" title="Log out of this account"&gt;Log out &raquo;&lt;/a&gt;&lt;/p&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">else</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;p&gt;&lt;label for="author"&gt;Name <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$req</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">""</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/label&gt;&lt;input type="text" name="author" id="author" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$comment_author</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" size="22" tabindex="1" <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$req</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">"aria-required='true'"</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> /&gt;&lt;/p&gt;
&lt;p&gt;&lt;label for="email"&gt;Email <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$req</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">""</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/label&gt;&lt;input type="text" name="email" id="email" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$comment_author_email</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" size="22" tabindex="2" <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$req</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">"aria-required='true'"</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> /&gt;&lt;/p&gt;
&lt;p&gt;&lt;label for="url"&gt;Url&lt;/label&gt;&lt;input type="text" name="url" id="url" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$comment_author_url</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" size="22" tabindex="3" /&gt;&lt;/p&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;!--&lt;p&gt;&lt;small&gt;&lt;strong&gt;XHTML:&lt;/strong&gt; You can use these tags: &lt;code&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> allowed_tags<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/code&gt;&lt;/small&gt;&lt;/p&gt;--&gt;
&lt;p&gt;&lt;label for="comment"&gt;Comment&lt;/label&gt;&lt;textarea name="comment" id="comment" rows="10" tabindex="4"&gt;&lt;/textarea&gt;&lt;/p&gt;
&lt;span&gt;&lt;input name="submit" type="submit" id="submit" tabindex="5" value="Submit Comment" /&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_id_fields<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/span&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> do_action<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'comment_form'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$post</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">ID</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/form&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// If registration required and not logged in ?&gt;</span>
<span style="color: #339933;">&lt;/</span>section<span style="color: #339933;">&gt;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// if you delete this the sky will fall on your head ?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Lalu atur tampilannya di style.css

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Comments */</span>
   <span style="color: #cc00cc;">#comments</span><span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">50px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #993333;">inherit</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> h3<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #933;">1px</span> <span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> ol<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> li<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> .avatar<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">3px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> p<span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">13px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font-weight</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;">400</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> <span style="color: #6666ff;">.commentbody</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">padding-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">110px</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> <span style="color: #6666ff;">.fn</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">15px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> <span style="color: #6666ff;">.comment-meta</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">11px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
   <span style="color: #cc00cc;">#comments</span> <span style="color: #6666ff;">.reply</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span><span style="color: #933;">13px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">font-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">italic</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
   ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> <span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">list-style</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">80px</span><span style="color: #00AA00;">;</span>
   <span style="color: #00AA00;">&#125;</span>
&nbsp;
   ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li<span style="color: #6666ff;">.depth-5</span><span style="color: #00AA00;">,</span>ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li<span style="color: #6666ff;">.depth-6</span><span style="color: #00AA00;">,</span>ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li.depth-<span style="color: #cc66cc;">7</span><span style="color: #00AA00;">,</span>
   ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li<span style="color: #6666ff;">.depth-8</span><span style="color: #00AA00;">,</span>ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li<span style="color: #6666ff;">.depth-9</span><span style="color: #00AA00;">,</span>ol<span style="color: #6666ff;">.commentlist</span> li ul<span style="color: #6666ff;">.children</span> li.depth-<span style="color: #cc66cc;">10</span><span style="color: #00AA00;">&#123;</span>
       <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">-80px</span><span style="color: #00AA00;">;</span>
       <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span>
   <span style="color: #00AA00;">&#125;</span>
&nbsp;
       <span style="color: #808080; font-style: italic;">/* Comment Form */</span>
       <span style="color: #cc00cc;">#respond</span><span style="color: #00AA00;">&#123;</span>
           <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
       <span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#respond</span> h3<span style="color: #00AA00;">&#123;</span>
           <span style="color: #000000; font-weight: bold;">border-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">padding-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
       <span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#commentform</span><span style="color: #00AA00;">&#123;</span>
           <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #993333;">inherit</span><span style="color: #00AA00;">;</span>
       <span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#commentform</span> label <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#commentform</span> input <span style="color: #00AA00;">&#123;</span>
           <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">100px</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">2px</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">200px</span><span style="color: #00AA00;">;</span>
       <span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#commentform</span> textarea<span style="color: #00AA00;">&#123;</span>
           <span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #993333;">inherit</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">2px</span><span style="color: #00AA00;">;</span>
           <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">99%</span><span style="color: #00AA00;">;</span>
       <span style="color: #00AA00;">&#125;</span>
       <span style="color: #cc00cc;">#commentform</span> <span style="color: #cc00cc;">#submit</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span>!important<span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
       <span style="color: #6666ff;">.cancel-comment-reply</span><span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Tampilan daftar dan kolom komentar seperti di bawah.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-8.jpg?w=604" data-recalc-dims="1" />

### Membuat functions.php

Ini adalah bagian yang sangat vital dalam theme ini, fungsi-fungsi di functions.php digunakan dalam hampir semua file. Mulai dari header.php, index.php, sidebar.php, footer.php, page.php dan single.php, sampai comments.php. Berikut kode lengkap functions.php dengan beberapa penjelasannya:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
    <span style="color: #666666; font-style: italic;">// Mengatur widget dinamis di sidebar dan footer</span>
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'register_sidebar'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    register_sidebar<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
   	 <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'sidebar'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;div class="sidebar"&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;h3&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/h3&gt;'</span>
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    register_sidebar<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
   	 <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'foot widget 1'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;h3&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/h3&gt;'</span>
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    register_sidebar<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
   	 <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'foot widget 2'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;h3&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/h3&gt;'</span>
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    register_sidebar<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
   	 <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'foot widget 3'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;h3&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/h3&gt;'</span>
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    register_sidebar<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
   	 <span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'foot widget 4'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_widget'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/div&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'before_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;h3&gt;'</span><span style="color: #339933;">,</span>
   	 <span style="color: #0000ff;">'after_title'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'&lt;/h3&gt;'</span>
    <span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #666666; font-style: italic;">//Mengatur tampilan excerpt (ringkasan posting)</span>
    <span style="color: #000000; font-weight: bold;">function</span> improved_trim_excerpt<span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$post</span><span style="color: #339933;">;</span>
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">''</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$text</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> get_the_content<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'the_content'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">str_replace</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'@&lt;script[^&gt;]*?&gt;.*?&lt;/script&gt;@si'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strip_tags</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;p&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">75</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$words</span> <span style="color: #339933;">=</span> <span style="color: #990000;">explode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">+</span> <span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">&gt;</span> <span style="color: #000088;">$excerpt_length</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   		 <span style="color: #990000;">array_pop</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   		 <span style="color: #990000;">array_push</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'...'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   		 <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">implode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   		 <span style="color: #009900;">&#125;</span>
   	 <span style="color: #009900;">&#125;</span>
   	 <span style="color: #b1b100;">return</span> <span style="color: #000088;">$text</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    remove_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'wp_trim_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    add_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'improved_trim_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #666666; font-style: italic;">//Mengatur thumbnail image</span>
    add_theme_support<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'post-thumbnails'</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>    
    set_post_thumbnail_size<span style="color: #009900;">&#40;</span> <span style="color: #cc66cc;">150</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">150</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    add_image_size<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'single-post-thumbnail'</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">150</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">150</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #666666; font-style: italic;">//Menampilkan jumlah follower Twitter</span>
    <span style="color: #000000; font-weight: bold;">function</span> twitter_followers_counter<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
&nbsp;
    <span style="color: #000088;">$cache_file</span> <span style="color: #339933;">=</span> CACHEDIR <span style="color: #339933;">.</span> <span style="color: #0000ff;">'twitter_followers_counter_'</span> <span style="color: #339933;">.</span> <span style="color: #990000;">md5</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$username</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">is_file</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #000088;">$cache_file_time</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strtotime</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'1984-01-11 07:15'</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #000088;">$cache_file_time</span> <span style="color: #339933;">=</span> <span style="color: #990000;">filemtime</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000088;">$now</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strtotime</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">date</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'Y-m-d H:i:s'</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #000088;">$api_call</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$cache_file_time</span><span style="color: #339933;">;</span>
    <span style="color: #000088;">$difference</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$now</span> <span style="color: #339933;">-</span> <span style="color: #000088;">$api_call</span><span style="color: #339933;">;</span>
    <span style="color: #000088;">$api_time_seconds</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">1800</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$difference</span> <span style="color: #339933;">&gt;=</span> <span style="color: #000088;">$api_time_seconds</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #000088;">$api_page</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'http://twitter.com/users/show/'</span> <span style="color: #339933;">.</span> <span style="color: #000088;">$username</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$xml</span> <span style="color: #339933;">=</span> <span style="color: #990000;">file_get_contents</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$api_page</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
   	 <span style="color: #000088;">$profile</span> <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">new</span> SimpleXMLElement <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$xml</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #000088;">$count</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$profile</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">followers_count</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">is_file</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
   		 <span style="color: #990000;">unlink</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #009900;">&#125;</span>
   	 <span style="color: #990000;">touch</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #990000;">file_put_contents</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span><span style="color: #339933;">,</span> <span style="color: #990000;">strval</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$count</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">return</span> <span style="color: #990000;">strval</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$count</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
   	 <span style="color: #000088;">$count</span> <span style="color: #339933;">=</span> <span style="color: #990000;">file_get_contents</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$cache_file</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
   	 <span style="color: #b1b100;">return</span> <span style="color: #990000;">strval</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$count</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
    <span style="color: #666666; font-style: italic;">//Mengatur tampilan daftar komentar</span>
    <span style="color: #000000; font-weight: bold;">function</span> mytheme_comment<span style="color: #009900;">&#40;</span><span style="color: #000088;">$comment</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #000088;">$depth</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #000088;">$GLOBALS</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comment'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$comment</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;li <span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_class<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> id="li-comment-<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_ID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">echo</span> get_avatar<span style="color: #009900;">&#40;</span><span style="color: #000088;">$comment</span><span style="color: #339933;">,</span><span style="color: #000088;">$size</span><span style="color: #339933;">=</span><span style="color: #0000ff;">'65'</span><span style="color: #339933;">,</span><span style="color: #000088;">$default</span><span style="color: #339933;">=</span><span style="color: #0000ff;">'&lt;path_to_url&gt;'</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;div class="commentbody" id="comment-<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_ID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;
    &lt;p class="vcard"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #990000;">printf</span><span style="color: #009900;">&#40;</span>__<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'&lt;strong class="fn"&gt;%s&lt;/strong&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> get_comment_author_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;span class="comment-meta commentmetadata"&gt; <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #990000;">printf</span><span style="color: #009900;">&#40;</span>__<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'%1$s at %2$s'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> get_comment_date<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>get_comment_time<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'max_depth'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">!=</span><span style="color: #000088;">$depth</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/p&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$comment</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comment_approved</span> <span style="color: #339933;">==</span> <span style="color: #0000ff;">'0'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;em&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> _e<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Your comment is awaiting moderation'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/em&gt;
    &lt;br /&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_text<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;p class="reply"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_reply_link<span style="color: #009900;">&#40;</span><span style="color: #990000;">array_merge</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'depth'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #000088;">$depth</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'max_depth'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'max_depth'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/p&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;/div&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span>
<span style="color: #009900;">&#125;</span>
    <span style="color: #666666; font-style: italic;">//Mengatur tampilan pingback dan trackback</span>
    <span style="color: #000000; font-weight: bold;">function</span> mytheme_pings<span style="color: #009900;">&#40;</span><span style="color: #000088;">$comment</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #000088;">$depth</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #000088;">$GLOBALS</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comment'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$comment</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;li <span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_class<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> id="li-comment-<span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_ID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>"&gt;
    &lt;p class="vcard"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #990000;">printf</span><span style="color: #009900;">&#40;</span>__<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'&lt;strong class="fn"&gt;%s&lt;/strong&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> get_comment_author_link<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;span class="comment-meta commentmetadata"&gt; <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #990000;">printf</span><span style="color: #009900;">&#40;</span>__<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'%1$s at %2$s'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> get_comment_date<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>get_comment_time<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'max_depth'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">!=</span><span style="color: #000088;">$depth</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/p&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$comment</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">comment_approved</span> <span style="color: #339933;">==</span> <span style="color: #0000ff;">'0'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    &lt;em&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> _e<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Your comment is awaiting moderation'</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/em&gt;
    &lt;br /&gt;
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> comment_text<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
    <span style="color: #000000; font-weight: bold;">&lt;?php</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Membuat Screenshot Theme

Sebenarnya theme WordPress yang kita buat sudah jadi dan bisa dipakai. Namun, WordPress menerapkan standar mewajibkan preview image untuk setiap theme. Untuk membuatnya, silakan aktifkan theme yang baru kita buat, capture halaman dengan tombol print screen. Perkecil di Photoshop dengan ukuran 300 x 225 px dan beri nama screenshot.png.

<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-9.jpg?w=604" data-recalc-dims="1" />

### Hasil Akhir

Hasil akhir dari tutorial ini adalah sebuah theme WordPress dengan lima buah widget dinamis, satu di sidebar dan empat di footer. Theme WordPress ini telah saya validasi bahasa markahnya melalui validator W3, untuk CSS masih terdapat cukup banyak error saat divalidasi, terutama browser specific properties untuk efek-efek CSS3 yang belum distandarisasi oleh W3. Di bawah adalah tampilan theme WordPress yang kita buat, klik gambar untuk melihat hasilnya secara langsung.

[<img alt="Mendesain Blog Elegan Bag. 3 - Konversi ke Theme WordPress" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/blog-elegan-3-1.jpg?w=604" data-recalc-dims="1" />][3]

### Download Hasil Tutorial

Silakan download theme WordPress hasil tutorial ini dengan meng-klik tombol di bawah ini. Ada juga bonus file HTML/CSS buat non pengguna WordPress

<p style="display:block;margin:30px auto;text-align:center">
  <a href="http://cekerholic.com/wp-content/plugins/download-monitor/download.php?id=5" style="background:#BF6409;color:#fff;font:700 1.75em Arial,Sans-Serif;padding:8px 14px 7px;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-moz-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-webkit-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);width:auto;">WordPress Theme</a>
</p>

<p style="display:block;margin:30px auto;text-align:center">
  <a href="http://cekerholic.com/wp-content/plugins/download-monitor/download.php?id=6" style="background:#BF6409;color:#fff;font:700 1.75em Arial,Sans-Serif;padding:8px 14px 7px;margin:30px auto;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-moz-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-webkit-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);width:auto;">HTML/CSS Template</a>
</p>

 [1]: http://www.desaindigital.com/mendesain-blog-elegan-dengan-photoshop/
 [2]: http://www.desaindigital.com/mendesain-blog-elegan-bag-2-slicing/
 [3]: http://cekerholic.com/room/?themedemo=Elegant-Blog
 [4]: http://desaindigital.com/wp-content/uploads/2010/10/tutorial-blog-elegan-2/images.zip
 [5]: http://notepad-plus-plus.org/
 [6]: http://projects.gnome.org/gedit/
 [7]: http://codex.wordpress.org/Main_Page
 [8]: http://www.wpdesigner.com/2007/02/19/so-you-want-to-create-wordpress-themes-huh/
 [9]: http://www.apachefriends.org/en/xampp.html
 [10]: http://inisip.com/install-wordpress-dengan-xampp-di-pc-atau-laptop/
 [11]: http://svn.automattic.com/wpcom-themes/test-data.2010-08-02.xml
 [12]: http://www.mozilla.com/en-US/firefox/upgrade.html
 [13]: http://www.apple.com/safari/download/
 [14]: http://www.google.com/chrome/intl/en/landing_chrome.html?hl=en
 [15]: http://getfirebug.com/
 [16]: http://www.opera.com/dragonfly/
 [17]: http://meyerweb.com/eric/tools/css/reset/