var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer')
purge = require('gulp-css-purge');

gulp.task('compileScss', function () {
    return gulp.src('./source/styles/style_1.scss')
        .pipe(sass())
        .pipe(gulp.dest('./source/styles/'))
});

gulp.task('compileCss', ['compileScss'], function () {
    return gulp.src('source/styles/**/*.css')
        .pipe(concat("style.css"))
        .pipe(purge())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
});
gulp.task('htmlMove', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest('dest/'))
});
gulp.task('fontsMove', function () {
    return gulp.src('source/fonts')
        .pipe(gulp.dest('dest/'))
});

gulp.task('htmlMove', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest('dest/'))
});

gulp.task('default', ['scss', 'css', 'imgOpt', 'htmlMove']);
gulp.task('compress', function() {
    gulp.src('source/js/*.js')
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['combo.js', 'min.js']
        }))
        .pipe(gulp.dest('source/js'))
});