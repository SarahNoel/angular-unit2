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
    scope:true,
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');
      var oldTextColor = element.css('color');

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




















