var gulp = require('gulp');
var sass = require('gulp-sass');

/*Example*/
gulp.task('copy', function() {
  return gulp.src('copy.txt')
    .pipe(gulp.dest('ng'));
});

gulp.task('default', function () {
  gulp.src('app/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./ng/'));
});