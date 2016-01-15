var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('app/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('ng/'));
});

gulp.task('scripts', function() {
  gulp.src('app/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('.'))
    .pipe(uglify())
    .pipe(gulp.dest('ng/'))
});

gulp.task('automate', function() {
  gulp.watch(['*.scss', 'js/*.js'], ['scripts', 'styles']);
});

gulp.task('default', ['scripts', 'styles']);