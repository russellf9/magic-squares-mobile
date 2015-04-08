(function() {
    'use strict';
    // the `highest` controller the app
    angular.module('magicsquares').controller('Content', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {

        console.log('hi from content!');

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }]);
}());
