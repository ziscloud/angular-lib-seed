angular
    .module('angular-lib-seed-example', [
        'angular-lib-seed.example'
    ])
    .controller('exampleCtrl', function($scope, example) {
        $scope.exampleResult = example();
    });