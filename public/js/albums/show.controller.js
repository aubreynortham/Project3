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



            //Google Maps Angular App Module and Controller
            var sampleApp = angular.module('Picstory', []);
            sampleApp.controller('MapCtrl', function ($scope) {

                var mapOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(40, 3),
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                $scope.markers = [];

                var infoWindow = new google.maps.InfoWindow();

                var createMarker = function (info){
                    console.log(info);
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: new google.maps.LatLng(info.photos[0].latitude, info.photos[0].longitude),
                        title: info.album_title
                    });
                    marker.content = '<div class="infoWindowContent">' + '</div>';

                    google.maps.event.addListener(marker, 'click', function(){
                        // infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                        // infoWindow.open($scope.map, marker);
                    });

                    $scope.markers.push(marker);

                }

                for (i = 0; i < collections.length; i++){
                    createMarker(collections[i]);
                }

                $scope.openInfoWindow = function(e, selectedMarker){
                    e.preventDefault();
                    google.maps.event.trigger(selectedMarker, 'click');
                }

            });


}());
