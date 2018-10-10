var gulp = require('gulp'),  
  pug = require('gulp-pug'),
  sass = require('gulp-sass');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {  
  return gulp.src('templates/pug/**/*.pug')
      .pipe(pug({
          pretty : true
      }
      )) // pipe to pug plugin
      .pipe(gulp.dest('.')); // tell gulp our output folder
});
gulp.task('watch:pug', function(){
  return gulp.watch('pug_templates/**/*.pug', ['pug']);
});

var sassFiles = 'templates/sass/**/*.scss',
    cssDest = 'styles/';
gulp.task('sass', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
gulp.task('watch:sass', function(){
  return gulp.watch(sassFiles, ['sass']);
});

gulp.task('default', ['watch:pug', 'pug', 'watch:sass', 'sass']);