"use strict";

(function(){

  angular
  .module("albums")
  .controller("AlbumShowController", [
    "$stateParams",
    "$firebaseObject",
    AlbumShowControllerFunction
  ]);

  function AlbumShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref().child("albums/" + $stateParams.id);

    $firebaseObject(ref).$loaded().then(function(album){
      vm.album = album
    });

    vm.update = function(){
      vm.album.$save()
    }
  }

}());
