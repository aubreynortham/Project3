"use strict";

(function(){
  angular
  .module("albums")
  .controller("AlbumIndexController", [
    "$firebaseArray",
    "$firebaseObject",
    AlbumIndexControllerFunction
  ]);

  function AlbumIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("albums");
    vm.albums = $firebaseArray(ref);

    vm.anotherAlbum = {};
    vm.create = function(){
      vm.albums.$add(vm.anotherAlbum);
      vm.anotherAlbum = {};
    }
    vm.update = function(album) {
      vm.albums.$save(album)
    }
    vm.destroy = function(album) {
      vm.albums.$remove(album)
    }

  }



}());
