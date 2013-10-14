'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
	$scope.phones = [
		{'name':'Nexus S', 'snippet':'Fast just got faster with nexus s'},
		{'name':'iPhone 5C', 'snippet':'Your life just got more colourful'},
		{'name':'iPhone 5S', 'snippet':'Take mobile to the next level'}
	];

	$scope.people = [
		{'name':'Anthony Ikeda', 'gender':'Male'},
		{'name':'Paul Potter', 'gender':'Male'},
		{'name':'Wendy Williams', 'gender':'Female'},
		{'name':'Jessica Jones', 'gender':'Female'}
	];

	$scope.age = 2013 - 1974;
});
