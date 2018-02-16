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
    var msg = new SpeechSynthesisUtterance('Dave Clark');
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[7]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female, 25 is good
        msg.voiceURI = 'native';
        msg.volume = 2; // 0 to 1
        msg.rate = .8; // 0.1 to 10
        msg.pitch = 1; //0 to 2       
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
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