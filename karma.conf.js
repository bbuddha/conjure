module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/main/app/public/**/*module.js',
      'src/main/app/public/common/**/*.js',
      'src/main/app/public/home/**/*.js',
      'src/main/app/public/profile/**/*.js',
      'src/main/app/public/*.js'
    ],

    exclude: [
      'app/**/*.scenario.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

