---
title: Konversi PSD Clean Corporate Website menjadi HTML
author: Aris FM
layout: post
permalink: /archives/2011/07/konversi-psd-clean-corporate-website-menjadi-html.html
categories:
  - Design
---
Kalau dalam posting kemarin saya berbagi template [Clean Corporate Site][1], kali ini saya akan menuliskan tutorial pembuatannya. Dalam tutorial ini kita akan sedikit belajar tentang animasi jQuery Slider.

### Preview

Inilah hasil akhir dari template yang akan kita buat. Klik gambar untuk melihat *live demo*-nya.  
[<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/final.jpg?w=604" title="Screenshot Clean Corporate Final" data-recalc-dims="1" />][2]  
<!--more-->

### Persiapan

Sebelum memulai, pastikan anda telah mengunduh Mockup PSD website yang akan kita buat. Jika belum, silakan unduh di [PSD Freemium][3]. Langkah pertama yang kita lakukan adalah mempersiapkan file-file dan folder. Buat folder baru dengan nama **&#8220;Clean-Corporate&#8221;**. Di dalam folder ini, buat/masukkan file-file berikut:

*   index.html
*   style.css
*   reset.css, bisa diunduh di <http://meyerweb.com/eric/tools/css/reset/>
*   jQuery, unduh di <http://jquery.com/>
*   jQuery Tools (script untuk membuat efek slider), unduh dari <http://flowplayer.org/tools/documentation/index.html>
*   modernizr (script yang berfungsi untuk mengoptimalkan markah HTML5 di IE), unduh di <http://modernizr.com/>
*   folder baru dengan nama **&#8220;img&#8221;** untuk menyimpan gambar hasil slicing

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/1.jpg?w=604" title="Screenshot Clean Corporate 1" data-recalc-dims="1" />

### Langkah 1 &#8211; Membuat Markah Dasar HTML

Buka index.html di teks editor favorit anda (saya menggunakan [Notepad++][4]), masukkan kode HTML berikut:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&nbsp;
&lt;head&gt;
&lt;meta name="author" content="Aris FM" /&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;&lt;/title&gt;
&lt;link href="style.css" media="screen" rel="stylesheet" type="text/css"/&gt;
&lt;!--[if IE]&gt;
&lt;script src="modernizr-1.7.min.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;
&lt;/head&gt;
&nbsp;
&lt;body&gt;
&nbsp;
&lt;script src="jquery-1.6.1.min.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;script src="jquery.tools.min.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 2 &#8211; Membuat Struktur Layout

Sebelumnya kita perlu memahami struktur HTML yang akan kita buat dari mockup PSD. Berikut ini adalah struktur halaman yang akan kita buat:

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/2.jpg?w=604" title="Screenshot Clean Corporate 2" data-recalc-dims="1" />

Struktur HTML terdiri dari 5 bagian, yaitu `#top` (header), `#slides` (deskripsi produk dengan efek jQuery slider), `#quote`, `#info-wrapper` (info produk) dan `footer`. Masukkan kode HTML berikut diantara kode `<body>` dan `<script src="jquery-1.6.1.min.js" type="text/javascript"></script>`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;div id="top"&gt;
&lt;/div&gt;&lt;!--End top--&gt;
&nbsp;
&lt;div id="slides"&gt;
&lt;/div&gt;&lt;!--End slides--&gt;
&nbsp;
&lt;aside id="quote"&gt;
&lt;/aside&gt;
&nbsp;
&lt;div id="info-wrapper"&gt;
&lt;/div&gt;&lt;!--End info wrapper--&gt;
&nbsp;
&lt;footer&gt;
&lt;/footer&gt;</pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 3 &#8211; Membuat Header Website

Buka file PSD dan buat seleksi pada background header dengan crop tool. Agar hasil seleksi akurat, perbesar area kerja sampai tekstur background terlihat jelas. Simpan untuk web (Ctrl+Alt+Shift+S) dengan nama &#8220;orange-bg.jpg&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/3.jpg?w=604" title="Screenshot Clean Corporate 3" data-recalc-dims="1" />  
<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/4.jpg?w=604" title="Screenshot Clean Corporate 4" data-recalc-dims="1" />

Langkah selanjutnya adalah memotong logo. Pilih semua layer di dalam layer group *&#8220;logo&#8221;* dan gabungkan dengan menekan tombol Ctrl+E. Buat guide di sekitar layer dan seleksi dengan crop tool sesuai guide. Sembunyikan layer-layer background agar latar logo menjadi transparan. Simpan untuk web dengan format PNG-24 transparan dengan nama &#8220;logo.png&#8221;

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/5.jpg?w=604" title="Screenshot Clean Corporate 5" data-recalc-dims="1" />  
<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/6.jpg?w=604" title="Screenshot Clean Corporate 6" data-recalc-dims="1" />  
<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/7.jpg?w=604" title="Screenshot Clean Corporate 7" data-recalc-dims="1" />

Selanjutnya masukkan kode HTML berikut diantara kode `<div id="top">` dan `</div><!--End top-->`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;div&gt;
&lt;header&gt;
&lt;h1&gt;&lt;a href="#"&gt;web+design&lt;/a&gt;&lt;/h1&gt;
&lt;/header&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Buka style.css, masukkan kode CSS berikut.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@import url(reset.css);</span>
body<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#fff</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #933;">14px</span> helvetica<span style="color: #00AA00;">,</span><span style="color: #993333;">sans-serif</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">font-weight</span><span style="color: #00AA00;">:</span><span style="color: #993333;">medium</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Top */</span>
#<span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/orange-bg.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">87px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">top</span> div<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">940px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
header<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">390px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
header h1 a<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/logo.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin-top</span><span style="color: #00AA00;">:</span><span style="color: #933;">22px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">43px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">157px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Sekarang buka index.html di peramban web. Dan inilah hasil yang kita dapat sejauh ini.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/8.jpg?w=604" title="Screenshot Clean Corporate 8" data-recalc-dims="1" />

### Langkah 4 &#8211; Membuat Navigasi Menu

Buat guide pada masing-masing menu item. Seleksi dengan tool crop sesuai guide pada tiap menu. Sembunyikan layer-layer background agar latar menu menjadi transparan. Simpan masing-masing menu dengan &#8220;menu-portfolio.png&#8221;, &#8220;menu-blog.png&#8221;, &#8220;menu-pricing.png&#8221; dan &#8220;menu-contact.png&#8221;

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2011/07/9.jpg?w=604" title="Screenshot Clean Corporate 9" data-recalc-dims="1" />

Selanjutnya pilih layer *separator* dan buat guide di sekitar layer. Seleksi dengan tool crop sesuai guide. Sembunyikan layer-layer background agar latar separator transparan. Simpan dengan nama &#8220;menu-line.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/10.jpg?w=604" title="Screenshot Clean Corporate 10" data-recalc-dims="1" />

Background menu tidak kita buat dengan gambar tetapi dengan properti CSS background transparency. Oleh karena itu kita tidak perlu memotongnya di PSD

Masukkan kode HTML berikut diantara kode `</header>` dan `</div><!--End top-->`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Portfolio&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Pricing&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/div&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Atur tampilan menu dengan CSS.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;">#<span style="color: #000000; font-weight: bold;">top</span> nav<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span>rgba<span style="color: #00AA00;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">,</span>.3<span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span><span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span><span style="color: #933;">400px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">87px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">9999px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">top</span> nav ul<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">530px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">top</span> nav li<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/menu-line.png</span><span style="color: #00AA00;">&#41;</span> <span style="color: #993333;">no-repeat</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">display</span><span style="color: #3333ff;">:inline-</span>block<span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">top</span> nav li<span style="color: #3333ff;">:last-child</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding-right</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
#<span style="color: #000000; font-weight: bold;">top</span> nav a<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">42px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin-top</span><span style="color: #00AA00;">:</span><span style="color: #933;">22px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
a.port<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/menu-portfolio.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">90px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
a.blog<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/menu-blog.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">73px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
a.pricing<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/menu-pricing.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">82px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
a.contact<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/menu-contact.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">102px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 5 &#8211; Slider untuk Informasi Produk

Perbesar area kerja sampai maksimal dengan menekan tombol Ctrl+= agar tekstur background terlihat jelas. Buat seleksi dengan tool crop pada background slider dengan ukuran 6 x 6px. Simpan dengan nama &#8220;green-bg.jpg&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2011/07/11.jpg?w=604" title="Screenshot Clean Corporate 11" data-recalc-dims="1" />

Selanjutnya kita akan membuat gambar anak panah untuk slider. Pilih layer *arrow* di dalam layer group *slider* dan ubah menjadi smart object (klik kanan > convert to smart object). Buat guide di sekitar panah bagian kiri dan seleksi dengan tool crop sesuai guide. Sembunyikan layer-layer background agar latar gambar transparan. Simpan dengan nama &#8220;arrow-l.png&#8221;. Ulangi langkah ini untuk panah bagian kanan dan simpan dengan nama &#8220;arrow-r.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2011/07/12.jpg?w=604" title="Screenshot Clean Corporate 12" data-recalc-dims="1" />

Selanjutnya kita buat gambar produk. Buat guide di sekitar layer gambar produk dan seleksi dengan tool crop sesuai guide. Sembunyikan layer-layer background agar latar gambar transparan. Simpan dengan nama &#8220;slider-img.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/13.jpg?w=604" title="Screenshot Clean Corporate 13" data-recalc-dims="1" />

Masukkan kode HTML berikut diantara kode `<div id="slides">` dan `</div><!--End slides-->`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;article&gt;
&lt;div&gt;
&lt;div&gt;
&lt;h2&gt;Our Product Descriptions&lt;/h2&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis. Sed id nibh id magna facilisis tincidunt. Fusce suscipit vestibulum metus, sed pellentesque ligula dictum quis. Cras accumsan posuere leo a varius. Vivamus odio metus, imperdiet sed rhoncus nec, commodo vel massa. In vitae lorem convallis tellus fringilla ultricies.&lt;/p&gt;
&lt;p&gt;Maecenas quis enim viverra neque adipiscing vestibulum. Aenean a orci eros, eget adipiscing enim. Cras bibendum tristique diam, aliquet imperdiet urna malesuada id. Vestibulum in nibh ac massa adipiscing lacinia sed nec elit.&lt;/p&gt;
&lt;img alt="Product Picture" src="img/slider-img.png"/&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;h2&gt;Our Product Descriptions&lt;/h2&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis. Sed id nibh id magna facilisis tincidunt. Fusce suscipit vestibulum metus, sed pellentesque ligula dictum quis. Cras accumsan posuere leo a varius. Vivamus odio metus, imperdiet sed rhoncus nec, commodo vel massa. In vitae lorem convallis tellus fringilla ultricies.&lt;/p&gt;
&lt;p&gt;Maecenas quis enim viverra neque adipiscing vestibulum. Aenean a orci eros, eget adipiscing enim. Cras bibendum tristique diam, aliquet imperdiet urna malesuada id. Vestibulum in nibh ac massa adipiscing lacinia sed nec elit.&lt;/p&gt;
&lt;img alt="Product Picture" src="img/slider-img.png"/&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;h2&gt;Our Product Descriptions&lt;/h2&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis. Sed id nibh id magna facilisis tincidunt. Fusce suscipit vestibulum metus, sed pellentesque ligula dictum quis. Cras accumsan posuere leo a varius. Vivamus odio metus, imperdiet sed rhoncus nec, commodo vel massa. In vitae lorem convallis tellus fringilla ultricies.&lt;/p&gt;
&lt;p&gt;Maecenas quis enim viverra neque adipiscing vestibulum. Aenean a orci eros, eget adipiscing enim. Cras bibendum tristique diam, aliquet imperdiet urna malesuada id. Vestibulum in nibh ac massa adipiscing lacinia sed nec elit.&lt;/p&gt;
&lt;img alt="Product Picture" src="img/slider-img.png"/&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- End Items --&gt;
&lt;/article&gt;
&lt;div&gt;
&lt;a&gt;prev&lt;/a&gt;
&lt;a&gt;next&lt;/a&gt;
&lt;/div&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Masukkan kode CSS berikut untuk mengatur tampilan slider.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">/* Slider */
#slides{
	background:transparent url(img/green-bg.jpg);
	display:block;
	height:367px;
	padding:35px 0 0;
	position:relative;
	overflow:hidden;
	text-shadow:1px 0 1px #373737;
&nbsp;
	box-shadow:0 0 5px #a76c39;
	border-top:1px solid #51b778;
	border-bottom:1px solid #51b778;
}
#slides article{
	display:block;
	margin:0 auto;
	overflow:hidden;
	padding:0;
	position:relative;
	min-height:368px;
	height:auto;
	width:1065px;
}
#slides article .items{
	width:20000em;
	position:absolute;
	clear:both;
}
.items div{
	float:left;
	position:relative;
	margin-left:63px;
	width:1002px;
}
#slides h2{
	clear:both;
	float:left;
	font:24px Georgia,Serif;
	margin-bottom:20px;
}
#slides p{
	clear:both;
	float:left;
	line-height:1.5;
	width:460px;
	margin-bottom:10px;
}
#slides img{
	position:absolute;
	right:0;
}
.slider-navi{
	margin:0 auto;
	position:relative;
	top:-243px;
	width:1065px;
}
a.browse{
	cursor:pointer;
	display:block;
	height:38px;
	width:33px;
	position:relative;
	text-indent:-9999px;
}
a.left{
	background:transparent url(img/arrow-l.png);
	float:left;
}
a.right{
	background:transparent url(img/arrow-r.png);
	float:right;
}</pre>
      </td>
    </tr>
  </table>
