app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contacts = [
    {
      name: "Harry Potter",
      email: "theBoyWhoLived@hogwarts.edu",
      phone: "555-8903-5234",
      id: 0,
      image: 'https://media.giphy.com/media/10FzkePmCE8aGI/giphy.gif'
    },
    {
      name: "Ron Weasley",
      email: "hotGinger@hogwarts.edu",
      phone: "555-4325-65464",
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
