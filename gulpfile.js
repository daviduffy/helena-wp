'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('compile-sass', function() {
  return gulp.src('./sass/app.sass')
    .pipe(maps.init())      // create maps from scss partials
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
    .pipe(maps.write('./'))   // this path is relative to the output directory
    .pipe(gulp.dest('./css'));  // this is the output directory
});

gulp.task('concat-css',['compile-sass'], function() {
  return gulp.src(['css/app.css'])
    .pipe(concat('output.css')) // concat into file name
    .pipe(gulp.dest('css'));  // send that file to the css directory
});

gulp.task('minify-css',['concat-css'], function() {
  return gulp.src('css/output.css')
    .pipe(maps.init({loadMaps:true}))   // create maps from scss *sourcemaps* not the css
    .pipe(cleanCSS())
    .pipe(rename('output.min.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('concat-scripts', function() {
  return gulp.src( 'js/app.js' )
    .pipe(maps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('output.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('minify-scripts',['concat-scripts'], function() {
  return gulp.src('js/output.js')
    .pipe(maps.init({loadmaps:true}))
    .pipe(uglify())
    .pipe(rename('output.min.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('clean', function() {
  del(['css/output*.css*','js/output*.js*']);
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass',['minify-css']);
  gulp.watch('./js/app.js',['minify-scripts']);
});

gulp.task('default', ['watch']);


var distFiles = [
  '*.php',
  'css/output.min.css',
  'style.css',
  'js/output.min.js',
  'includes/**',
  'sitemap.xml',
  'robots.txt',
  '.htaccess',
  'screenshot.png'
];

gulp.task('clean', function(){
  del(['dist','css/output*.css*','js/output*.js*']);
});

gulp.task('build', ['minify-scripts', 'minify-css'], function(){ // array defined dependencies, which are all run before the default task
  return gulp.src(distFiles, {base:'./'})
    .pipe(gulp.dest('dist'));
});