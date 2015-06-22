'use strict';

/**
 * @ngdoc function
 * @name sonosDisplayApp.controller:MainCtrl
 * @description
 * # sonosDisplayCtrl
 * Controller of the sonosDisplayApp
 */
angular.module('sonosDisplayApp')
  .factory('sonosSocket', function (socketFactory, $window) {
    var ioSocket = io.connect();
    return socketFactory({ioSocket: ioSocket});
  })
  .controller('MainCtrl', function ($scope, sonosSocket) {
    $scope.track = {};
    sonosSocket.on('trackupdate', function(track) {
      $scope.track = track;
      $scope.track.progress = (100 / track.duration) * track.position;
    });
  });
