module.exports = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],

  preprocessors: {
    'src/**/!(*Spec).js': ['coverage'],
    'src/**/*.js': ['commonjs']
  },

  files: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'src/example.service.js'
    ],

  reporters: ['coverage', 'junit', 'progress'],
  

  junitReporter: {
    outputFile: 'reports/test/unit/junit/test-results.xml',
    suite: ''
  },

  coverageReporter: {
    reporters: [
      { type: 'html', dir: 'reports/test/unit/coverage' },
      { type: 'lcovonly', dir: 'reports/test/unit/coverage' },
      { type: 'json', dir: 'reports/test/unit/coverage' },
      { type: 'cobertura', dir: 'reports/test/unit/coverage' }
    ]
  }
};
