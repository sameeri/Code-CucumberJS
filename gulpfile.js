'use strict';
var gulp = require('gulp');

function runSpecifications() {
    console.log('Running cucumber specifications');
}

gulp.task('bdd-spec', runSpecifications);
gulp.task('default', ['bdd-spec']);
