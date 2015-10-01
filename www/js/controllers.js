angular.module('starter.controllers', [])

.controller('PhotosCtrl', function($scope, Photos, $ionicLoading) {
	$ionicLoading.show();
	$scope.photos = {};
	Photos.success(function(response) {
        $scope.photos = response;
		$ionicLoading.hide();
    });

})

.controller('FriendsCtrl', function($scope, Friends, $ionicLoading) {
	$ionicLoading.show();
	$scope.friends = {};
	Friends.success(function(response) {
		$scope.friends = response;
		$ionicLoading.hide();
    });

})

.controller('FavoritesCtrl', function($scope, Favorites, $ionicLoading) {
	$ionicLoading.show();
	$scope.favorites = {};
	Favorites.success(function(response) {
        $scope.favorites = response;
		$ionicLoading.hide();
    });
});
