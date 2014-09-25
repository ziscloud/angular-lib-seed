var gulp = require('gulp'),
    boilerplate = require('boilerplate-gulp');
    
boilerplate(gulp, {
    pkg: require('./package.json'),
    jsMain: './src/example.service.js',
    karmaConfig: require('./test/karma.conf.js')
});