var cities = [
  {
    "album_title": "Madrid",
        "photos": [
                    {"photo_url": "https://thewildwanderer.files.wordpress.com/2013/06/retiro-park.jpg",
                    "latitude": "40.457023",
                    "longitude": "-3.677725",
                    "timestamp": "2012-04-23T18:25:43.511Z"},


                    {"photo_url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg",
                    "latitude": "40.415384",
                    "longitude": "-3.707413",
                    "timestamp": "2012-04-23T18:25:43.511Z"}
                  ]
  },
  {
    "album_title": "Barcelona",
        "photos": [
                    {"photo_url": "http://www.moodychicas.com/wp-content/uploads/2016/01/barcelona.jpg",
                    "latitude": "41.412315",
                    "longitude": "2.158531",
                    "timestamp": "2012-04-25T18:25:43.511Z"}
                  ]
  }
]



          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
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

              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });
