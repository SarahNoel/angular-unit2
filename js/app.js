var app = angular.module('unit2app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/bio' , {
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
      .when('/ajax', {
      templateUrl: 'partials/ajax.html',
      controller: 'Ajax'

    })
      .when('/movie', {
      templateUrl: 'partials/movie.html',
      controller: 'Movie'
    })
      .when('/contacts', {
      templateUrl: 'partials/contacts.html',
      controller: 'ContactsApp'
    })
      .when('/contact/:id', {
      templateUrl: 'partials/oneContact.html',
      controller: 'OneContact'
    })
      .when('/shopping', {
      templateUrl: 'partials/shopping.html',
      controller: 'Shopping'
    })
      .when('/shopping/about', {
      templateUrl: 'partials/shoppingAbout.html',
      controller: 'ShoppingAbout'
    })
      .when('/shopping/contact', {
      templateUrl: 'partials/shoppingContact.html',
      controller: 'ShoppingContact'
    })
      .when('/pokemon', {
      templateUrl: 'partials/pokemon.html',
      controller: 'Pokemon'
    });
    $locationProvider.html5Mode(true);
});




















