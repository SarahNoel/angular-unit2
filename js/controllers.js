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
  $scope.optionArray = [];
  ShoppingList.starter($scope);
  $scope.checkoutFunction = function(){
    $scope.checkout = true;
  };
  $scope.addToBag= function(){
    var TeaInBag = function(tea, quantity){
      this.tea = tea;
      this.quantity = quantity;
    };
    var quantity = this.teaQuantity;
    if(quantity === undefined){
      quantity = 1;
    }
    if(quantity === 0){
      return;
    }
    var newTea = new TeaInBag(this.tea, quantity);
    if($scope.shoppingBag.length === 0){
      $scope.shoppingBag.push(newTea);
      return;
    }else{
      for (var i = 0; i < $scope.shoppingBag.length; i++) {
        if($scope.shoppingBag[i].tea === this.tea){
          $scope.shoppingBag[i].quantity = parseFloat($scope.shoppingBag[i].quantity) + parseFloat(quantity);
            return;
        }else{
          $scope.shoppingBag.push(newTea);
          return;
        }
      }
    }
  };
  $scope.updateCheckout = function(){
    $scope.edit = false;
    var subtotal;
    var grandTotal = 0;
    for (var i = 0; i < $scope.shoppingBag.length; i++) {
     subtotal= $scope.shoppingBag[i].tea.price * parseFloat($scope.shoppingBag[i].quantity);
     grandTotal = parseFloat(grandTotal) + parseFloat(subtotal);
    }
    $scope.grandTotal = grandTotal;
  };
  $scope.removeCheckout = function(){
    for (var i = 0; i < $scope.shoppingBag.length; i++) {
      if($scope.shoppingBag[i].tea.name === this.tea.tea.name){
        $scope.shoppingBag.splice(i, 1);
      }
    }
  };
  $scope.editCheckout = function(){
    $scope.edit = true;
  };
}]);

app.controller('Pokemon', ['$scope', '$http', function($scope, $http) {
  $scope.title = "Pokemon!";
  $scope.message = "Gotta catch em all.";
  var index = Math.floor((Math.random()*151));
  $http.get("http://pokeapi.co/api/v1/pokemon/" + index + "/")
    .success(function(data){
      $scope.pokemonData=data;
    });
  $http.get("http://pokeapi.co/api/v1/sprite/" + index + "/")
  .success(function(data){
    $scope.spriteData=data;
    $scope.spriteImage = "http://pokeapi.co" + data.image;
  });
}]);



