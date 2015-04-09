(function() {
    'use strict';
    angular.module('magicsquares').controller('Info', ['$scope', function($scope) {

        console.log('17:34 - Hi from the game info!');

        //jscs:disable
        $scope.html = "The <em>Magic Square Game</em> is the first iPhone app released by <a href='http://www.factornine.co.uk'>Factornine</a>";
        //jscs:enable


    }]);
}());

