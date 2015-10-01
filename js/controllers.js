app.controller('HeaderController',['$scope', '$location', function($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}]);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.title = "Welcome!";
  $scope.message = "This is the home page.";
}]);

app.controller('Projects', ['$scope', function($scope) {
  $scope.title = "Projects!";
  $scope.message = "These are my projects.";
}]);

app.controller('Resume', ['$scope', function($scope) {
  $scope.title = "Resume!";
  $scope.message = "This is my resume.";
}]);

app.controller('Bio', ['$scope', function($scope) {
  $scope.title = "Biography!";
  $scope.message = "This is my life story.";
}]);

app.controller('Filter', ['$scope', function($scope) {
  $scope.title = "Filters!";
  $scope.message = "Let's practice some filters.";
}]);

app.controller('Add', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.title = "Addition!";
  $scope.message = "Math and Stuff.";
  $scope.num1 = $routeParams.num1;
  $scope.num2 = $routeParams.num2;
}]);

app.controller('Divide', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.title = "Division!";
  $scope.message = "Math and Stuff.";
  $scope.num1 = $routeParams.num1;
  $scope.num2 = $routeParams.num2;
}]);

app.controller('Ajax', ['$scope', '$http', 'AjaxService', function($scope, $http, AjaxService) {
  $scope.title = "HTTP Service!";
  AjaxService.zenGet($scope, $http);
  $scope.getMessages = function(){
    AjaxService.getMessages($scope, $http);
  };
  $scope.sendMessage = function(){
    AjaxService.sendMessage($scope, $http);
  };
}]);


app.controller('Movie', ['$scope', '$http', 'MovieService', function($scope, $http, MovieService) {
  $scope.movieSearch = function () {
    MovieService.showAllResults($scope, $http);
  };
  $scope.pickMovie = function () {
   MovieService.pickOneMovie($scope, $http, this);
 };
}]);


app.controller('ContactsApp', ['$scope', '$http', 'ContactList', function($scope, $http, ContactList){
    $scope.contacts = ContactList.contacts;
    $scope.newContact = function(){
      ContactList.addContact($scope, $http);
    };
}]);


app.controller('OneContact', ['$scope', '$routeParams', '$http', 'ContactList', function($scope, $routeParams, $http, ContactList){
    $scope.contacts = ContactList.contacts;
    var userId = $routeParams.id;
    ContactList.singleContact($scope, $http, userId);
}]);



app.controller('ShoppingAbout', ['$scope', '$http', 'ShoppingList', function($scope, $http, ShoppingList){
    $scope.title = 'About us!';
}]);

app.controller('ShoppingContact', ['$scope', '$http', 'ShoppingList', function($scope, $http, ShoppingList){
    $scope.title = 'Contact Us!';
}]);


app.controller('Shopping', ['$scope', '$http', 'ShoppingList', function($scope, $http, ShoppingList){
  $scope.teaList = ShoppingList.teaList;
  $scope.shoppingBag = [];
  $scope.optionArray = [];
  ShoppingList.starter($scope);
  $scope.checkoutFunction = function(){
    $scope.checkout = true;
  };
  $scope.addToBag= function(){
    ShoppingList.addToBag($scope, this);
  };
  $scope.updateCheckout = function(){
    ShoppingList.updateCheckout($scope);
  };
  $scope.removeCheckout = function(){
    ShoppingList.removeCheckout($scope, this);
  };
  $scope.editCheckout = function(){
    $scope.edit = true;
  };
}]);

app.controller('Pokemon', ['$scope', '$http', 'PokeService',function($scope, $http, PokeService) {
  $scope.title = "Pokemon!";
  $scope.message = "Gotta catch em all.";
  $scope.newPokes = function(){
    PokeService.getPoke(0, $scope, $http);
    PokeService.getPoke(1, $scope, $http);
    PokeService.getPoke(2, $scope, $http);
    PokeService.getPoke(3, $scope, $http);
    PokeService.getPoke(4, $scope, $http);
  };
  $scope.newPokes();

}]);

app.controller('Directives', ['$scope', function($scope){
    $scope.title = 'Directives!';
    $scope.message = 'Working with custom directives.';

}]);


