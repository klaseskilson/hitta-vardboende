exports.getData = function(req, res) {

	var Client = require('node-rest-client').Client;
	var _ = require('underscore');

	client = new Client();

	// direct way
	client.get("http://opendata.linkoping.se/ws_opendata/main.asmx/GetFileRaw?CustomKey=12d33c95656d4999b0beea816b7c324a&filename=kvalitetsarbete_omsorg_eldre_oma03.xml", function(data, response){

		//Retrieve the correct datastring
		cleanResult = data.statinfo_xdf.statdata[0].xdf[0].array[0].data[0].split('\n');

		//Create a new array that we can return
		var returnResult = new Array();

		//Loop trough to get the correct dataset

		for(i = 2; i < 9; i++)
			 returnResult[i-2] = cleanResult[i].split(" ");

		//Cleanup and remove unnecessary values
		returnResult = _.map(returnResult, function(q){
			return _.filter(q, function(num, index) {
				return ((index-2) % 3) == 0;
			})
		})

	//Send to frontend
	res.json(returnResult);
});
};
