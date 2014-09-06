$(document).ready(function() {

	$.getJSON('apidata', function(data){
		console.log(data);
	})
});
var app = angular.module('wookieApp', ['google-maps']);