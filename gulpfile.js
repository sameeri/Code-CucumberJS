'use strict';
var gulp = require('gulp'),
    child_process = require('child_process');

var options = [ 'node_modules/cucumber/bin/cucumber.js',
    'features',
    '-r', 'features/step_definitions',
    '-f', 'pretty'];

function runSpecifications() {
    console.log('Now Running cucumber specifications');
    var cucumber = child_process.spawn('node', options)
        .on('exit', function() {
        });
    cucumber.stdout.on('data', function(d) {
        console.log(String(d));
    });

    cucumber.stderr.on('data', function(d) {
        console.error(String(d));
    });
}

gulp.task('bdd-spec', runSpecifications);
gulp.task('default', ['bdd-spec']);
