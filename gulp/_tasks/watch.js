module.exports = () => {
    params.gulp.task('watch', () => {
        params.gulp.watch('src/pug/**/*.pug', params.gulp.series('pug'));
        params.gulp.watch('src/css/style.css', params.gulp.series('csso'));
        params.gulp.watch('src/img/*', params.gulp.series('images'));
    });
};