angular.module('starter.services', [])
.factory('Favorites', function($http) {
	$url = "https://api.500px.com/v1/photos?feature=user_favorites&username=basel&consumer_key=xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8";
	return $http({method: 'GET', url: $url});
})
.factory('Photos', function($http) {
	$url = "https://api.500px.com/v1/photos?username=basel&consumer_key=xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8";
	return $http({method: 'GET', url: $url});
})
.factory('Friends', function($http) {
	$url = "https://api.500px.com/v1/users/1632539/friends?consumer_key=xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8";
	return $http({method: 'GET', url: $url});
});
