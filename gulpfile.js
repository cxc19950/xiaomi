
var gulp = require('gulp');
var cssmin = require('gulp-sass-china')
var concat = require('gulp-concat')
gulp.task("cssmin",function(){
    gulp.src("sass/*.scss")
    .pipe(cssmin())
    .pipe(gulp.dest("css"))
})
gulp.task("scss",function(){
    gulp.watch("sass/*.scss",["cssmin"]);
})
