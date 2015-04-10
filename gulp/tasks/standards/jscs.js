'use strict';

var gulp = require('gulp'),
    config = require('../../config');

gulp.task('jscs', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(gulp.plugins.jscs());
});


// Handle errors
function errorHandler(error) {
    console.log('Gulp jscs Error: ', error.toString());
    /*jshint validthis:true */
    this.emit('end');
}
