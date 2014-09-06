app.controller('mapsCtrl', function($scope, $http) {
  var cities = [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 13}
    ];

  $scope.map = {
    center: cities[0].location,
    zoom: cities[0].zoom,
    options: {
    	styles: mapStyle
   }
  };
});
