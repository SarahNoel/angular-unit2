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
    templateUrl: 'partials/directives/poke-details.html',
    scope: {
      pokemon: '=pokemonData',
      sprite: '=spriteData',
      spriteImage: '=spriteImage',

    }
  };
});
