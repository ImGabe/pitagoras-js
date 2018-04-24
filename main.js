// Hello World! :)
console.log("Hellow World!")

// Angular JS

// Parametros definidos como 3, 4 ,5
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.Hip= "5";
    $scope.Co= "4";
    $scope.Ca= "3";
});