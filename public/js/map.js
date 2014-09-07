app.controller('mapsCtrl', function($scope, $http) {
  // map stuff!
  $scope.cities = [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 13}
    ];
  $scope.mapControl = {};
  $scope.mapPoints = houses;
  $scope.currentCity = $scope.cities[0];

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

  $scope.caregivers = caregivers;

  $scope.showHouse = function(house) {
    house.show = !house.show || true;
  }
  $scope.changeCity = function() {
    $scope.currentCity = $scope.selectedCity;
  }
  $scope.hideInstructions = function() {
    return false;
  }
  $scope.caregiverIsSelected = function(house) {
    if($scope.selectedCaregiver && house.caregiver === $scope.selectedCaregiver) {
      console.log($scope.selectedCaregiver);
    }
  }
  $scope.selectCaregiver = function(caregiver) {
    console.log(caregiver);
    console.log("Hej");
    $scope.selectedCaregiver = caregiver;
  }
  
  $scope.switchChange = function() {
    console.log($scope.switches);
  };

});
