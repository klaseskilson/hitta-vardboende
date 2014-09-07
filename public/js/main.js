$(document).ready(function() {

	$.getJSON('apidata', function(data){
    caregivers = _(caregivers).map(function(caregiver, caregiverindex) {
      caregiver.answers = data[caregiverindex];
      return caregiver;
    });
	});
});
