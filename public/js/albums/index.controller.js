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

    vm.create = function(){
      vm.albums.$add(vm.newAlbum).then(function(){
        vm.newAlbum = {};
      });
    }

    vm.delete = function(album){
      vm.albums.$remove(album).then(function(){
        $state.go("showIndex", {}, {reload: true});
      })
    }

  }


}());
