var gulp = require('gulp'),  
  pug = require('gulp-pug');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {  
  return gulp.src('pug_templates/**/*.pug')
      .pipe(pug({
          pretty : true
      }
      )) // pipe to pug plugin
      .pipe(gulp.dest('.')); // tell gulp our output folder
});
gulp.task('watch:pug', function(){
  return gulp.watch('templates/**/*.pug', ['pug']);
});
gulp.task('default', ['watch:pug', 'pug']);