// Hello World! :)
console.log("Hellow World!")

// Angular JS

// Parametros definidos como 3, 4 ,5
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.Hip= 5;
    $scope.Co= 4;
    $scope.Ca= 3;
});

function test() {

    // Hipotenusa
    var x = document.getElementsByClassName("hip")[0];
    var hip = x.value;

    // Caceto oposto
    var y = document.getElementsByClassName("co")[0];
    var co = y.value;

    // Caceto adjacente
    var z = document.getElementsByClassName("ca")[0];
    var ca = z.value;

    // Teorema

    var hip2 = hip * hip;
    var co2 = co * co;
    var ca2 = ca * ca;
    var pit = hip2 == co2 + ca2;

    console.log(hip2);
    console.log(co2);
    console.log(ca2);

    // Acerto/Error
    var error = document.getElementsByClassName("erro")[0];

    if(!pit) {
        error.innerHTML = "Errado";
        console.log("Errado");
    } else {
        error.innerHTML = " ";
    };
};