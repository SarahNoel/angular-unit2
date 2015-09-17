app.controller('HeaderController',['$scope', '$location', function($location, $scope) {
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

app.controller('Ajax', ['$scope', '$http', function($scope, $http) {
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
}]);


app.controller('Movie', ['$scope', '$http', function($scope, $http) {
  $scope.movieSearch = function () {
  $scope.show = false;
    var movie = 'http://www.omdbapi.com/?s='+$scope.movieTitle +'&r=json';
    $http.get(movie)
    .success(function(data){
      $scope.movies = data.Search;
    });
  };
  $scope.pickMovie = function () {
    var movie;
    $scope.show = true;
    movie = 'http://www.omdbapi.com/?i='+ this.movie.imdbID +'&plot=full&r=json';
    if($scope.tomato === true){
      $scope.tomatoInfo = true;
      movie = movie +'&tomatoes=true';
    }
    if($scope.tomato === false){
      $scope.tomatoInfo = false;
    }
    $http.get(movie)
    .success(function(data){
      $scope.movieData = data;
      $scope.picURL = 'https://api.themoviedb.org/3/find/tt0111161?api_key=31dbddb5b365067fc336786bf1983c21&external_source=imdb_id';
    });
    var movie2 = 'https://api.themoviedb.org/3/find/'+ this.movie.imdbID +'?api_key=31dbddb5b365067fc336786bf1983c21&external_source=imdb_id';
    $http.get(movie2)
    .success(function(data){
      var picPath = data.movie_results[0].poster_path;
      $scope.movieDataPic = 'http://image.tmdb.org/t/p/original' + picPath;
    });
  };
}]);

//minified code
//app.controller("HeaderController",["$scope","$location",function(e,t){t.isActive=function(t){return t===e.path()}}]),app.controller("HomeController",["$scope",function(e){e.title="Welcome!",e.message="This is the home page."}]),app.controller("Projects",["$scope",function(e){e.title="Projects!",e.message="These are my projects."}]),app.controller("Resume",["$scope",function(e){e.title="Resume!",e.message="This is my resume."}]),app.controller("Bio",["$scope",function(e){e.title="Biography!",e.message="This is my life story."}]),app.controller("Filter",["$scope",function(e){e.title="Filters!",e.message="Let's practice some filters."}]),app.controller("Add",["$scope","$routeParams",function(e,t){e.title="Addition!",e.message="Math and Stuff.",e.num1=t.num1,e.num2=t.num2}]),app.controller("Divide",["$scope","$routeParams",function(e,t){e.title="Division!",e.message="Math and Stuff.",e.num1=t.num1,e.num2=t.num2}]),app.controller("Ajax",["$scope","$http",function(e,t){e.title="HTTP Service!",t.get("https://api.github.com/zen").then(function(t){e.zenData=t.data}),e.getMessages=function(){t.get("https://shielded-peak-6345.herokuapp.com/messages").success(function(t){e.messages=t})},e.sendMessage=function(){t.post("https://shielded-peak-6345.herokuapp.com/messages",{message:{name:e.userName,content:e.userContent}}).then(function(){e.userName=e.userContent="",e.confirm="Message sent!"})}}]),app.controller("Movie",["$scope","$http",function(e,t){e.movieSearch=function(){e.show=!1;var o="http://www.omdbapi.com/?s="+e.movieTitle+"&r=json";t.get(o).success(function(t){e.movies=t.Search})},e.pickMovie=function(){var o;e.show=!0,o="http://www.omdbapi.com/?i="+this.movie.imdbID+"&plot=full&r=json",e.tomato===!0&&(e.tomatoInfo=!0,o+="&tomatoes=true"),e.tomato===!1&&(e.tomatoInfo=!1),t.get(o).success(function(t){e.movieData=t,e.picURL="https://api.themoviedb.org/3/find/tt0111161?api_key=31dbddb5b365067fc336786bf1983c21&external_source=imdb_id"});var s="https://api.themoviedb.org/3/find/"+this.movie.imdbID+"?api_key=31dbddb5b365067fc336786bf1983c21&external_source=imdb_id";t.get(s).success(function(t){var o=t.movie_results[0].poster_path;e.movieDataPic="http://image.tmdb.org/t/p/original"+o})}}]);










