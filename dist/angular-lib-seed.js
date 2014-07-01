// ### example.service.js >>

angular
    .module('angular-lib-seed.example', [ ])
    .factory('example', function($rootScope) {
        return function() {
            $rootScope.example = true;

            return true;
        };
    });


// ### << example.service.js



// ### main.js >>

angular
	.module('angular-lib-seed', [
		'angular-lib-seed.submodule'
	]);


// ### << main.js


