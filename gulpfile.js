const gulp = require('gulp')
const gulpLess = require('gulp-less')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')

gulp.task('build', function () {
  return gulp.src('src/help.less').pipe(gulpLess()).pipe(gulp.dest('./dist'))
})
gulp.task('cssmin', function () {
  return gulp
    .src('dist/help.css')
    .pipe(concat('help.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('start', gulp.series(['build'], gulp.parallel(['cssmin'])))
