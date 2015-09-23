app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
});


app.filter('camel', function () {
  return function (input) {
    var parts;
    for (var i = 0; i < input.length; i++) {
      if(input.charAt(i) === '-'){
        parts = input.split('-');
          for (var j = 1; j < parts.length; j++) {
            parts[j] = parts[j].charAt(0).toUpperCase() + parts[j].slice(1);
          }
          return parts.join().replace(/,/g , "");
      }
      if(input.charAt(i) === '_'){
        parts = input.split('_');
        for (var k = 1; k < parts.length; k++) {
          parts[k] = parts[k].charAt(0).toUpperCase() + parts[k].slice(1);
        }
        return parts.join().replace(/,/g , "");
      }
    }
    return input;
  };
});


app.filter('pigLatin', function () {
  var newWord = [];
  return function (input) {
    input = input.toLowerCase().split(' ');
    for (var i = 0; i < input.length; i++) {
      if(['a', 'e', 'i', 'o', 'u'].indexOf(input[i].charAt(0)) !== -1){
        input[i]= input[i] + 'yay';
        newWord.splice(i, 0, input[i]);
      }
      else{
      var word = input[i].split('');
      var index = word.length - 1;
      var letter = word[0] +'ay';
      word.splice(0, 1);
      word.splice(index, 0, letter);
      word = word.join().replace(/,/g , "");
      newWord.splice(i, 0, word);
      }
    }
    return newWord.join().replace(/,/g , " ");
  };
});


app.filter('redact', function () {
  return function (input, redacted) {
    input = input.split(' ');
    for (var i = 0; i < input.length; i++) {
      if(input[i] === redacted){
        input.splice(i, 1, "REDACTED");
      }
    }
    return input.join().replace(/,/g , " ");
  };
});


app.filter('moneyBags', function(){
  return function (input){
    input = input.toString().split('');
    var index = input.length - 2;
    input.splice(index, 0, '.');
    input.splice(0, 0, '$');
    return input.join().replace(/,/g , "");
  };
});

app.filter('trueYes', function () {
  return function(input){
    if(input === true){
      return "Yes";
    }
    else{
      return "No";
    }
  };
});


app.filter('checkoutBag', function(){
  return function(input){
    if (input === 0){
      return "Empty!";
    }else{
      return '(' + input + ')';
    }
  };
});

app.filter('pokeMoves', function(){
  return function(input){
    var useMoves = [];
    for (var i = 0; i < 6; i++) {
      useMoves.push(input[i].name);
    }
    return useMoves.join().replace(/,/g , ", ");
  };
});

app.filter('pokeTypes', function(){
  return function(input){
    var useTypes = [];
    for (var i = 0; i < input.length; i++) {
      useTypes.push(input[i].name);
    }
    return useTypes.join().replace(/,/g , ", ");
  };
});
