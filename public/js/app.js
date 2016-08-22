"use strict";

(function(){
  angular
  .module("Picstory", [
    "ui.router",
    "albums",
    "firebase"
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
}());
