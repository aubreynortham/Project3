"use strict";

(function(){
  angular
  .module("photos")
  .controller("PhotoIndexController", [
    "$firebaseArray",
    PhotoIndexControllerFunction
  ]);

  function PhotoIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("photos");
    vm.photos = $firebaseArray(ref);

    vm.create = function(){
      vm.photos.$add(vm.newPhoto).then(function(){
        vm.newPhoto = {};
      });
    }

    vm.delete = function(photo){
      vm.photos.$remove(photo).then(function(){
        $state.go("showIndex", {}, {reload: true});
      })
    }

  }

}());
