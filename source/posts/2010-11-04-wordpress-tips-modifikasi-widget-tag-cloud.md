---
title: 'WordPress Tips: Modifikasi Widget Tag Cloud'
author: Aris FM
layout: post
permalink: /archives/2010/11/wordpress-tips-modifikasi-widget-tag-cloud.html
categories:
  - Wordpress
tags:
  - functions.php
  - tag cloud
  - tutorial
---
[Widget tag cloud (awan tag)][1] adalah sebuah fitur WordPress yang cukup sering dipakai di blog-blog berbasis WordPress. Fitur ini sudah ada sejak [WordPress versi 2.3][2].

<div id="attachment_533" class="wp-caption aligncenter" style="width: 322px">
  <img src="http://i0.wp.com/cekerholic.com/wp-content/uploads/2010/11/tag-cloud.jpeg?fit=312%2C227" alt="contoh tag cloud" class="size-full wp-image-533" data-recalc-dims="1" /><p class="wp-caption-text">
    Tampilan Tag Cloud standar
  </p>
</div>

Fitur ini menurut saya memiliki beberapa kekurangan, diantaranya adalah: 

*   Unit font size default-nya memakai pt (point) yang sudah jarang sekali dipakai di desain modern
*   Jumlah tag yang tampil secara default adalah 45 (kecuali jumlah tag dalam blog kurang dari 45), menurut saya itu terlalu banyak dan sayangnya tidak ada pengaturannya dalam opsi widget
*   Tag yang tampil diurutkan berdasarkan nama secara alfabetik, menurut saya lebih baik kalau tag yang tampil diurutkan dari yang paling populer dan acak (seperti awan yang selalu berubah bentuk)

<!--more-->

Untuk desain blog sendiri sih bisa saja kita masukkan fungsi tag cloud secara manual dengan memasukkan kode PHP `<?php wp_tag_cloud(' '); ?>` di bagian tertentu, biasanya di sidebar. Tapi kalau kita ingin membuat theme untuk publik atau klien menurut saya ini kurang baik karena mengurangi fleksibilitas end-user (pemakai) untuk mengatur layout blognya, tidak semua orang ingin menampilkan awan tag kan? Cara yang lebih baik adalah dengan mengubah pengaturan default widget awan tag default WordPress dengan [membuat fungsi di functions.php][3].

Langkah Pertama adalah dengan melihat fungsi `wp_tag_cloud` di direktori WordPress, fungsi ini terletak di folder [wp_includes/category-template.php][4]. Jangan mengedit file core WordPress karena berisiko instalasi wordpress rusak, selain itu file yang telah diedit juga akan tertimpa file baru ketika WordPress di-upgrade. Cukup copy saja baris kode berikut ini dari file tersebut ke functions.php :

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
20
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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> wp_tag_cloud<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">''</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$defaults</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
                <span style="color: #0000ff;">'smallest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">8</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'largest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">22</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'unit'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'pt'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'number'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">45</span><span style="color: #339933;">,</span>
                <span style="color: #0000ff;">'format'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'flat'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'separator'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'orderby'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'name'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'order'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'ASC'</span><span style="color: #339933;">,</span>
                <span style="color: #0000ff;">'exclude'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'include'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'link'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'view'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'taxonomy'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'post_tag'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'echo'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900; font-weight: bold;">true</span>
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$args</span> <span style="color: #339933;">=</span> wp_parse_args<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #000088;">$defaults</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #000088;">$tags</span> <span style="color: #339933;">=</span> get_terms<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span> <span style="color: #990000;">array_merge</span><span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'orderby'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'count'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'order'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'DESC'</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// Always query top tags</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                <span style="color: #b1b100;">return</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">foreach</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span> <span style="color: #b1b100;">as</span> <span style="color: #000088;">$key</span> <span style="color: #339933;">=&gt;</span> <span style="color: #000088;">$tag</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'edit'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'link'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span>
                        <span style="color: #000088;">$link</span> <span style="color: #339933;">=</span> get_edit_tag_link<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #b1b100;">else</span>
                        <span style="color: #000088;">$link</span> <span style="color: #339933;">=</span> get_term_link<span style="color: #009900;">&#40;</span> <span style="color: #990000;">intval</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> is_wp_error<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$link</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                        <span style="color: #b1b100;">return</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
&nbsp;
                <span style="color: #000088;">$tags</span><span style="color: #009900;">&#91;</span> <span style="color: #000088;">$key</span> <span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #990000;">link</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$link</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$tags</span><span style="color: #009900;">&#91;</span> <span style="color: #000088;">$key</span> <span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">id</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> wp_generate_tag_cloud<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// Here's where those top tags get sorted according to $args</span>
&nbsp;
        <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'wp_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$return</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'array'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'format'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">||</span> <span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'echo'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Selanjutnya ganti nama fungsi `wp_tag_cloud` di baris pertama dengan nama yang lain, misalnya saja `custom_tag_cloud`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> custom_tag_cloud<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">''</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></pre>
      </td>
    </tr>
  </table>
</div>

