"use strict";

(function(){
  angular
  .module("albums")
  .controller("AlbumIndexController", [
    "$firebaseArray",
    "$scope",
    "uiGmapGoogleMapApi",
    AlbumIndexControllerFunction
  ]);

  function AlbumIndexControllerFunction($firebaseArray, $scope, uiGmapGoogleMapApi){
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
    $scope.map = {
    center: {
        latitude: 38.2,
        longitude: -98.5795
    },
    zoom: 4
};
var mapPins = firebase.database().ref();
$scope.userInput = '';

$scope.markers = $firebaseArray(mapPins);


$scope.events = {
    click: function (map, eventName, handlerArgs) {
        if ($scope.userInput == '' || $scope.userInput == undefined) {
                console.log($scope.userInput)
                return alert("Please fill out a form before placing a marker");
            }
        $scope.$apply(function() {
            //console.log($scope.markers)
            //console.log(handlerArgs)

            $scope.markers.$add({
                id: $scope.markers.length,
                latitude: handlerArgs[0].latLng.lat(),
                longitude: handlerArgs[0].latLng.lng(),
                showWindow: true,
                title: $scope.userInput,
                options: {
                    animation: api.Animation.DROP,
                    title: handlerArgs[0].latLng.toUrlValue(),
                    disableAutoPan: true
                }
            });
           return $scope.userInput = '';
        });
    }
};

};

}());
