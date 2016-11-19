var gulp            = require('gulp'),
    config          = require('../config.js'),
    browserSync     = require('browser-sync');

gulp.task('browser-sync', function() {

        browserSync.init({
            server: {
                baseDir: "./"
            }

            // proxy: "http://localhost/"

        });

        gulp.watch(config.paths.sass, ['sass']).on('change', browserSync.reload);
        gulp.watch(config.paths.js, ['js']).on('change', browserSync.reload);
        gulp.watch("*.html").on('change', browserSync.reload);
    
});
