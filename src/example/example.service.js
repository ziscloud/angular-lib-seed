angular
    .module('angular-lib-seed.example', [ ])
    .factory('example', function($rootScope) {
        return function() {
            $rootScope.example = true;

            return true;
        };
    });
