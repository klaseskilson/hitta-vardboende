exports.getData = function(req, res) {
	var Client = require('node-rest-client').Client;
	client = new Client();
	// direct way
	client.get("http://opendata.linkoping.se/ws_opendata/main.asmx/GetFileRaw?CustomKey=12d33c95656d4999b0beea816b7c324a&filename=kvalitetsarbete_omsorg_eldre_oma03.xml", function(data, response){
	res.json(data);
});
};