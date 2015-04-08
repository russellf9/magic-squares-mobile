(function() {
    'use strict';
    // the `highest` controller the app
    angular.module('magicsquares').controller('Navigation', ['$scope', '$state', '$ionicSideMenuDelegate', '$ionicHistory', function($scope, $state,$ionicSideMenuDelegate, $ionicHistory) {

        console.log('hi from Navigation!');

        // wasn't able to use the history so using a `hard-coded` reference
        this.goBack = function() {
            $state.go('tabs.game');
        };
    }]);
}());
