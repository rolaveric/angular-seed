module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/**/*_test.js'
    ],

    exclude: [
      'app/bundle.js'
    ],

    systemjs: {

      // Point out where the SystemJS config file is
      configFile: 'app/system.config.js',

      serveFiles: [
        'app/**/*.js'
      ],

      // Add any additional configuration, such as mappings to modules only used in testing
      config: {
        paths: {
          'angular-mocks': 'app/bower_components/angular-mocks/angular-mocks.js'
        }
      }
    },

    autoWatch: true,

    frameworks: ['systemjs', 'jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-systemjs',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/!(*_test).js': ['coverage'],
      'app/!(bower_components)**/!(*_test).js': ['coverage']
    },

    coverageReporter: {
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      }
    }

  });
};
