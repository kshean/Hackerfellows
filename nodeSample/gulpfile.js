var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');
var htmlhint = require("gulp-htmlhint");
var fixmyjs = require("gulp-fixmyjs");
var complexity = require('gulp-complexity');
var concat = require('gulp-concat');
var notify = require("gulp-notify");



gulp.task('default', function(){
    console.log("Is this the real life?");
});

gulp.task("second", ['default'], function(){
    console.log("Is this just fantasy?");
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: './'
        },
        port: process.env.PORT,
        host: process.env.IP
        
    });
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


 
gulp.task('uglify', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('validate', function(){
    gulp.src("*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});

gulp.task('fixmyjs', function(){
    gulp.src("js/*.js")
    .pipe(fixmyjs({
        // JSHint settings here
    }))
    .pipe(gulp.dest("dist/js"));
    
});

gulp.task('complexity', function(){
    return gulp.src('*.js')
        .pipe(complexity());
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('notify', function(){
    gulp.src("js/*.js")
    .pipe(notify("Hello Gulp!"));
    
});