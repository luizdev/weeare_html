var gulp = require('gulp'),
  jade = require('gulp-jade'),
  connect = require('gulp-connect'),
  open = require('gulp-open'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat')




var conf = {
  jade_path_watch: ['front/templates/*.jade', 'front/templates/**/*.jade'],
  jade_path_from: 'front/templates/*.jade',
  sass_path_watch: ['front/styles/*.scss', 'front/styles/**/*.scss'],
  sass_path_from: 'front/styles/*.scss',
  port: 8008
};

gulp.task('connect', function() {
  connect.server({
    port: conf.port,
    root: './',
    livereload: true
  });
});

gulp.task('jade', function() {
  return gulp.src(conf.jade_path_from)
    .pipe(jade({
      pretty: true
    }).on('error', function(err) {
      var displayErr = gutil.colors.red(err);
      gutil.log(displayErr);
      gutil.beep();
      this.emit('end');
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src(conf.sass_path_from)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(err) {
      var displayErr = gutil.colors.red(err);
      gutil.log(displayErr);
      gutil.beep();
      this.emit('end');
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(connect.reload());
});

gulp.task('watch', ['jade', 'sass'], function() {
  gulp.watch(conf.jade_path_watch, ['jade']);
  gulp.watch(conf.sass_path_watch, ['sass']);

});

gulp.task('open', function() {
  gulp.src('')
    .pipe(open({
      uri: 'http://localhost:' + conf.port + "/build/index.html"
    }));
});

gulp.task('default', ['connect', 'watch', 'open']);
