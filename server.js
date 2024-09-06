module.exports = () => {
	var express = require('express');
	var app = express();


	// parser
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());

	// Angular
	app.use('/', express.static(__dirname + "/dist/hanabkp/browser/"));

	app.get('/export', (req, res) => {    
		res.json(
			{
				"Title": "Hola mundo"
			}
		);
	})




	app.listen(3000, function () {
	  console.log('listening on port 3000...');
	});
}

if(require.main === module){
	const server = require('./server.js')
	server();
}