---
title: 'WordPress Tips: Membuat Form Kontak tanpa Plugin'
author: Aris FM
layout: post
permalink: /archives/2010/10/bikin-kontak-form-blog-sendiri-yuk.html
categories:
  - Wordpress
tags:
  - diy
  - form kontak
  - page template
---
Dalam sebuah blog biasanya terdapat halaman kontak untuk menghubungi pemilik blog tersebut. Bagi pengguna WordPress, ada cukup banyak plugin untuk membuat/menampilkan form kontak seperti [Contact Form 7][1], [Super Contact Form][2] dan lain-lain. Silakan anda cari sendiri di [Directory Plugin WordPress][3].

Nah gimana kalau kita bikin sendiri aja? Caranya gamnpang kok. Silakan ikuti tutorial berikut.

**Langkah 1: Membuat *Page Template* Form Kontak**  
Buatlah sebuah file baru di direktori theme WordPress anda dan beri nama &#8220;form-kontak.php&#8221;. Kemudian buka file yang kita buat dan masukkan baris kode berikut:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
	<span style="color: #666666; font-style: italic;">/* Template Name: Form Kontak */</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Langkah 2: Membuat `the_loop()` dari Form Kontak**  
Setiap post template WordPress harus menggunakan template tag `the_loop()` agar bisa menampilkan konten dari halaman. Jadi sekarang mari kita buat `the_loop()`-nya dulu. Silakan masukkan kode berikut :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> get_header<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Memanggil header.php (header blog) ?&gt;</span>
<span style="color: #339933;">&lt;</span>div id<span style="color: #339933;">=</span><span style="color: #0000ff;">"kontak"</span><span style="color: #339933;">&gt;&lt;!--</span>Kontak Wrapper<span style="color: #339933;">--&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">while</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> the_post<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
		&lt;h1&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_title<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/h1&gt;
			<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_content<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Akhir the_loop ?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endwhile</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/div&gt;&lt;!--Akhir Kontak Wrapper--&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_footer<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Memanggil footer.php (footer blog) ?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Langkah 3: Membuat Form Komentar**  
Kode pada langkah 2 adalah kode standar dari setiap post template WordPress (single.php, index.php, archives.php, dan search.php), sekarang kita mulai masuk bagian inti, yaitu membuat form komentar. Oke sekarang masukkan kode berikut di bawah `<?php the_content(); //Akhir the_loop ?>`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">	&lt;!-- Form Komentar --&gt;
	&lt;form action="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" id="contactForm" method="post"&gt;
		&lt;p&gt;Silakan menghubungi saya via form kontak berikut ini&lt;/p&gt;&lt;!-- Kata pembuka yang ditampilkan di bagian atas form komentar --&gt;
			&lt;p&gt;&lt;label for="contactName"&gt;Name&lt;/label&gt;
				&lt;input type="text" name="contactName" id="contactName" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" class="requiredField" /&gt;
				<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$nameError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
					&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$nameError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt; 
				<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
			&lt;/p&gt;
			&lt;p&gt;&lt;label for="email"&gt;Email&lt;/label&gt;
				&lt;input type="text" name="email" id="email" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>  <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" class="requiredField email" /&gt;
				<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
					&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$emailError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
				<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
			&lt;/p&gt;
			&lt;p class="textarea"&gt;&lt;label for="commentsText"&gt;Pesan&lt;/label&gt;
				&lt;textarea name="comments" id="commentsText" rows="20" cols="30" class="requiredField"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'stripslashes'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">stripslashes</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/textarea&gt;
					<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$commentError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
						&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$commentError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt; 
					<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
			&lt;/p&gt;
				&lt;p class="inline"&gt;&lt;input type="checkbox" name="sendCopy" id="sendCopy" value="true"<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">' checked="checked"'</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> /&gt;&lt;label for="sendCopy"&gt;Kirim salinan pesan ini ke email Anda&lt;/label&gt;&lt;/p&gt;
				&lt;p class="screenReader"&gt;&lt;label for="checking" class="screenReader"&gt;Biarkan seperti ini!&lt;/label&gt;&lt;input type="text" name="checking" id="checking" class="screenReader" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>  <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" /&gt;&lt;/p&gt;&lt;!--Chaptca rahasia--&gt;
				&lt;p class="buttons"&gt;&lt;input type="hidden" name="submitted" id="submitted" value="true" /&gt;&lt;button type="submit"&gt;Kirim &raquo;&lt;/button&gt;&lt;/p&gt;
	&lt;/form&gt;</pre>
      </td>
    </tr>
  </table>
