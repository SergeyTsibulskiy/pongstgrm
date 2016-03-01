'use strict';

var gulp   = require('gulp');
var watch  = require('gulp-watch');
var coffee = require('gulp-coffee');
var sass   = require('gulp-sass');

gulp.task('development', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(watch('./src/coffee/*.coffee'))
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest('./dist/js'));

  gulp.src('./src/scss/*.scss')
    .pipe(watch('./src/scss/*.scss'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/css'))
});
