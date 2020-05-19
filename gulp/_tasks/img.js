module.exports = () => {
    params.gulp.task('images', () => params.gulp.src('src/img/*.{png,jpg,jpeg,gif,svg}')
        .pipe(params.gulp.dest('build/img'))
    );
};