</div>

**Langkah 4: Mengatur Fungsi Form**  
Kita sudah memiliki form komentar, tapi belum berfungsi apa-apa karena pengaturan form kontaknya belum dibuat. Sekarang kita atur dulu fungsi form, masukkan kode berikut di atas template tag `<?php get_header(); //Memanggil header.php (header blog) ?>` :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> 
<span style="color: #666666; font-style: italic;">//Mengecek apakah isi form sudah dikirim</span>
<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'submitted'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
&nbsp;
	<span style="color: #666666; font-style: italic;">//Mengecek apakah chaptcha rahasia terisi</span>
	<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">!==</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #000088;">$captchaError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom nama sudah diisi</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$nameError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Silakan isi nama Anda terlebih dahulu'</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Pesan error jika kolom nama kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$name</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom alamat email sudah diisi dan valid</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span>  <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$emailError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Anda lupa memasukkan alamat email anda'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika kolom email kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">eregi</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$"</span><span style="color: #339933;">,</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$emailError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Alamat email yang Anda masukkan salah'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika alamat email tidak valid</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$email</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom isi pesan sudah disi</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$commentError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Apakah anda mau mengirim pesan kosong? silakan diisi dulu pesan anda'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika kolom pesan masih kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'stripslashes'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$comments</span> <span style="color: #339933;">=</span> <span style="color: #990000;">stripslashes</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$comments</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengirimkan pesan, jika semua kolom telah diisi dengan valid</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$hasError</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
&nbsp;
			<span style="color: #000088;">$emailTo</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'name@domain.com'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Alamat email tujuan, ganti dengan email anda</span>
			<span style="color: #000088;">$subject</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Pesan via blog dari '</span><span style="color: #339933;">.</span><span style="color: #000088;">$name</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Judul pesan yang masuk ke email kita dari form kontak</span>
			<span style="color: #000088;">$sendCopy</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Opsi untuk mengirimkan salinan pesan kepada pengirim</span>
			<span style="color: #000088;">$body</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">"Name: <span style="color: #006699; font-weight: bold;">$name</span> <span style="color: #000099; font-weight: bold;">\n</span><span style="color: #000099; font-weight: bold;">\n</span>Email: <span style="color: #006699; font-weight: bold;">$email</span> <span style="color: #000099; font-weight: bold;">\n</span><span style="color: #000099; font-weight: bold;">\n</span>Pesan anda: <span style="color: #006699; font-weight: bold;">$comments</span>"</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Isi Email</span>
			<span style="color: #000088;">$headers</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'From: My Site &lt;'</span><span style="color: #339933;">.</span><span style="color: #000088;">$emailTo</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'&gt;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">"<span style="color: #000099; font-weight: bold;">\r</span><span style="color: #000099; font-weight: bold;">\n</span>"</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'Reply-To: '</span> <span style="color: #339933;">.</span> <span style="color: #000088;">$email</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Header email</span>
&nbsp;
			<span style="color: #990000;">mail</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailTo</span><span style="color: #339933;">,</span> <span style="color: #000088;">$subject</span><span style="color: #339933;">,</span> <span style="color: #000088;">$body</span><span style="color: #339933;">,</span> <span style="color: #000088;">$headers</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
			<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$sendCopy</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$subject</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Salinan pesan anda di blog Cekerholic'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Judul pesan salinan kepada pengirim apabila checkbox kirim salinan dicentang</span>
				<span style="color: #000088;">$headers</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'From: Blog Aris FM &lt;name@domain.com&gt;'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Header email pesan salinan, silakan diedit nama dan alamat emailnya</span>
				<span style="color: #990000;">mail</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$email</span><span style="color: #339933;">,</span> <span style="color: #000088;">$subject</span><span style="color: #339933;">,</span> <span style="color: #000088;">$body</span><span style="color: #339933;">,</span> <span style="color: #000088;">$headers</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span>
&nbsp;
			<span style="color: #000088;">$emailSent</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
&nbsp;
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Sekarang form kontak kita sudah berfungsi, masih ada beberapa langkah lagi agar form kontak semakin sempurna.

