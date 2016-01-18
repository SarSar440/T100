var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('ng/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
  gulp.src('ng/js/*.js')
    .pipe(concat('shell.js'))
    .pipe(gulp.dest('.'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
});

gulp.task('watch', function() {
  gulp.watch(['ng/**/*.scss', 'ng/**/*.js'], ['scripts', 'styles']);
});

gulp.task('default', ['scripts', 'styles']);