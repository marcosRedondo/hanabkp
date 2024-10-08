module.exports = () => {
	// Declarations
	const bodyParser = require('body-parser');
	const express = require('express');
	const cors = require('cors');
	
	
	// initialize express
	let app = express();
	app.use(bodyParser.json());
	app.use(cors());

	// Static application angular
	app.use('/', express.static(__dirname + "/dist/hanabkp/browser/"));

	// controllers
	app.use(require('./express/controllers/export.controller'));


	app.listen(3000, function () {
	  console.log('listening on port 3000...');
	});
}


// Start server
if(require.main === module){
	const server = require('./server.js')
	server();
}