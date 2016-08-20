"use strict";

(function(){
  angular
  .module("PLACEHOLDER", [
    "ui.router",
    "firebase",
    "photos"
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
    .state("photoIndex", {
      url: "/photos",
      templateUrl: "js/photos/index.html",
      controller: "PhotoIndexController",
      controllerAs: "PhotoIndexViewModel"
    })
    .state("photoShow", {
      url: "/photos/:id",
      templateUrl: "js/photos/show.html",
      controller: "PhotoShowController",
      controllerAs: "PhotoShowViewModel"
    });
  }
}());
