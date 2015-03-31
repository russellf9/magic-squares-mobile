// The Magic Squares App
'use strict';

angular.module('magicsquares', ['ionic', 'ngDragDrop', 'angular.filter', 'magicsquares.controllers', 'magicsquares.services'])

    .run(function(_, $ionicPlatform) {
        $ionicPlatform.ready(function() {
            StatusBar.hide();
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "partials/tabs.html"
            })
            .state('tabs.home', {
                url: '/home',
                views: {
                    'home-tab': {
                        templateUrl: "partials/home.html",
                        controller: 'Home',
                        controllerAs: 'home'
                    }
                }
            })
            .state('tabs.game', {
                url: '/game',
                views: {
                    'game-tab': {
                        templateUrl: "partials/game.html",
                        controller: 'Master',
                        controllerAs: 'master'
                    }
                }
            });

        $urlRouterProvider.otherwise("/tab/home");
    });

