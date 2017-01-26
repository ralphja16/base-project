var gulp            = require('gulp'),
    config          = require('../config.js'),
    browserSync     = require('browser-sync');

gulp.task('browser-sync', function() {

        browserSync.init({
            server: {
                baseDir: config.browserSync.path
            }

            proxy: config.browserSync.url

        });

        gulp.watch(config.paths.sass.src, ['sass']).on('change', browserSync.reload);
        gulp.watch(config.paths.scripts.src, ['scripts']).on('change', browserSync.reload);
        gulp.watch("*.html").on('change', browserSync.reload);

});