</div>

Selanjutnya kita buat animasi slider-nya dengan memasukkan kode jQuery berikut sebelum tag `</body>`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;script type="text/javascript"&gt;
$(function() {
$(".slider").scrollable({speed: 700, circular: true});
});
&lt;/script&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Refresh peramban anda untuk melihat hasil yang sudah kita peroleh.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/14.jpg?w=604" title="Screenshot Clean Corporate 14" data-recalc-dims="1" />

### Langkah 6 &#8211; Quote Area

Pilih layer paragraf teks di dalam layer group *get a quote* dan ubah menjadi smart object. Buat guide di sekitar layer dan seleksi dengan tool crop. Sembunyikan layer-layer background. Simpan dengan nama &#8220;quote-text.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2011/07/15.jpg?w=604" title="Screenshot Clean Corporate 15" data-recalc-dims="1" />

Selanjutnya pilih layer shape button dan text button. Gabungkan dengan menekan Ctrl+E. Buat guide sesuai layer dan seleksi dengan tool crop. Sembunyikan layer-layer background dan simpan dengan nama &#8220;quote-button.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/16.jpg?w=604" title="Screenshot Clean Corporate 16" data-recalc-dims="1" />

Sekarang masukkan kode HTML berikut diantara kode `<aside id="quote">` dan `</aside>`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;p&gt;Sed nunc risus, ultrices nec tristique non, ultrices sed risus.
&lt;a href="#"&gt;get a quote&lt;/a&gt;&lt;/p&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Atur tampilannnya dengan CSS.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Quotes */</span>
<span style="color: #cc00cc;">#quote</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/orange-bg.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">border-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> rgba<span style="color: #00AA00;">&#40;</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span>.1<span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">80px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#quote</span> p<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/quote-text.png</span><span style="color: #00AA00;">&#41;</span> <span style="color: #993333;">no-repeat</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">26px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">18px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">44px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#quote</span> a<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/quote-button.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">44px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">162px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-indent</span><span style="color: #00AA00;">:</span><span style="color: #933;">-9999px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 7 &#8211; Informasi Produk

