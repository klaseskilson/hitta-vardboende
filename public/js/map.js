app.controller('mapsCtrl', function($scope, $http, SharedData) {
  $scope.mapControl = {};
  $scope.cities = SharedData.cities;
  $scope.currentCity = SharedData.currentCity;

  $scope.map = {
    center: $scope.currentCity.location,
    zoom: $scope.currentCity.zoom,
    options: {
      panControl: false,
      styles: mapStyle,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      }
    }
  };

  $scope.$on('selectedCityChanged', function(event, args) {
    $scope.currentCity = SharedData.currentCity;
    $scope.mapControl.refresh($scope.currentCity.location);
  });
});
