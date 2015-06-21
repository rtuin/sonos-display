'use strict';

/**
 * @ngdoc overview
 * @name sonosDisplayApp
 * @description
 * # sonosDisplayApp
 *
 * Main module of the application.
 */
angular
  .module('sonosDisplayApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
