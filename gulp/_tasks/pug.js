module.exports = () => {
    params.gulp.task('pug', () => params.gulp.src('src/pug/*.pug')
        .pipe(params.pug({
            pretty: false
        }))
        .pipe(params.gulp.dest('build'))
        .on('end', params.browserSync.reload)
    );
};