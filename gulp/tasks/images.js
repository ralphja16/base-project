var gulp            = require('gulp'),
    config          = require('../config.js'),
    imageop         = require('gulp-image-optimization');

gulp.task('images', function(){
    gulp.src(config.paths.images.src)
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(config.paths.images.dest));

});
