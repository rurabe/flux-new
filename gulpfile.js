var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var reactify = require('reactify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var del = require('del');

gulp.task('clean',function(cb){
  del(['public/**/*.*'],cb);
});

gulp.task('reactify',function(){
  var browserified = transform(function(filename){
    var b = browserify(filename);
    b.transform(reactify)
    return b.bundle();
  });

  return gulp.src(['src/js/app.js'])
    .pipe(browserified)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));

})

gulp.task('sass',function(){
  gulp.src('src/css/app.sass')
    .pipe(plumber())
    .pipe(sass({ sourceComments: 'normal' }))
    .pipe(gulp.dest('public/css'))
});

gulp.task('copy',['copyjs','copycss','copyimg','copyfonts'],function() {
  gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('public'));
});

gulp.task('copyjs',function(){
  var js = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
  ]
  gulp.src(js)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('public/js'))
});

gulp.task('copycss',function(){
  var css = [
    'static/css/**/*.*'
  ]
  gulp.src(css)
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('public/css'))
});

gulp.task('copyimg',function(){
  gulp.src('static/img/**/*.*')
    .pipe(gulp.dest('public/img'));
});

gulp.task('copyfonts',function(){
  fonts = [
    'node_modules/font-awesome/fonts/*.*',
    'static/fonts/**/*.*'
  ]
  gulp.src(fonts)
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('default',['reactify','sass','copy']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

