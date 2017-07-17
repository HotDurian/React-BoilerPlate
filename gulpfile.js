var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var package = require('./package.json');

var sassSources = 'components/sass';
var scriptSources = 'components/scripts';

var cssDestination = 'dist/css';
var jsDestination = 'dist/js';


gulp.task('css', function () {
    return gulp.src(sassSources + '/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cssDestination));
});

gulp.task('js', function () {
    gulp.src(scriptSources + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDestination));
});

gulp.task('default', ['css', 'js'], function () {
    gulp.watch(sassSources + "/**/*.scss", ['css']);
    gulp.watch(scriptSources + "/**/*.js", ['js']);
});