Buat seleksi dengan tool crop pada background informasi produk. Simpan dengan nama &#8220;noise-bg.jpg&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2011/07/17.jpg?w=604" title="Screenshot Clean Corporate 17" data-recalc-dims="1" />

Pilih layer gambar produk dan buat guide di sekitar layer. Seleksi dengan tool crop sesuai guide. Sembunyikan layer-layer background. Simpan gambar dengan nama &#8220;info1.png&#8221;. Ulangi langkah ini untuk gambar-gambar info produk lainnya dan simpan masing-masing gambar dengan nama &#8220;info2.png&#8221;, &#8220;info3.png&#8221;, &#8220;info4.png&#8221;, &#8220;info5.png&#8221; dan &#8220;info6.png&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2011/07/18.jpg?w=604" title="Screenshot Clean Corporate 18" data-recalc-dims="1" />

Sekarang tambahkan kode HTML berikut diantara kode `<div id="info-wrapper">` dan `</div><!--End info wrapper-->`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;div id="info"&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info1.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info2.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info3.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info4.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info5.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Vivamus tempor urna arcu&lt;/h2&gt;
&lt;img alt="Product info" src="img/info6.png"/&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum interdum convallis.&lt;/p&gt;
&lt;/article&gt;
&lt;/div&gt;&lt;!--End info--&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Atur tampilannya dengan CSS.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Info */</span>
<span style="color: #cc00cc;">#info-wrapper</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/noise-bg.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">border-top</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> rgba<span style="color: #00AA00;">&#40;</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span><span style="color: #cc66cc;">255</span><span style="color: #00AA00;">,</span>.1<span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">border-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#e5a975</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-shadow</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">1px</span> <span style="color: #cc00cc;">#ffbd84</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#info</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">40px</span> <span style="color: #cc66cc;"></span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#info</span> article<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">300px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#info</span> h2<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#814e22</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #933;">24px</span> Georgia<span style="color: #00AA00;">,</span>Serif<span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">20px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#info</span> p<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#794f2a</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;">1.5</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">210px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#info</span> img<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 8 &#8211; Footer

