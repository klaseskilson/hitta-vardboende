app.controller('sidebarCtrl', function($scope, $http, SharedData) {
  $scope.cities = SharedData.cities;
  $scope.currentCity = SharedData.currentCity;

  $scope.changeCity = function() {
    $scope.currentCity = $scope.selectedCity;
  }
});
