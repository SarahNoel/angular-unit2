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
  $scope.shoppingBag = ShoppingList.shoppingBag;
  var TeaInBag = function(tea, quantity){
    this.tea = tea;
    this.quantity = quantity;
  };
  $scope.addToBag= function(){
    var newTea;
    if($scope.shoppingBag.length === 0){
      newTea = new TeaInBag(this.tea, $scope.quantity);
      console.log(newTea);
      $scope.shoppingBag.push(newTea);
      console.log($scope.shoppingBag);
    }else{
      for (var i = 0; i < $scope.shoppingBag.length; i++) {
        console.log($scope.shoppingBag);
        if($scope.shoppingBag.indexOf(this.tea) != -1){

          console.log('already there!');
        }
      }
  }

};


}]);

























