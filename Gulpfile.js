'use strict';

var gulp   = require('gulp');
var watch  = require('gulp-watch');
var coffee = require('gulp-coffee');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('development', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(watch('./src/coffee/*.coffee'))
    .pipe(coffee({ bare: true }))
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/source'));

  gulp.src('./src/scss/*.scss')
    .pipe(watch('./src/scss/*.scss'))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/css'))
});
