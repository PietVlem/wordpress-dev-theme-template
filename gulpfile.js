/*
Pakages
*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

/*
locations
*/
// AAN TE PASSEN!!
const proxyUrl = 'http://localhost:8888/Zwemzoo/';
const root = './';

const styleSRC = 'src/scss/main.scss';
const jsSRC = 'src/js/app.js';
const jsFILES = [jsSRC];

const styleWatch = 'src/scss/**/*.scss';
const jsWatch = 'src/js/**/*.js';
const phpWatch = './*.php';

/*
methods
*/
function style(cb) {
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write(root))
        .pipe(gulp.dest(root));
    cb();
}

function js(cb) {
    jsFILES.map(function (entry) {
        return browserify({
            entries: [entry]
        })
            .transform(babelify, { presets: ['env'] })
            .bundle()
            .pipe(source(entry))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(uglify())
            .pipe(concat('script.js'))
            .pipe(sourcemaps.write(root))
            .pipe(gulp.dest(root));
    })
    cb();
}

function watch(cb) {
    gulp.watch(styleWatch, style);
    gulp.watch(jsWatch, js);
    cb();
}

function syncBrowser(cb) {
    var files = [
        styleWatch,
        jsWatch,
        phpWatch
    ];

    browserSync.init(files, {
        proxy: proxyUrl,
    });
    cb();
}

/*
scripts
*/
exports.default = gulp.parallel(js, style);
exports.watch = gulp.parallel(watch, syncBrowser);