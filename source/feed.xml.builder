xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  xml.title "Jurnal Aris FM"
  xml.subtitle "Catatan seorang Front-end Developer"
  xml.id "http://cekerholic.com/"
  xml.link "href" => "http://cekerholic.com/"
  xml.link "href" => "http://cekerholic.com/feed", "rel" => "self"
  xml.updated blog.articles.first.date.to_time.iso8601
  xml.author { xml.name "Blog Author" }

  blog.articles[0..5].each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => article.url
      xml.id article.url
      xml.published article.date.to_time.iso8601
      xml.updated article.date.to_time.iso8601
      xml.author { xml.name "Aris FM" }
      xml.summary article.body, "type" => "html"
    end
  end
end