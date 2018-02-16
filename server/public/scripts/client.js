var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeController as hc',
    }).when('/biography', {
        templateUrl: 'views/biography.html',
        controller: 'BiographyController as bc',
    }).when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeController as rc',

    }).otherwise({
        redirectTo: 'home'
      });
      
  }]);

myApp.controller('HomeController', function() {
    console.log('Home Controller was Loaded');
    var self = this;
    self.homeMessage = 'Home Page Message';
});

myApp.controller('BiographyController', function() {
    console.log('Biography Controller was Loaded');
    var self = this;
    self.bioMessage = 'Bio Page Message';
});

myApp.controller('ResumeController', function() {
    console.log('Resume Controller was Loaded');
    var self = this;
    self.resumeMessage = 'Resume Page Message';
});