var gulp = require('gulp');
var browserify = require('browserify');
var babelify= require('babelify');
var util = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('build', function() {
  browserify('./src/main.js', { debug: true })
  .add(require.resolve('babel/polyfill'))
  .transform(babelify)
  .bundle()
  //.on('error', util.log.bind(util, 'Browserify Error'))
  .on('error', function () {
      console.log('error');	    
  })
  .pipe(source('./main.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify({ mangle: false }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function () {
    bs.init({
	server: {
	    baseDir: "./dist"
	}
    }); 

    gulp.watch("./dist/*.js").on('change', reload);
    gulp.watch("./src/**/*.js", ['build']);
});

gulp.task('default', ['serve']);
