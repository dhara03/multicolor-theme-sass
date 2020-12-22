var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

uglify = require('gulp-uglify');

gulp.task('sass', function() {
  gulp.src('sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
  .on('error', gutil.log)
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('css'))
});


gulp.task('watch', function() {
  gulp.watch('sass/*.scss', gulp.series('sass'));
});