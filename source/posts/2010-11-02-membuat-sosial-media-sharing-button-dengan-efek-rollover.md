---
title: Membuat Sosial Media Sharing Button dengan Efek Rollover
author: Aris FM
layout: post
permalink: /archives/2010/11/membuat-sosial-media-sharing-button-dengan-efek-rollover.html
categories:
  - Design
tags:
  - css
  - css sprite
  - efek rollover
---
Kemarin saya menulis tentang [CSS Sprites dan contoh penggunaannya][1]. Nah kali ini saya akan mengajak anda untuk membuat sebuah Sosial Media Sharing Button/Menu dengan menggunakan teknik CSS Sprites.

### Preview

Inilah hasil akhir dari tutorial ini, klik gambar untuk melihat [live-demo][2]

[<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/share-final.jpg?fit=451%2C161" alt="Share Button Final" class="aligncenter size-full wp-image-473" data-recalc-dims="1" />][2]

<!--more-->

### Langkah 1 &#8211; Persiapan

Sebelum memulai sebaiknya anda berdoa dulu *ini tidak wajib <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_biggrin.gif?w=604' alt=':D' class='wp-smiley' data-recalc-dims="1" /> *. Pertama, download dulu [paket ikon sosial media][3] dari situs [Komodo Media][4]. Kemudian bukalah Photoshop, dan buatlah layer baru dengan ukuran 187px X 64px.

<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/1.jpg?fit=582%2C377" alt="New Document" class="aligncenter size-full wp-image-467" data-recalc-dims="1" />

Kemudian buatlah guide horizontal pada posisi 32px. Untuk membuat guide klik View > New Guide.

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/2-.jpg?fit=237%2C164" alt="New guide" class="aligncenter size-full wp-image-479" data-recalc-dims="1" />

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/2.jpg?fit=398%2C154" alt="Guide Horizontal"class="aligncenter size-full wp-image-468" data-recalc-dims="1" />

### Langkah 2

Ambil 6 buah ikon yang berukuran 32px, yaitu: twitter, facebook, delicious, digg, tumblr dan stumbleupon. Letakkan diatas guide dan beri jarak antar ikon 1px.

<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/3.jpg?fit=408%2C168" alt="Icon Position" class="aligncenter size-full wp-image-469" data-recalc-dims="1" />

### Langkah 3

Gabungkan semua layer ikon dengan memilihnya lalu tekan Ctrl+E atau klik Layer > Merge Layers. Setelah itu duplikat layer ikon dengan Ctrl+J atau klik Layer > Duplicate Layer. Geser posisi layer duplikat ke bawah guide.

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/4.jpg?fit=241%2C237" alt="Select Icon Layer" class="aligncenter size-full wp-image-470" data-recalc-dims="1" />

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/5.jpg?fit=444%2C207" alt="Geser layer duplikat" class="aligncenter size-full wp-image-471" data-recalc-dims="1" />

### Langkah 4

Ubah layer ikon duplikat menjadi hitam putih dengan menekan Ctrl+Alt+Shift+B atau klik Image > Adjusments > Black &#038; White. 

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/6.jpg?fit=550%2C539" alt="Convert to Black White" class="aligncenter size-full wp-image-472" data-recalc-dims="1" />

### Langkah 5

Simpan dokumen dengan mengklik File > Save for Web &#038; Devices atau tekan Ctrl+Alt+Shift+S. Simpan dengan format PNG transparan dengan nama share_sprite.png.

<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/7.jpg?fit=295%2C198" alt="Save for web " class="aligncenter size-full wp-image-466" data-recalc-dims="1" />

### Langkah 6 &#8211; Membuat Kode HTML

Sekarang mari kita buat markah HTML-nya dulu, jangan lupa untuk memberi CSS class pada setiap elemen link sosial media.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
7
8
</pre>
      </td>
      
      <td class="code">
        <pre class="html" style="font-family:monospace;">	&lt;div id="share-button"&gt;
		&lt;a class="twitshare" href="http://twitter.com/home?status=Currently%20reading http://yourwebsite.com"&gt;&lt;/a&gt;
		&lt;a class="fbshare" href="http://www.facebook.com/sharer.php?u=http://yourwebsite.com"  title="Share this on Facebook" &gt;&lt;/a&gt;
		&lt;a class="delishare" href="http://del.icio.us/post?url=http://yourwebsite.com" title="bookmark on delicious"&gt;&lt;/a&gt;
		&lt;a class="diggshare" href="http://digg.com/submit?url=http://yourwebsite.com" title="Digg it"&gt;&lt;/a&gt;
		&lt;a class="tumblrshare" href="http://www.tumblr.com/share?v=3&amp;u=http%3A%2F%2Fourwebsite.com%2F" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','www.tumblr.com']);" title="Post to Tumblr"&gt;&lt;/a&gt;
		&lt;a class="stumbleshare" href="http://www.stumbleupon.com/submit?url=" title="Stumble This Page" &gt;&lt;/a&gt;
	&lt;/div&gt;</pre>
      </td>
    </tr>
  </table>
</div>

### Langkah 7 &#8211; CSS Sprites in Action

Sekarang saatnya <del>minum</del> bermain CSS Sprites. Sebelum mulai menulis CSS sebaiknya kita memahami dulu markah HTML-nya. Di markah HTML semua link sosial media dikumpulkan dalam sebuah elemen induk `<div id="share-button">`, kemudian di setiap link sosial media kita buat class CSS yang berbeda. Nah class-class CSS ini gunanya adalah untuk mengatur posisi gambar dengan menggeser koordinat X dan Y gambar.

Sekarang mari kita mulai menulis kode CSS. Pertama kita atur dulu tampilan elemen induknya, atur lebarnya agar nantinya posisi ikon tidak bergeser, buat juga sebuah garis di bagian bawah.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
7
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">	<span style="color: #cc00cc;">#share-button</span><span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">border-bottom</span><span style="color: #00AA00;">:</span><span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> <span style="color: #cc00cc;">#adadad</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">10px</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">222px</span><span style="color: #00AA00;">;</span> 
	<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Sekarang buat dulu pengaturan global untuk link sosial media :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>8
9
10
11
12
13
14
15
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">	<span style="color: #cc00cc;">#share-button</span> a<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-image</span><span style="color: #00AA00;">:</span><span style="color: #993333;">url</span><span style="color: #00AA00;">&#40;</span><span style="color: #ff0000; font-style: italic;">share_sprite.png</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">24px</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">8px</span> <span style="color: #933;">5px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">outline</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Kode di atas artinya kira-kira seperti ini: gambar master dipanggil agar tampil, tinggi setiap link adalah 24px, jarak antar link adalah 8px dari atas dan 5px dari kanan, lebar setiap link adalah 32px.

Selanjutnya kita buat pengaturan global untuk link sosial media ketika salah satu link di-hover atau ditelusuri dengan tombol tab. Dalam CSS langkah ini disebut membuat pseudo class :hover dan :focus.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>16
17
18
19
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">	<span style="color: #cc00cc;">#share-button</span> a<span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #cc00cc;">#share-button</span> a<span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span><span style="color: #933;">28px</span><span style="color: #00AA00;">;</span>
		<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">4px</span> <span style="color: #933;">5px</span> <span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Kode di atas artinya adalah : ketika link di-hover atau ditelusuri dengan tombol tab, tinggi link akan berubah menjadi 28px dan jarak link berubah menjadi 4px dari atas.

Cobalah lakukan tes di peramban, hasilnya akan seperti ini:

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/share1.jpg?fit=433%2C171" alt="tampilan pertama gambar" class="aligncenter size-full wp-image-507" data-recalc-dims="1" />

Link tampil dalam bentuk gambar ikon dengan posisi yang sama, ketika di-hover ikon akan sedikit menyembul.

Agar ikon sosial media tampil sesuai dengan link-nya, kita perlu menggeser posisi gambar pada setiap link. Nah inilah yang disebut CSS Sprites. Sekarang buatlah kode CSS berikut:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">	.twitshare<span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span>
	.fbshare<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">156px</span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span>
	.delishare<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">125px</span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span>
	.diggshare<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">94px</span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span>
	.tumblrshare<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">63px</span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span>
	.stumbleshare<span style="color: #00AA00;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">32px</span> <span style="color: #933;">32px</span><span style="color: #00AA00;">;</span>
	<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Dari kode diatas kita bisa melihat bahwa yang berubah-ubah posisinya hanya koordinat X, sedangkan koordinat Y tetap pada posisi 32px.

Sekarang kita atur posisi gambar ketika di-hover atau ditelusuri dengan tab:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">		<span style="color: #6666ff;">.twitshare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.twitshare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span>
		<span style="color: #6666ff;">.fbshare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.fbshare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">156px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span>
		<span style="color: #6666ff;">.delishare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.delishare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">125px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span>
		<span style="color: #6666ff;">.diggshare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.diggshare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">94px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span>
		<span style="color: #6666ff;">.tumblrshare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.tumblrshare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">63px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span>
		<span style="color: #6666ff;">.stumbleshare</span><span style="color: #3333ff;">:hover</span><span style="color: #00AA00;">,</span><span style="color: #6666ff;">.stumbleshare</span><span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">&#123;</span>
			<span style="color: #000000; font-weight: bold;">background-position</span><span style="color: #00AA00;">:</span><span style="color: #933;">32px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
		<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Dari kode di atas dapat kita lihat bahwa koordinat Y bergeser kembali ke posisi 0.

Sekarang coba lakukan tes di peramban, tampilannya seharusnya akan seperti ini:

<img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/10/share2.jpg?fit=374%2C221" alt="Hasil CSS Sprite" class="aligncenter size-full wp-image-509" data-recalc-dims="1" />

### Hasil Akhir

Inilah hasil akhir dari tutorial ini, sebuah sosial media sharing menu dengan efek Rollover, silakan klik gambar untuk melihat [live-demo][2]-nya

[<img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/share-final.jpg?fit=451%2C161" alt="Share Button Final" class="aligncenter size-full wp-image-473" data-recalc-dims="1" />][2]

### Download File Tutorial

Silakan download file hasil tutorial dengan meng-klik tombol berikut:

<p style="display:block;margin:30px auto;text-align:center">
  <a href="http://cekerholic.com/wp-content/plugins/download-monitor/download.php?id=8" style="background:#BF6409;color:#fff;font:700 1.75em Arial,Sans-Serif;padding:8px 14px 7px;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-moz-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-webkit-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);width:auto;">DOWNLOAD</a>
</p>

 [1]: http://cekerholic.com/archives/2010/10/mengenal-css-sprites.html
 [2]: http://cekerholic.com/demo/share-button/
 [3]: http://d2dnrmagaqciul.cloudfront.net/downloads/social_networking_iconpack.zip
 [4]: http://www.komodomedia.com/