Buat seleksi dengan tool crop pada background footer. Simpan dengan nama &#8220;footer-bg.jpg&#8221;.

<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/19.jpg?w=604" title="Screenshot Clean Corporate 19" data-recalc-dims="1" />

Tambahkan kode berikut diantara kode `<footer>` dan `</footer>`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;nav&gt;
&lt;a href="#"&gt;Portfolio&lt;/a&gt;
&lt;a href="#"&gt;Blog&lt;/a&gt;
&lt;a href="#"&gt;Pricing&lt;/a&gt;
&lt;a href="#"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Atur tampilan footer dengan CSS.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Footer */</span>
footer<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #993333;">transparent</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">img/footer-bg.jpg</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">44px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
footer nav<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">font</span><span style="color: #00AA00;">:</span><span style="color: #933;">12px</span> georgia<span style="color: #00AA00;">,</span><span style="color: #993333;">serif</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">line-height</span><span style="color: #00AA00;">:</span><span style="color: #933;">44px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-transform</span><span style="color: #00AA00;">:</span><span style="color: #993333;">uppercase</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">960px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
footer a<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">border-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#f3c59c</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#f3c59c</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">15px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
footer a<span style="color: #3333ff;">:first-child</span><span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">border-left</span><span style="color: #00AA00;">:</span><span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding-left</span><span style="color: #00AA00;">:</span><span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

### Hasil Akhir

Inilah hasil akhir yang kita dapatkan, klik gambar untuk melihat live-demo.

[<img alt="tutorial clean corporate website" class="aligncenter size-full" src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2011/07/final.jpg?w=604" title="Screenshot Clean Corporate Final" data-recalc-dims="1" />][2]

### Download File Tutorial

Klik tombol di bawah ini untuk mengunduh file hasil tutorial.

<p style="display: block; margin: 30px auto; text-align: center;">
  <a style="background: #BF6409; color: #fff; font: 700 1.75em Arial,Sans-Serif; padding: 8px 14px 7px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); width: auto;" href="http://cekerholic.com/wp-content/plugins/download-monitor/download.php?id=9">DOWNLOAD</a>
</p>

 [1]: http://cekerholic.com/archives/2011/06/free-html-template-clean-corporate-site.html
 [2]: http://db.tt/ukyQiIF
 [3]: http://psdfreemium.com/clean-corporate-site-with-subtle-texture/
 [4]: http://notepad-plus-plus.org/