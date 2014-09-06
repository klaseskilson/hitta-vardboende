var app = angular.module('wookieApp', ['google-maps']);

app.factory('SharedData', function() {
  return {
    selectedCity: null,
    mapData: null
  };
})
