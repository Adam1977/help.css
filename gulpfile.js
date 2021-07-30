const gulp = require('gulp')
const gulpLess = require('gulp-less')
const gulpConcat = require('gulp-concat')
const gulpCssmin = require('gulp-cssmin')
const fse = require('fs-extra')

gulp.task('build', function () {
  return gulp.src('src/help.less').pipe(gulpLess()).pipe(gulp.dest('./dist'))
})
gulp.task('cssmin', function () {
  return gulp
    .src('dist/help.css')
    .pipe(gulpConcat('help.min.css'))
    .pipe(gulpCssmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('config', function () {
  return gulp.src('README.md').pipe(gulp.dest('./dist'))
})

gulp.task('config:package', function () {
  const readPackage = fse.readJSONSync('package.json')
  delete readPackage.dependencies
  return fse.writeJSON('dist/package.json', readPackage)
})

gulp.task(
  'start',
  gulp.series(['build', 'config', 'config:package'], gulp.parallel(['cssmin']))
)
