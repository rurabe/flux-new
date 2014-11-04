var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('browserify', function() {
  gulp.src('src/js/app.js')
    .pipe(plumber())
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('public'));
  gulp.src('src/img/**/*.*')
    .pipe(plumber())
    .pipe(gulp.dest('public/img'));
});

gulp.task('sass',function(){
  gulp.src('src/css/app.sass')
    .pipe(plumber())
    .pipe(sass({ sourceComments: 'normal' }))
    .pipe(gulp.dest('public/css'))
});

gulp.task('default',['browserify', 'copy', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

