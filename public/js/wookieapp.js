var app = angular.module('wookieApp', ['google-maps']);

app.factory('SharedData', [ '$rootScope', function($rootScope) {
  var service = {};

  var cities = [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 13}
    ];

  service.cities = cities;
  service.currentCity = cities[0];

  service.setCity = function(city) {
    service.currentCity = city;
  }
  service.notifyUpdate = function() {
    $rootScope.$broadcast('selectedCityChanged', {});
  }

  return service;
}])
