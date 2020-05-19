module.exports = () => {
    params.gulp.task('csso', () => params.gulp.src('src/css/style.css')
        .pipe(params.csso({
            restructure: true
        }))
        .pipe(params.gulp.dest('build/css'))
        .pipe(params.browserSync.reload({
            stream: true
        }))
    );
};