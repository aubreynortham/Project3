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
    vm.albums.$loaded().then(function(){
      angular.forEach(vm.albums, function(album) {
            console.log( album );
            console.log( album.photos );
            console.log( album.photos.val(0) );
        })

    })

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

    $scope.map = {
      center: {
        latitude: 40.390182,
        longitude: -2
      },
      zoom: 7
    };


    var mapPins = vm.albums
    $scope.markers = [mapPins];
    vm.createMarker = function (album){
      // console.log(album);
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(album.photos[0].latitude, album.photos[0].longitude),
        title: album.album_title
      });
    }

    // vm.createMarker(vm.albums["0"])

  };

}());
