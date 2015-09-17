app.controller('HeaderController', function($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

app.controller('HomeController', function($scope) {
  $scope.title = "Welcome!";
  $scope.message = "This is the home page.";
});

app.controller('Projects', function($scope) {
  $scope.title = "Projects!";
  $scope.message = "These are my projects.";
});

app.controller('Resume', function($scope) {
  $scope.title = "Resume!";
  $scope.message = "This is my resume.";
});

app.controller('Bio', function($scope) {
  $scope.title = "Biography!";
  $scope.message = "This is my life story.";
});

app.controller('Filter', function($scope) {
  $scope.title = "Filters!";
  $scope.message = "Let's practice some filters.";
});

app.controller('Add', function($scope, $routeParams) {
  $scope.title = "Addition!";
  $scope.message = "Math and Stuff.";
  $scope.num1 = $routeParams.num1;
  $scope.num2 = $routeParams.num2;
});

app.controller('Divide', function($scope, $routeParams) {
  $scope.title = "Division!";
  $scope.message = "Math and Stuff.";
  $scope.num1 = $routeParams.num1;
  $scope.num2 = $routeParams.num2;
});

app.controller('Ajax', function($scope, $http) {
  $scope.title = "HTTP Service!";
  $http.get('https://api.github.com/zen')
  .then(function(data){
    $scope.zenData = data.data;
  });
  $scope.getMessages =function(){
    $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .success(function(data){
      $scope.messages = data;
    });
  };
  $scope.sendMessage = function(){
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {message:{name:$scope.userName, content:$scope.userContent}})
    .then(function(data){
      $scope.userName = $scope.userContent = ('');
      $scope.confirm = "Message sent!";
    });
  };
});


app.controller('Movie', function($scope, $http) {
  $scope.movieSearch = function () {
  $scope.show = false;
    var movie = 'http://www.omdbapi.com/?s='+$scope.movieTitle +'&r=json';
    $http.get(movie)
    .success(function(data){
      $scope.movies = data.Search;
    });
  };
  $scope.pickMovie = function () {
    $scope.show = true;
    var movie = 'http://www.omdbapi.com/?i='+ this.movie.imdbID +'&r=json';
    console.log(movie);
    $http.get(movie)
    .success(function(data){
      $scope.pickMovie = data;
    });
  };
});













