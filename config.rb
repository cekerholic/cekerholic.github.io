###
# Blog settings
###

Time.zone = "Jakarta"

activate :blog do |blog|
  blog.permalink = "archives/:year/:month/:title"
  blog.sources = "posts/:year-:month-:day-:title"
  blog.taglink = "tag/:tag.html"
  blog.layout = "post"
  blog.default_extension = ".md.erb"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/:num"
end

page "/feed.xml", :layout => false

# Resource
set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/images'

# HAML Setting
set :haml, { :attr_wrapper => "\"", :ugly => true }

# sass-media_query_combiner
require 'sass-media_query_combiner'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :gzip
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = "master" # default: gh-pages
  # deploy.build_before = true
  # deploy.remote = "custom-remote" # remote name or git url, default: origin
end