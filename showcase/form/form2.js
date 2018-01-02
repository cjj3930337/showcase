var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    //$scope.user = 'John Doe';
    //$scope.email = 'john.doe@gmail.com';
    $scope.phone = '';
});

app.controller('addStaffCtrl', function($scope) {
    $scope.staffVO = {
        name: ''
    };
    $scope.name = '';
});