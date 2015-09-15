var app = angular.module('unit2app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'Bio'
    })
      .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'Projects'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'Resume'
    })
      .when('/filter', {
      templateUrl: 'partials/filter.html',
      controller: 'Filter'
    })
      .when('/add/:num1/:num2', {
      templateUrl: 'partials/add.html',
      controller: 'Add'
    })
      .when('/divide/:num1/:num2', {
      templateUrl: 'partials/division.html',
      controller: 'Divide'
    })
      .otherwise({
      redirectTo: '/'
  });
    $locationProvider.html5Mode(true);
});



