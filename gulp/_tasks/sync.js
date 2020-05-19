module.exports = () => {
    params.gulp.task('browser-sync', () => {
        params.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
    });
};