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
    self.bioWork = `I had six great years with Comcast on their Loyalty Support Central team in the Minnetonka Center of Excellence. This was an in-house technical support team specializing in order entry software issues and advising agents on active calls. Some of my duties through the years consisted of: 
    Leading several Special Project teams including the UPS fall out and Retention leads projects.
    Created/updated daily floor support schedules using excel and forecasted staffing data. 
    Created, compiled and distributed daily support issue reports to leadership.
    Resolved thousands of order entry/billing issues through CSG/ACSR software expertise.
    Worked with management on dozens of projects to resolve and improve Loyalty operations.
    Created, compiled and distributed multiple recurring excel based reports to leadership. 
    I also gained a strong aptitude for customer support and team work.
    It was a pleasure working for Comcast and I truly appreciate everything the company did for me and my family.`;
    self.bioWork2 = `I taught English in elementary and Junior high schools in western Japan. 
    My responsibilities included speech and pronunciation in front of the class, running games and English related activities. 
    Participation in sports and school extracurricular activities, English club and tutoring. 
    I was also involved in daily lesson planning with the rest of the English faculty.`
    self.bioTravel = 'Bio Page travel description';
    self.bioHobbies = 'Bio Page hobbies description';

});

myApp.controller('ResumeController', function() {
    console.log('Resume Controller was Loaded');
    var self = this;
    self.resumeMessage = 'Resume Page Message';
});