**Langkah 5: Membuat pemberitahuan bahwa pesan yang dikirim telah sampai**  
Pengirim pesan tentu penasaran apakah pesan yang dikirimnya sampai atau tidak, untuk itu kita perlu menampilkan pemberitahuan bahwa pesan mereka telah terkirim atau tidak, silakan masukkan kode berikut di bawah kode `<div id="kontak"><!--Kontak Wrapper-->`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailSent</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #000088;">$emailSent</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
		&lt;h1&gt;Terima kasih, <span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$name</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/h1&gt;
		&lt;p&gt;Pesan Anda telah terkirim, saya akan segera membalasnya secepat mungkin :)&lt;/p&gt;
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

dan kode berikut di atas baris `<!-- Form Komentar -->`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$hasError</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">||</span> <span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$captchaError</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
		&lt;p class="error"&gt;Maaf, tampaknya ada masalah dalam mengirim pesan Anda, silakan dicoba lagi&lt;p&gt;
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

terakhir masukkan kode berikut ini di atas tag `</div><!--Akhir Kontak Wrapper-->`

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Berikut hasil akhir dari Form Kontak yang baru kita buat:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
	<span style="color: #666666; font-style: italic;">/* Template Name: Form Kontak */</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> 
<span style="color: #666666; font-style: italic;">//Mengecek apakah isi form sudah dikirim</span>
<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'submitted'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
&nbsp;
	<span style="color: #666666; font-style: italic;">//Mengecek apakah chaptcha rahasia terisi</span>
	<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">!==</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #000088;">$captchaError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom nama sudah diisi</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$nameError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Silakan isi nama Anda terlebih dahulu'</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Pesan error jika kolom nama kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$name</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom alamat email sudah diisi dan valid</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span>  <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$emailError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Anda lupa memasukkan alamat email anda'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika kolom email kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">eregi</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$"</span><span style="color: #339933;">,</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$emailError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Alamat email yang Anda masukkan salah'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika alamat email tidak valid</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$email</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengecek apakah kolom isi pesan sudah disi</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">===</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000088;">$commentError</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Apakah anda mau mengirim pesan kosong? silakan diisi dulu pesan anda'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Pesan error jika kolom pesan masih kosong</span>
			<span style="color: #000088;">$hasError</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'stripslashes'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$comments</span> <span style="color: #339933;">=</span> <span style="color: #990000;">stripslashes</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$comments</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">//Mengirimkan pesan, jika semua kolom telah diisi dengan valid</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$hasError</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
&nbsp;
			<span style="color: #000088;">$emailTo</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'name@domain.com'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Alamat email tujuan, ganti dengan email anda</span>
			<span style="color: #000088;">$subject</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Pesan via blog dari '</span><span style="color: #339933;">.</span><span style="color: #000088;">$name</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Judul pesan yang masuk ke email kita dari form kontak</span>
			<span style="color: #000088;">$sendCopy</span> <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Opsi untuk mengirimkan salinan pesan kepada pengirim</span>
			<span style="color: #000088;">$body</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">"Name: <span style="color: #006699; font-weight: bold;">$name</span> <span style="color: #000099; font-weight: bold;">\n</span><span style="color: #000099; font-weight: bold;">\n</span>Email: <span style="color: #006699; font-weight: bold;">$email</span> <span style="color: #000099; font-weight: bold;">\n</span><span style="color: #000099; font-weight: bold;">\n</span>Pesan anda: <span style="color: #006699; font-weight: bold;">$comments</span>"</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Isi Email</span>
			<span style="color: #000088;">$headers</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'From: My Site &lt;'</span><span style="color: #339933;">.</span><span style="color: #000088;">$emailTo</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'&gt;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">"<span style="color: #000099; font-weight: bold;">\r</span><span style="color: #000099; font-weight: bold;">\n</span>"</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'Reply-To: '</span> <span style="color: #339933;">.</span> <span style="color: #000088;">$email</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Header email</span>
