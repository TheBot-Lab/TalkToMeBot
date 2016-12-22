var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var fs =  require('fs');

gulp.task('eslint', function(){
    exec('eslint js/myJscript.js', function(err, data){
        
        if(err) {
          fs.writeFile('output.txt', err, 'utf8');    
        }
        
        fs.writeFile('output.txt', data, 'utf8');    
    });
});

gulp.task('sass', function(){
    return  gulp.src('scss/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('js/myJscript.js', ['eslint']);
});

/*
gulp.task('watch', function() {
    gulp.watch('js/myJscript.js', ['eslint']);
});
*/