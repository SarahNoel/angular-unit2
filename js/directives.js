app.directive('gsAngularLogo', function() {
  return {
    template: "<img class = 'logo' src= 'https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png'>"
  };
});


app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
  };
});


app.directive('pokemonDetails', function() {
  return {
    restrict:'E',
    templateUrl: 'partials/directives/poke-details.html',
    scope: {
      pokemon: '=pokemonData',
      spriteImage: '=spriteImage',
    }
  };
});

app.directive('gsChangeBackground', function() {
  return {
    restrict:'A',
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');
      var oldTextColor = element.css('color');
      var newColor;
      var newTextColor;

      element.on('keyup', function (){
        newColor = scope.background;
        newTextColor = scope.text;
      });

      element.on('mouseenter', function(event) {
        element.css({'background-color':newColor, 'color':newTextColor});
      });

      element.on('mouseleave', function(event) {
        element.css({'background-color': oldColor, 'color':oldTextColor});
      });
    }
  };
});


app.directive('imageCarousel', function() {
  return {
    restrict:'A',
    scope: true,
    link: function(scope, element, attrs) {
      var images=['http://i.imgur.com/ccr9Lg1.jpg', 'http://1.bp.blogspot.com/-zEa6qP2BNQY/UDg-CDnhamI/AAAAAAAABvw/0or33fwAZCM/s1600/Cat+shaming1.JPG', 'http://oddstuffmagazine.com/wp-content/uploads/2012/11/102.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/69/f6/0c/69f60cf568814227e2db9135e61f5958.jpg', 'http://a.dilcdn.com/bl/wp-content/uploads/sites/8/2012/10/chicken-shame.jpg', 'http://static.boredpanda.com/blog/wp-content/uploads/2015/03/cat-shaming-29__605.jpg', 'http://i.imgur.com/d3NCrvb.jpg', 'http://i.imgur.com/CjFBkgx.jpg'];
      var length = images.length;
      scope.image0 = images[length - 2];
      scope.image1 = images[length - 1];
      scope.image = images[0];
      scope.image3 = images[1];
      scope.image4 = images[2];

      scope.prevPic = function(name){
        num = images.indexOf(name);
        var length = images.length;
        scope.image0 = images[checkNum(num - 3, length)];
        scope.image1 = images[checkNum(num - 2, length)];
        scope.image = images[checkNum(num + 1, length)];
        scope.image3 = images[checkNum(num + 2, length)];
        scope.image4 = images[checkNum(num + 3, length)];
      };

      scope.nextPic = function(name){
        num = images.indexOf(name);
        length = images.length - 1;
        scope.image0 = images[checkNum(num + 3, length)];
        scope.image1 = images[checkNum(num + 2, length)];
        scope.image = images[checkNum(num + 1, length)];
        scope.image3 = images[checkNum(num - 2, length)];
        scope.image4 = images[checkNum(num - 3, length)];
      };
    }
  };
});






function checkNum(num, length){
  if(num < 0){
    num = length + num;
  }
  else if(num === length){
    num = 0;
  }
  else if(num > length){
    num = -(length - num);
  }
  return num;
}














