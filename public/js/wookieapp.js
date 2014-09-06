var app = angular.module('wookieApp', ['google-maps']);

app.factory('SharedData', function() {
  return {
    selectedCity: null,
    cities: [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 13},
      { name: 'PEKING', location: { latitude: 58.41, longitude: 15.62 }, zoom: 13}
    ]
  };
})
