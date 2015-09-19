app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contacts = [
    {
      name: "Harry Potter",
      email: "theBoyWhoLived@hogwarts.edu",
      phone: "555-890-5234",
      id: 0,
      image: 'https://media.giphy.com/media/10FzkePmCE8aGI/giphy.gif'
    },
    {
      name: "Ron Weasley",
      email: "hotGinger@hogwarts.edu",
      phone: "555-432-6544",
      id: 1,
      image: 'https://media.giphy.com/media/Kedk795ATlgYM/giphy.gif'
    },
    {
      name: "Remus Lupin",
      email: "howlAtTheMoon@hogwarts.edu",
      phone: "555-412-9808",
      id: 2,
      image: 'https://media.giphy.com/media/7gZX4Q4qQxnvG/giphy.gif'
    }
  ];

  ContactList.addContact = function($scope, $http) {
    if($scope.newContactData.$valid){
      var profilePic;
      var newId = ContactList.contacts.length;
       var useName = $scope.name.split(' ')[0];
        $http.get('http://api.giphy.com/v1/gifs/search?q='+useName+'&api_key=dc6zaTOxFJmzC')
        .success(function(data){
          profilePic = data.data[0].images.fixed_height.url;
          var newPeep=
            {
              name: $scope.name,
              email: $scope.email,
              phone: $scope.phone,
              id: newId,
              image: profilePic
            };
          ContactList.contacts.push(newPeep);
          $scope.name = $scope.email = $scope.phone = ('');
          });
        }
    };
  ContactList.singleContact = function($scope, $http, userId){
    var useName;
    for (var i = 0; i < $scope.contacts.length; i++) {
      if(+$scope.contacts[i].id === +userId){
        $scope.userData = $scope.contacts[i];
      }
    }
  };
  return ContactList;
});


app.factory('MovieService', function(){
  var MovieService = {};
  MovieService.showAllResults = function($scope, $http){
  $scope.show = false;
    var movie = 'http://www.omdbapi.com/?s='+$scope.movieTitle +'&r=json';
    $http.get(movie)
    .success(function(data){
      $scope.movies = data.Search;
    });
  };
  MovieService.pickOneMovie = function($scope, $http, place){
     var movie;
    $scope.show = true;
    movie = 'http://www.omdbapi.com/?i='+ place.movie.imdbID +'&plot=full&r=json';
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
    var movie2 = 'https://api.themoviedb.org/3/find/'+ place.movie.imdbID +'?api_key=31dbddb5b365067fc336786bf1983c21&external_source=imdb_id';
    $http.get(movie2)
    .success(function(data){
      var picPath = data.movie_results[0].poster_path;
      $scope.movieDataPic = 'http://image.tmdb.org/t/p/original' + picPath;
    });
  };
  return MovieService;
});


app.factory('AjaxService', function(){
  var AjaxService = {};
  AjaxService.zenGet = function ($scope, $http){
    $http.get('https://api.github.com/zen')
      .then(function(data){
        $scope.zenData = data.data;
    });
  };
  AjaxService.getMessages =function($scope, $http){
    $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .success(function(data){
      $scope.messages = data;
    });
  };
  AjaxService.sendMessage = function($scope, $http){
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {message:{name:$scope.userName, content:$scope.userContent}})
    .then(function(data){
      $scope.userName = $scope.userContent = ('');
      $scope.confirm = "Message sent!";
    });
  };
  return AjaxService;
});


app.factory('ShoppingList', function(){
  var ShoppingList = {};
  ShoppingList.shoppingBag = [];

  // ShoppingList.addToBag= function($scope, place){
  //   var TeaInBag = function(tea, quantity){
  //     place.tea = tea;
  //     place.quantity = quantity;
  //   };
  //     var quantity = place.teaQuantity;
  //     if(quantity === undefined){
  //       quantity = 1;
  //     }
  //     if(quantity === 0){
  //       return;
  //     }
  //     var newTea = new TeaInBag(place.tea, quantity);
  //     if($scope.shoppingBag.length === 0){
  //       $scope.shoppingBag.push(newTea);
  //       console.log($scope.shoppingBag);
  //       return;
  //     }else{
  //       for (var i = 0; i < $scope.shoppingBag.length; i++) {
  //         console.log($scope.shoppingBag);
  //         if($scope.shoppingBag[i].tea === place.tea){
  //           $scope.shoppingBag[i].quantity = parseFloat($scope.shoppingBag[i].quantity) + parseFloat(quantity);
  //             console.log($scope.shoppingBag);
  //             return;
  //         }else{
  //           $scope.shoppingBag.push(newTea);
  //           console.log($scope.shoppingBag);
  //           return;
  //         }
  //       }
  //     }
  //   };
  ShoppingList.teaList = [
    {
      "_id": "55c8ee82152165d244b98300",
      "name": "Bayard stew",
      "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
      "caffeineScale": 244,
      "price": 1540,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
      __v: 0,
      "categories": [ "dark", "cold"]
    },

    {
      "_id": "55c8ee82152165d244b98301",
      "name": "Incompactness syrup",
      "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
      "caffeineScale": 49,
      "price": 7348,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
      __v: 0,
      "categories": ["awesome"]
    },
    {
      "_id": "55c8ee82152165d244b98302",
      "name": "Flexner white tea",
      "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
      "caffeineScale": 38,
      "price": 4991,
      "inStock": true,
      "rating": 4,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      __v: 0,
      "categories": ["cold"]
    },
    {
      "_id": "55c8ee82152165d244b98303",
      "name": "Pressor leaf",
      "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
      "caffeineScale": 153,
      "price": 5496,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      __v: 0,
      "categories": ["dry", "hot", "awesome"]
    },
    {
      "_id": "55c8ee82152165d244b98304",
      "name": "Flexner veggie tea",
      "ingredients": "cream of tartar, eggplant, cake, deer antler",
      "caffeineScale": 181,
      "price": 2445,
      "inStock": false,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
      __v: 0,
      "categories": ["summer"]
    },
    {
      "_id": "55c8ee82152165d244b98305",
      "name": "Topflighter malt",
      "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
      "caffeineScale": 241,
      "price": 4486,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
      __v: 0,
      "categories": ["dry","lucid","warm"]
    },
    {
      "_id": "55c8ee82152165d244b98306",
      "name": "Cooking mix",
      "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
      "caffeineScale": 230,
      "price": 6973,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
      __v: 0,
      "categories": ["summer"]
    },
    {
      "_id": "55c8ee82152165d244b98307",
      "name": "Cooking stew",
      "ingredients": "eggplant",
      "caffeineScale": 122,
      "price": 6003,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      __v: 0,
      "categories": ["dry","winter","lucid"]
    },
    {
      "_id": "55c8ee82152165d244b98308",
      "name": "Prevenient herb tea",
      "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
      "caffeineScale": 196,
      "price": 1374,
      "inStock": false,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
      __v: 0,
      "categories": ["lucid","hot"]
    },
    {
      "_id": "55c8ee82152165d244b98309",
      "name": "Angular mix",
      "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
      "caffeineScale": 196,
      "price": 4158,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
      __v: 0,
      "categories": ["spring", "warm","winter"]
    }
  ];





  return ShoppingList;
});




























