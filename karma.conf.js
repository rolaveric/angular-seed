module.exports = function(config){
  config.set({

    basePath : './',

    files : [],

    systemjs: {
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/*/**/*.js'
        ],
 
        // Point out where the SystemJS config file is
        configFile: 'app/system.config.js',
 
        // Add any additional configuration, such as mappings to modules only used in testing
        config: {
            paths: {
                'angular-mocks': 'bower_components/angular-mocks/angular-mocks.js'
            }
        }
    },

    autoWatch : true,

    frameworks: ['systemjs', 'jasmine'],

    browsers : ['Chrome'],

    plugins : ['karma-systemjs',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
