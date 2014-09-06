app.controller('mapsCtrl', function($scope, $http, SharedData) {
  $scope.cities = SharedData.cities;

  $scope.map = {
    center: cities[0].location,
    zoom: cities[0].zoom,
    options: {
      panControl: false,
    	styles: mapStyle,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      }
    }
  };
});
