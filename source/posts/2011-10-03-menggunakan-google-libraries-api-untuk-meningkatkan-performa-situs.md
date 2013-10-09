---
title: Menggunakan Google Libraries API untuk Meningkatkan Performa Situs
author: Aris FM
layout: post
permalink: /archives/2011/10/menggunakan-google-libraries-api-untuk-meningkatkan-performa-situs.html
categories:
  - Design
---
[Google Libraries API][1] adalah sebuah CDN server yang menyediakan berbagai javascript library populer seperti jQuery, YUI, MooTools dan lain-lain. Kita bisa menggunakan berbagai library yang tersedia di situs kita secara gratis. Berikut ini adalah daftar javascript library yang didukung oleh Google API:

*   Chrome Frame 
*   Dojo
*   Ext Core
*   jQuery
*   jQuery UI
*   MooTools
*   Prototype
*   script\_aculo\_us
*   SWFObject
*   Yahoo! User Interface Library (YUI)
*   WebFont Loader

<!--more-->

### Cara Penggunaan

Cara menggunakan Google Libraries API cukup mudah, kita hanya perlu memanggil library yang kita butuhkan dengan tag `<script>`. Misalnya kita ingin menyertakan library jQuery dari API, maka kita hanya perlu menyisipkan snippet berikut di dalam tag `<head>` atau sebelum tag `<body>` pada dokumen HTML.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"&gt;&lt;/script&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Secara khusus, [Ardianzzz][2] juga pernah menulis tentang penggunaan salah satu library dari Google Libraries API ini, yaitu [WebFont Loader untuk Google Font][3].

Selain dengan metode di atas, kita juga bisa menggunakan cara lain yang (menurut saya) lebih praktis, yaitu dengan [Google AJAX API][4]. Kita hanya perlu [mendaftarkan sebuah API Key][5] untuk situs kita, lalu menyisipkan snippet-nya di dalam tag `<head>` pada dokumen HTML. Misalnya anda ingin memanggil library jQuery dan WebFont Loader [Typekit][6], maka snippet-nya seperti ini:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;script type="text/javascript" src="https://www.google.com/jsapi?key=INSERT-YOUR-KEY"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
	google.load("jquery", "1");
	google.load("webfont", "1");
		WebFontConfig = {
			typekit: {
				id: 'your-typekit-ID'
			}
		};
	&lt;/script&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Ganti `INSERT-YOUR-KEY` dengan API key yang anda miliki.

### Mengapa menggunakan Google Libraries API meningkatkan performa situs?

Dengan menggunakan library dari Google Libraries API kita bisa mengurangi beban server situs kita. Selain itu waktu pemuatan juga lebih cepat karena server Google adalah salah satu server terbaik di dunia saat ini, jadi kemungkinan server down sangat kecil. Silakan coba dan buktikan sendiri.

 [1]: http://code.google.com/apis/libraries/devguide.html
 [2]: http://ardianzzz.com/
 [3]: http://ardianzzz.com/2010/12/19/googlefont-webfontloader/
 [4]: http://code.google.com/apis/loader/
 [5]: http://code.google.com/apis/loader/signup.html
 [6]: http://typekit.com/