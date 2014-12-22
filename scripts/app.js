angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  //Routes to homepage on default
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateURL: 'scripts/home/home.html',
      controller: 'HomeController'
    })

    .state('services', {
      url: '/services',
      templateURL: 'scripts/services/services.html',
      controller: 'ServicesController'
    })

    .state('about', {
      url: '/about',
      templateURL: 'scripts/about/about.html',
      controller: 'AboutController'
    })

    .state('contact', {
      url: '/contact',
      templateURL: 'scripts/contact/contact.html',
      controller: 'ContactController'
    });

}])