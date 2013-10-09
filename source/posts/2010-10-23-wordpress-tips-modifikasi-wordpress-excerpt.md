---
title: 'WordPress Tips: Modifikasi WordPress Excerpt'
author: Aris FM
layout: post
permalink: /archives/2010/10/wordpress-tips-modifikasi-wordpress-excerpt.html
categories:
  - Wordpress
tags:
  - excerpt
  - functions.php
---
Bagi yang belum tahu, Excerpt adalah ringkasan dari suatu tulisan atau dalam konteks blog adalah ringkasan posting. 

Bagi pengguna WordPress, excerpt dapat dimasukkan secara manual pada saat membuat posting.

<div id="attachment_364" class="wp-caption aligncenter" style="width: 741px">
  <a href="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/manual-excerpt.png"><img src="http://i2.wp.com/cekerholic.com/wp-content/uploads/2010/10/manual-excerpt.png?fit=604%2C174" alt="" title="manual-excerpt" class="size-full wp-image-364" data-recalc-dims="1" /></a><p class="wp-caption-text">
    Membuat Manual Excerpt
  </p>
</div>

Ada beberapa theme WordPress yang otomatis menampilkan sebuah posting sebagai excerpt di halaman muka blog atau halaman arsip kategori. Biasanya theme itu menggunakan template tag `the_excerpt()` di post template-nya.

Jika `the_excerpt()` digunakan maka otomatis WordPress akan menampilkan 55 kata pertama dalam posting sebagai *excerpt*, menghilangkan semua pemformatan HTML pada sebuah postingan, dan menampilkan tanda \[...\] (suffix dot) pada akhir ringkasan. Karena semua format HTML hilang, maka secara otomatis paragraf, link dan image (jika ada) akan hilang pada tampilan *excerpt*, ini kurang baik karena tampilan postingan menjadi kurang menarik. Agar tampilan *excerpt* menjadi lebih baik, kita bisa memodifikasinya melalui functions.php.

**Membuat *function* `custom_excerpt()`**  
Oke, sekarang waktunya kita koding. Kita akan membuat sebuah functions yang bernama `custom_excerpt()` untuk menggantikan `the_excerpt()`. Buka functions.php di directory theme wordpress anda dan masukkan baris kode berikut:

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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> custom_excerpt<span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$post</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">''</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$text</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> get_the_content<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'the_content'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">str_replace</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Membuat pemformatan HTML tetap muncul pada *excerpt***  
`the_excerpt()` secara otomatis akan menghilangkan semua pemformatan HTML pada posting, jadi semua paragraf, image, link, list atau apapun format HTML akan ditampilkan sebagai plain text di excerpt. Nah, untuk membuat pemformatan HTML tetap tampil masukkan kode berikut:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>7
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strip_tags</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;p&gt;&lt;blockquote&gt;&lt;img&gt;&lt;a&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Silakan tambahkan tag HTML lainnya jika diperlukan</span></pre>
      </td>
    </tr>
  </table>
</div>

**Mengatur panjang *excerpt***  
Secara *default*, WordPress akan mengambil 55 kata pertama sebuah posting sebagai *excerpt*, tapi tenang saja, kita dapat mengatur panjang excerpt sesuai keinginan kita, misalnya saja 33 kata.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>8
9
10
11
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">33</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$words</span> <span style="color: #339933;">=</span> <span style="color: #990000;">explode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">+</span> <span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">&gt;</span> <span style="color: #000088;">$excerpt_length</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #990000;">array_pop</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Mengganti \[...\] (*suffix dot*) dengan *read more link***  
Tambahkan baris kode berikut:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>12
13
14
15
16
17
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #990000;">array_push</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;a href="'</span><span style="color: #339933;">.</span> get_permalink<span style="color: #009900;">&#40;</span><span style="color: #000088;">$post</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">ID</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'"&gt;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'Baca selengkapnya &raquo;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'&lt;/a&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">implode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
<span style="color: #b1b100;">return</span> <span style="color: #000088;">$text</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

**Memberitahu WordPress untuk mengubah pengaturan *excerpt***  
Langkah terakhir adalah memberitahu WordPress agar mengubah pengaturan *excerpt *

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>18
19
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">remove_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'wp_trim_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
add_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Hasil akhir dari *function* `custom_excerpt` adalah seperti ini :

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
9
10
11
12
13
14
15
16
17
18
19
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> custom_excerpt<span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$post</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">''</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$text</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> get_the_content<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'the_content'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">str_replace</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">']]&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strip_tags</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;p&gt;&lt;blockquote&gt;&lt;img&gt;&lt;a&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">//Silakan tambahkan tag HTML lainnya jika diperlukan</span>
        <span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">33</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$words</span> <span style="color: #339933;">=</span> <span style="color: #990000;">explode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$text</span><span style="color: #339933;">,</span> <span style="color: #000088;">$excerpt_length</span> <span style="color: #339933;">+</span> <span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">&gt;</span> <span style="color: #000088;">$excerpt_length</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #990000;">array_pop</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #990000;">array_push</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$words</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;a href="'</span><span style="color: #339933;">.</span> get_permalink<span style="color: #009900;">&#40;</span><span style="color: #000088;">$post</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">ID</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'"&gt;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'Baca selengkapnya &raquo;'</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">'&lt;/a&gt;'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	       <span style="color: #000088;">$text</span> <span style="color: #339933;">=</span> <span style="color: #990000;">implode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">' '</span><span style="color: #339933;">,</span> <span style="color: #000088;">$words</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
<span style="color: #b1b100;">return</span> <span style="color: #000088;">$text</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
remove_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'wp_trim_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
add_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'get_the_excerpt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_excerpt'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Dan sekarang *excerpt* blog WordPress kita sudah mempunyai tampilan baru. Oh ya, jika ada yang kurang jelas silakan bertanya di kolom komentar <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_wink.gif?w=604' alt=';)' class='wp-smiley' data-recalc-dims="1" /> . Selamat mencoba.