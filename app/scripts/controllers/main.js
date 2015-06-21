'use strict';

/**
 * @ngdoc function
 * @name toysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toysApp
 */
angular.module('toysApp')
  .factory('sonosSocket', function (socketFactory, $window) {
    var ioSocket = io.connect($window.location.hostname + ':3000');
    return socketFactory({ioSocket: ioSocket});
  })
  .controller('MainCtrl', function ($scope, sonosSocket) {
    $scope.track = {};
    sonosSocket.on('trackupdate', function(track) {
      $scope.track = track;
      $scope.track.progress = (100 / track.duration) * track.position;
    });
  });
