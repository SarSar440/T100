var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//compiling Jade to HTML using gulp-jade
gulp.task('html', function() {
   gulp.src(['./app/**/*.jade'])
   .pipe($.jade({pretty: true, doctype: 'html'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./public/'));
});

//compile coffee script to javascript using gulp-coffee
gulp.task('js', function() {
  gulp.src(['./app/**/*.coffee'])
  .pipe($.coffee({bare: true}))
  .on('error', $.util.log)
  .pipe(gulp.dest('./public/'));
});

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./app/**/*.scss'])
   .pipe($.sass({style: 'expanded'}))
   .pipe(gulp.dest('./public/'));
});

//"watch" task for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./app/**/*.jade'], ['html']);
   gulp.watch(['./app/**/*.coffee'], ['js']);
   gulp.watch(['./app/**/*.scss'], ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {});