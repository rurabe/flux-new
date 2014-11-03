var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browserify', function() {
  gulp.src('src/js/app.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('sass',function(){
  gulp.src('src/css/app.sass')
    .pipe(sass({ sourceComments: 'normal' }))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('serve',function(){
  browserSync({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('default',['browserify', 'copy', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

