app.controller('mapsCtrl', function($scope, $http) {
  var cities = [
      { name: 'Linköping', longitude: 45, latitude: -73 }
    ];

  $scope.map = {
      center: {
          latitude: 45,
          longitude: -73
      },
      zoom: 8
  };
});