&nbsp;
			<span style="color: #990000;">mail</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailTo</span><span style="color: #339933;">,</span> <span style="color: #000088;">$subject</span><span style="color: #339933;">,</span> <span style="color: #000088;">$body</span><span style="color: #339933;">,</span> <span style="color: #000088;">$headers</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
			<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$sendCopy</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
				<span style="color: #000088;">$subject</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'Salinan pesan anda di blog Cekerholic'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Judul pesan salinan kepada pengirim apabila checkbox kirim salinan dicentang</span>
				<span style="color: #000088;">$headers</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'From: Blog Aris FM &lt;name@domain.com&gt;'</span><span style="color: #339933;">;</span><span style="color: #666666; font-style: italic;">//Header email pesan salinan, silakan diedit nama dan alamat emailnya</span>
				<span style="color: #990000;">mail</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$email</span><span style="color: #339933;">,</span> <span style="color: #000088;">$subject</span><span style="color: #339933;">,</span> <span style="color: #000088;">$body</span><span style="color: #339933;">,</span> <span style="color: #000088;">$headers</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">&#125;</span>
&nbsp;
			<span style="color: #000088;">$emailSent</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
&nbsp;
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_header<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Memanggil header.php (header blog) ?&gt;</span>
<span style="color: #339933;">&lt;</span>div id<span style="color: #339933;">=</span><span style="color: #0000ff;">"kontak"</span><span style="color: #339933;">&gt;&lt;!--</span>Kontak Wrapper<span style="color: #339933;">--&gt;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailSent</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #000088;">$emailSent</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
		&lt;h1&gt;Terima kasih, <span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$name</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/h1&gt;
		&lt;p&gt;Pesan Anda telah terkirim, saya akan segera membalasnya secepat mungkin :)&lt;/p&gt;
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&nbsp;
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">while</span> <span style="color: #009900;">&#40;</span>have_posts<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">:</span> the_post<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
		&lt;h1&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_title<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/h1&gt;
			<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_content<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Akhir the_loop ?&gt;</span>
&nbsp;
		<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$hasError</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">||</span> <span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$captchaError</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
			&lt;p class="error"&gt;Maaf, tampaknya ada masalah dalam mengirim pesan Anda, silakan dicoba lagi&lt;p&gt;
		<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
				&lt;!-- Form Komentar --&gt;
				&lt;form action="<span style="color: #000000; font-weight: bold;">&lt;?php</span> the_permalink<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>" id="contactForm" method="post"&gt;
					&lt;p&gt;Silakan menghubungi saya via form kontak berikut ini&lt;/p&gt;&lt;!-- Kata pembuka yang ditampilkan di bagian atas form komentar --&gt;
					&lt;p&gt;&lt;label for="contactName"&gt;Name&lt;/label&gt;
						&lt;input type="text" name="contactName" id="contactName" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'contactName'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" class="requiredField" /&gt;
						<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$nameError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
							&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$nameError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt; 
						<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
					&lt;/p&gt;
					&lt;p&gt;&lt;label for="email"&gt;Email&lt;/label&gt;
						&lt;input type="text" name="email" id="email" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>  <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" class="requiredField email" /&gt;
						<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$emailError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
							&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$emailError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt;
						<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
					&lt;/p&gt;
					&lt;p class="textarea"&gt;&lt;label for="commentsText"&gt;Pesan&lt;/label&gt;
						&lt;textarea name="comments" id="commentsText" rows="20" cols="30" class="requiredField"&gt;<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">function_exists</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'stripslashes'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">echo</span> <span style="color: #990000;">stripslashes</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span> <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'comments'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span> <span style="color: #009900;">&#125;</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/textarea&gt;
							<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$commentError</span> <span style="color: #339933;">!=</span> <span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
								&lt;span class="error"&gt;<span style="color: #000000; font-weight: bold;">&lt;?=</span><span style="color: #000088;">$commentError</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>&lt;/span&gt; 
							<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
					&lt;/p&gt;
						&lt;p class="inline"&gt;&lt;input type="checkbox" name="sendCopy" id="sendCopy" value="true"<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&&</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'sendCopy'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">==</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span> <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">' checked="checked"'</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span> /&gt;&lt;label for="sendCopy"&gt;Kirim salinan pesan ini ke email Anda&lt;/label&gt;&lt;/p&gt;
						&lt;p class="screenReader"&gt;&lt;label for="checking" class="screenReader"&gt;Biarkan seperti ini!&lt;/label&gt;&lt;input type="text" name="checking" id="checking" class="screenReader" value="<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>  <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$_POST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'checking'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span><span style="color: #000000; font-weight: bold;">?&gt;</span>" /&gt;&lt;/p&gt;&lt;!--Chaptca rahasia--&gt;
						&lt;p class="buttons"&gt;&lt;input type="hidden" name="submitted" id="submitted" value="true" /&gt;&lt;button type="submit"&gt;Kirim &raquo;&lt;/button&gt;&lt;/p&gt;
				&lt;/form&gt;
