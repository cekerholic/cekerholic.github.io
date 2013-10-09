---
title: Mencegah Komentar Spam di WordPress dengan jQuery
author: Aris FM
layout: post
permalink: /archives/2012/10/mencegah-spam-dengan-jquery.html
categories:
  - Wordpress
---
Spam adalah musuh sekaligus teman setia blogger <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_biggrin.gif?w=604' alt=':D' class='wp-smiley' data-recalc-dims="1" /> . Saat tulisan ini dibuat, akismet, plugin penangkal spam di blog ini saja sudah menjaring hampir 15.000 komentar spam. Sebuah angka yang sangat WOW!, hampir 15 kali lipat jumlah komentar non-spam. Saya akan berbagi sedikit tips untuk mencegah/mengurangi spam dengan menggunakan jQuery.

Pada dasarnya spambot bekerja dengan cara memindai situs dan mencari pola yang umum digunakan dalam sebuah form komentar/kontak. Form komentar di WordPress misalnya, hampir dipastikan mempunyai ID `commentform`. Bot juga dengan mudah bisa mengisi setiap field yang tersedia dengan menggunakan nama field sebagai petunjuk, misalnya nama atau email.

Form berfungsi karena adanya form-handler, sebuah program yang memproses informasi dari form. Tanpa form-handler, form tidak akan berfungsi. Di WordPress form komentar di-handle oleh `wp-comments-post.php`, lokasinya terletak di root directory (yourdomain.com/wp-comments-post.php). Form-handler bisa dilihat di atribut `action` dalam tag HTML `<form>`. Berikut contohnya, lihat yang berwarna merah:

<pre>&lt;form <span style="color:#f00">action="http://yourdomain.com/wp-comments-post.php"</span> method="post" id="commentform"&gt;</pre>

Nah yang akan kita lakukan adalah menghilangkan atribut `action` dari tag `<form>` dan menampilkannya kembali ketika ada interaksi berupa klik dari pengguna. Dengan cara ini bot tidak dapat bekerja karena tidak adanya interaksi berupa klik dari bot (ingat mereka bekerja secara otomatis). Berikut ini kode yang kita perlukan:

<pre>&lt;script type="text/javascript"&gt;
	$(document).ready(function(){
		$('#commentform').removeAttr('action');
		$('#commentform input, #commentform textarea').click(function(){
			$('#commentform').attr('action', '/wp-comments-post.php')
		});
	});
&lt;/script&gt;</pre>

Letakkan kode diatas di dalam tag HTML `<head>` atau diatas `<body>`.

Teknik ini sebenarnya bisa digunakan di mana saja, tidak hanya untuk WordPress. Intinya adalah form hanya bisa bekerja ketika ada interaksi dengan pengguna. 

Lalu bagaimana jika bot juga mematikan javascript? Gampang, hilangkan aja form-nya ketika javascript dimatikan <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_wink.gif?w=604' alt=';)' class='wp-smiley' data-recalc-dims="1" /> .

<pre>&lt;noscript&gt;
&lt;style&gt;form{display:none}&lt;/style&gt;
&lt;/noscript&gt;</pre>