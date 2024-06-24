const gulp = require ('gulp');
const less = require ('gulp-less');

const paths = {
    styles: {
        src: 'src/styles/**/*.less',
        dest: 'dist/css/'
    }
};

function switchLess(){
    return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(gulp .dest(paths.styles.dest));
}

function watch(){
    gulp.watch(paths.styles.src, switchLess);
}

exports.default = switchLess;
exports.switchLess = switchLess;
exports.watch = watch;