var app = angular.module('userProfiles');

app.controller('mainController', ['$scope', 'mainService', function ($scope, mainService) {
	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	};

	$scope.getUsers();
	
}]);








		