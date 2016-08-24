"use strict";

(function(){

  angular
  .module("albums")
  .controller("AlbumShowController", [
    "$stateParams",
    "$firebaseObject",
    AlbumShowControllerFunction
  ])
  function AlbumShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref().child("albums/" + $stateParams.id);

    var syncObject = $firebaseObject(ref);
    syncObject.$loaded().then(function(album){
      vm.album = album
      console.log(vm.album);
    });

    vm.create = function(){
      try {
      vm.album.photos.push(vm.newPhoto)
    }
    catch(err) {
      vm.album.photos = []
      vm.album.photos.push(vm.newPhoto);
    }
      vm.album.$save().then(function(){
        vm.newPhoto = {};
      });
    }

    vm.update = function(){
      vm.album.$save()

    }
    vm.delete = function($index){
      vm.album.photos.splice($index, 1)
      vm.album.$save()
    }
  }


}());
