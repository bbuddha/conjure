(function() {
  angular.module('conjure')
  .config(['$stateProvider', '$urlRouterProvider',
    function appConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    }]);
})();

