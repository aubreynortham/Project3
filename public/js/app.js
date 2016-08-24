"use strict";

(function(){
  angular
  .module("Picstory", [
    "ui.router",
    "albums",
    "firebase",
    "uiGmapgoogle-maps"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: "AIzaSyAmgLKNyifrTtKdg9ndThEdRTopEWeAmDw",
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'places',
    });
})

function RouterFunction($stateProvider){
  $stateProvider
  .state("Welcome", {
    url: "",
    templateUrl: "js/welcome.html"
  })
  .state("Planner", {
    url: "/planner",
    templateUrl: "js/planner.html"
  })
  .state("Photography", {
    url: "/protips",
    templateUrl: "js/photography.html"
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
