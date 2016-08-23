"use strict";

(function(){

  angular
  .module("photos")
  .controller("PhotoShowController", [
    "$stateParams",
    "$firebaseObject",
    PhotoShowControllerFunction
  ]);

  function PhotoShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref().child("photos/" + $stateParams.id);

    $firebaseObject(ref).$loaded().then(function(photo){
      vm.photo = photo
    });

    vm.update = function(){
      vm.photo.$save()
    }
  }

}());
