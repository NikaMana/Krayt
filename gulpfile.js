'use srtict';

global.params = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    csso: require('gulp-csso'),
    concat: require('gulp-concat'),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/tasks.js')
    }
};

params.path.tasks.forEach(taskPath => {
    require(taskPath)();
});


params.gulp.task('default', params.gulp.series(
    params.gulp.parallel('pug', 'csso', 'images'),
    params.gulp.parallel('watch', 'browser-sync')
));
