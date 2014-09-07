app.controller('mapsCtrl', function($scope, $http) {
  // map stuff!
  $scope.cities = [
      { name: 'Linköping', location: { latitude: 58.41, longitude: 15.62 }, zoom: 12}
    ];
  $scope.mapControl = {};
  $scope.mapPoints = houses;
  $scope.currentCity = $scope.cities[0];

  $scope.selectedCaregiver = '';
  $scope.selectedCaregiverData = {};

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
    return $scope.activeTopics.length > 0;
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
    if (caregiver !== '') {
      var theCaregiver = _.findWhere($scope.caregivers, {name: caregiver});
      $scope.selectedCaregiverData.access = theCaregiver.answers[1];
      $scope.selectedCaregiverData.treatment = theCaregiver.answers[2];
      $scope.selectedCaregiverData.participation = theCaregiver.answers[3];
      $scope.selectedCaregiverData.information = theCaregiver.answers[4];
      $scope.selectedCaregiverData.food = theCaregiver.answers[5];

      $scope.selectedCaregiverData.count = _($scope.mapPoints).findWhere({'caregiver': caregiver});

      console.log($scope.selectedCaregiverData);
    } else {
      $scope.selectedCaregiverData = {};
    }
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

  $scope.startCheck = function(){
    $scope.start = false;
    console.log($scope.start);
  };
});
