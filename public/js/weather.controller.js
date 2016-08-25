(function(){

  angular
  .module("Picstory")
  .controller("WeatherController", [
    "ngResource",
    WeatherControllerFunction
  ])
  function WeatherControllerFunction($resource) {

    var weather = $resource("http://api.wunderground.com/api/aae48019b06c250e/conditions/q/CA/San_Francisco.json", {}, {
      update: {method: "PUT"}
    });
    var firstLoad = true;

    // vm.data holds all of the tweets in the database
    vm.data = Weather.query();
    console.log(vm.data);
  }


}());
