myApp.controller('HomeController', ["$scope", "$http", function($scope, $http){
    $scope.message = "Home!";

}]);

myApp.controller('AddressController', ["$scope", "$http", function($scope, $http){
    $scope.data = [];

    $scope.getAddressesForUser = function(userID) {

    };

}]);

myApp.controller('OrderController', ["$scope", "$http", function($scope, $http){

}]);