&nbsp;
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endwhile</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #b1b100;">endif</span><span style="color: #339933;">;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
	<span style="color: #000000; font-weight: bold;">&lt;?php</span> <span style="color: #009900;">&#125;</span> <span style="color: #000000; font-weight: bold;">?&gt;</span>
&lt;/div&gt;&lt;!--Akhir Kontak Wrapper--&gt;
<span style="color: #000000; font-weight: bold;">&lt;?php</span> get_footer<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Memanggil footer.php (footer blog) ?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Langkah 6: Mengatur Tampilan Form Kontak**  
Form kontak kita memang sudah jadi, tapi tampilannya belum diatur kan? sekarang mari kita atur tampilannya dengan CSS. Masukkan kode ini di style.css :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#kontak</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #cc66cc;"></span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">overflow</span><span style="color: #00AA00;">:</span><span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> form<span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">50px</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">100%</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> label <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">cursor</span><span style="color: #00AA00;">:</span><span style="color: #993333;">pointer</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">block</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">padding-right</span><span style="color: #00AA00;">:</span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">100px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> input<span style="color: #00AA00;">,</span> <span style="color: #cc00cc;">#kontak</span> textarea <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">214px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> textarea <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span> <span style="color: #933;">300px</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span><span style="color: #933;">500px</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> input<span style="color: #3333ff;">:focus</span><span style="color: #00AA00;">,</span> ol<span style="color: #cc00cc;">#kontak</span> textarea<span style="color: #3333ff;">:focus </span><span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">background-color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#f2f3f6</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">border-color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#ff9800</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #6666ff;">.error</span> <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#f00</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> p <span style="color: #6666ff;">.error</span> <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">12px</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span> <span style="color: #933;">20px</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> p<span style="color: #6666ff;">.textarea</span> <span style="color: #6666ff;">.error</span> <span style="color: #00AA00;">&#123;</span><span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">block</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span><span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">100px</span><span style="color: #00AA00;">;</span><span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> p<span style="color: #6666ff;">.screenReader</span> <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> p<span style="color: #6666ff;">.inline</span> input <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span>
<span style="color: #cc00cc;">#kontak</span> p<span style="color: #6666ff;">.inline</span> label <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inline</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">none</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Langkah 7: Menampilkan Form Kontak di blog**  
Yay! akhirnya sampai juga di langkah terakhir. Langkah ini cukup mudah, yang perlu dilakukan hanyalah masuk ke dasbor WordPress, buat page baru, buat judul page dan aktifkan page template Form Kontak.

<div id="attachment_384" class="wp-caption aligncenter" style="width: 307px">
  <a href="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/kontak-form.jpg"><img src="http://i1.wp.com/cekerholic.com/wp-content/uploads/2010/10/kontak-form.jpg?fit=297%2C303" alt="" title="kontak-form" class="size-full wp-image-384" data-recalc-dims="1" /></a><p class="wp-caption-text">
    Cara mengaktifkan halaman kontak
  </p>
</div>

Dan &#8230;.. taraaaaa! form kontak blog kita udah jadi. Contohnya silakan dilihat di [halaman kontak][4] blog saya. 

Jika anda malas mengikuti tutorialnya, silakan download file-nya dengan mengklik tombol ini :

<a href="http://cekerholic.com/wp-content/plugins/download-monitor/download.php?id=2" style="background:#91BD09;color:#fff;display:block;font:700 1.75em Arial,Sans-Serif;padding:8px 14px 7px;margin:30px auto;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-moz-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);-webkit-box-shadow:0 1px 3px rgba(0, 0, 0, 0.6);width:160px;">DOWNLOAD</a>

 [1]: http://wordpress.org/extend/plugins/contact-form-7/
 [2]: http://wordpress.org/extend/plugins/super-contact-form/
 [3]: http://wordpress.org/extend/plugins/
 [4]: http://cekerholic.com/kontak