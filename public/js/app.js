"use strict";

(function(){
  angular
  .module("Picstory", [
    "ui.router",
    "firebase",
    "albums"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Welcome", {
      url: "",
      templateUrl: "js/welcome.html"
    })
    .state("albumIndex", {
      url: "/albums",
      templateUrl: "js/albums/index.html",
      controller: "AlbumIndexController",
      controllerAs: "AlbumIndexViewModel"
    })
    .state("albumShow", {
      url: "/albums/:id",
      templateUrl: "js/albums/show.html",
      controller: "AlbumShowController",
      controllerAs: "AlbumShowViewModel"
    });
  }


  app = angular.module('ModalDemo', []);
  app.directive('modalDialog', function() {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
      },
      template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    };
  });

  app.controller('MyCtrl', ['$scope', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
  }]);



}());
