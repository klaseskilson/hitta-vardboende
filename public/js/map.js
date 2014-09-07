app.controller('mapsCtrl', function($scope, $http) {
  // map stuff!
  $scope.cities = [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 12}
    ];
  $scope.mapControl = {};
  $scope.mapPoints = houses;
  $scope.currentCity = $scope.cities[0];

  $scope.selectedCaregiver = '';

  $scope.map = {
    center: $scope.currentCity.location,
    zoom: $scope.currentCity.zoom,
    options: {
      panControl: false,
      styles: mapStyle,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      }
    }
  };

  $scope.caregivers = caregivers;
  $scope.topics = topics;
  $scope.activeTopics = [];

  $scope.showHouse = function(house) {
    house.show = !house.show || true;
  }
  $scope.changeCity = function() {
    $scope.currentCity = $scope.selectedCity;
  }
  $scope.hideInstructions = function() {
    return false;
  }
  $scope.hasCaregiverSelected = function(){
    return $scope.selectedCaregiver !== '';
  }
  $scope.caregiverIsSelected = function(house) {
    if($scope.selectedCaregiver && house.caregiver === $scope.selectedCaregiver) {
      console.log($scope.selectedCaregiver);
    }
  }
  $scope.selectCaregiver = function(caregiver) {
    $scope.selectedCaregiver = caregiver;
  }

  $scope.calculateScore = function(caregiver) {
    var sum = 0;

    _($scope.activeTopics).each(function(topic, index) {
      var theTopic = _.findWhere(topics, {id: topic});
      var topicIndex = _.indexOf(topics, theTopic);
      var value = parseFloat(caregiver.answers[topicIndex]);
      sum += value;
    });

    return sum;
  }

  $scope.switchChange = function() {
    $scope.activeTopics = [];
    for(var k in $scope.switches) {
      if($scope.switches[k]) {
        $scope.activeTopics.push(k);
      }
    }
  };
  
  $scope.start = true;
 console.log($scope.start);
  $scope.startCheck = function(){
    $scope.start = false;
    console.log($scope.start);
  };



});
