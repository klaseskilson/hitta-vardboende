app.controller('sidebarCtrl', function($scope, $http, SharedData) {
  $scope.cities = SharedData.cities;
  $scope.currentCity = SharedData.currentCity;

  $scope.changeCity = function() {
    SharedData.setCity($scope.selectedCity);
    SharedData.notifyUpdate();
    $scope.currentCity = SharedData.currentCity;
  }

  $scope.hideInstructions = function() {
    return false;
  }
});