Ganti juga `wp_tag_cloud` di baris 28 dengan `custom_tag_cloud`.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>28
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">        <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$return</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Jika ingin mengubah ukuran dan unit font-size, jumlah tag yang tampil dan susunan tampilannya, edit baris ke 3 dan 4. Sebagai contoh saya mengubah ukuran default font-size menjadi 13px sebagai yang terkecil dan 20px sebagai yang terbesar, selain itu saya juga mengatur agar hanya 15 terpopuler yang tampil dan ditampilkan secara acak. Kodenya menjadi seperti ini:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>3
4
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">                <span style="color: #0000ff;">'smallest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">13</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'largest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">20</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'unit'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'px'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'number'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">15</span><span style="color: #339933;">,</span>
                <span style="color: #0000ff;">'format'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'flat'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'separator'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'orderby'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'count'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'order'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'RAND'</span><span style="color: #339933;">,</span></pre>
      </td>
    </tr>
  </table>
</div>

Langkah terakhir adalah membuat perintah agar WordPress menerapkan fungsi yang kita buat. Masukkan kode ini di bagian terbawah kode yang kita buat:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>35
36
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;">remove_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'wp_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
add_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'wp_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Hasil akhir dari fungsi `custom_tag_cloud` adalah seperti ini:

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
20
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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> custom_tag_cloud<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">''</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$defaults</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
                <span style="color: #0000ff;">'smallest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">13</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'largest'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">20</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'unit'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'px'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'number'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #cc66cc;">15</span><span style="color: #339933;">,</span>
                <span style="color: #0000ff;">'format'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'flat'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'separator'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">"<span style="color: #000099; font-weight: bold;">\n</span>"</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'orderby'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'count'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'order'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'RAND'</span><span style="color: #339933;">,</span>
                <span style="color: #0000ff;">'exclude'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'include'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'link'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'view'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'taxonomy'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'post_tag'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'echo'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900; font-weight: bold;">true</span>
        <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$args</span> <span style="color: #339933;">=</span> wp_parse_args<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #000088;">$defaults</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #000088;">$tags</span> <span style="color: #339933;">=</span> get_terms<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span> <span style="color: #990000;">array_merge</span><span style="color: #009900;">&#40;</span> <span style="color: #000088;">$args</span><span style="color: #339933;">,</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'orderby'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'count'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'order'</span> <span style="color: #339933;">=&gt;</span> <span style="color: #0000ff;">'DESC'</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// Always query top tags</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                <span style="color: #b1b100;">return</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">foreach</span> <span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span> <span style="color: #b1b100;">as</span> <span style="color: #000088;">$key</span> <span style="color: #339933;">=&gt;</span> <span style="color: #000088;">$tag</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'edit'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'link'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span>
                        <span style="color: #000088;">$link</span> <span style="color: #339933;">=</span> get_edit_tag_link<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #b1b100;">else</span>
                        <span style="color: #000088;">$link</span> <span style="color: #339933;">=</span> get_term_link<span style="color: #009900;">&#40;</span> <span style="color: #990000;">intval</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'taxonomy'</span><span style="color: #009900;">&#93;</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> is_wp_error<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$link</span> <span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                        <span style="color: #b1b100;">return</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
&nbsp;
                <span style="color: #000088;">$tags</span><span style="color: #009900;">&#91;</span> <span style="color: #000088;">$key</span> <span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #990000;">link</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$link</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$tags</span><span style="color: #009900;">&#91;</span> <span style="color: #000088;">$key</span> <span style="color: #009900;">&#93;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">id</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$tag</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">term_id</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> wp_generate_tag_cloud<span style="color: #009900;">&#40;</span> <span style="color: #000088;">$tags</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// Here's where those top tags get sorted according to $args</span>
&nbsp;
        <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> apply_filters<span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$return</span><span style="color: #339933;">,</span> <span style="color: #000088;">$args</span> <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'array'</span> <span style="color: #339933;">==</span> <span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'format'</span><span style="color: #009900;">&#93;</span> <span style="color: #339933;">||</span> <span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$args</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'echo'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#41;</span>
                <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
remove_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'wp_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
add_filter<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'wp_tag_cloud'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'custom_tag_cloud'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Selanjutnya kita tinggal mengatur tampilannya dengan CSS sesuai selera, misalnya saja seperti ini:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#wp_tag_cloud</span> a  <span style="color: #00AA00;">&#123;</span>
	<span style="color: #000000; font-weight: bold;">background</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span><span style="color: #cc00cc;">#f0f0f0</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span><span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span> <span style="color: #933;">3px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">padding</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
	<span style="color: #000000; font-weight: bold;">border-radius</span><span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
	-moz-border-radius<span style="color: #00AA00;">:</span><span style="color: #933;">5px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Selamat mencoba <img src='http://i1.wp.com/cekerholic.com/wp-includes/images/smilies/icon_wink.gif?w=604' alt=';)' class='wp-smiley' data-recalc-dims="1" />

 [1]: http://codex.wordpress.org/Template_Tags/wp_tag_cloud
 [2]: http://codex.wordpress.org/Template_Tags/wp_tag_cloud#Changelog
 [3]: http://cekerholic.com/archives/2010/10/wordpress-tips-memaksimalkan-fungsi-functions-php.html
 [4]: http://core.trac.wordpress.org/browser/tags/3.0.1/wp-includes/category-template.php#L560