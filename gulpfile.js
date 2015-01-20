// Gulp plugins
var bower         = require('main-bower-files'),
    browserSync   = require('browser-sync'),
    compass       = require('gulp-compass'),
    filter        = require('gulp-filter'),
    gulp          = require('gulp'),
    gulpIf        = require('gulp-if'),
    jade          = require('gulp-jade'),
    mqpacker      = require('css-mqpacker'),
    path          = require('path'),
    plumber       = require('gulp-plumber'),
    postcss       = require('gulp-postcss'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-compass');

// Source Files
var src = {
  jade: './src/**/*.jade',
  sass: './src/s/sass/**/*.scss',
  js: './src/s/js/**/*.js',
  img: './src/s/img/**/*'
}

// Build Dest
var dest = {
  build: './',
  statics: './s/'
}

// Gulp plumber error handler
var onError = function(err) {
  console.log(err);
  this.emit('end');
}

// Web server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('bower', function() {
  return gulp.src(bower())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(filter('**/*.js'))
    .pipe(gulp.dest(dest.statics));
});

// Gulp if
var condition = function(getcss) {
  filter('**/*.css');
  return true;
}

gulp.task('bower-css', function() {
  return gulp.src(bower())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulpIf(
      condition,
      rename({
        extname: '.scss'
      }),
      filter('**/*.scss')
    ))
    .pipe(gulp.dest('./src/s/sass/vendor'));
});

gulp.task('html', function() {
  return gulp.src(src.jade)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(gulp.dest(dest.build))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', function() {
  return gulp.src(src.sass)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(compass({
      project: path.join(__dirname, 'src/s'),
      css: 'css',
      sass: 'sass',
      image: 'img',
      style: 'expanded'
    }))
    .pipe(postcss([
      mqpacker
    ]))
    .pipe(gulp.dest(dest.statics+'css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
  return gulp.src(src.js)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest(dest.statics))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('images', ['css'], function() {
  return gulp.src(src.img)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(dest.statics+'img'))
    .pipe(browserSync.reload({stream:true}));
});


// Default task (watch)
gulp.task('default', ['html', 'css', 'js', 'images', 'browser-sync'], function() {
  gulp.watch(src.jade, ['html']);
  gulp.watch(src.sass, ['css']);
  gulp.watch(src.js, ['js']);
  gulp.watch(src.img, ['images']);
});
