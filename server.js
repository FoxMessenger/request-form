// ----------------------------
// dependencies
// ----------------------------
	const express 	= require('express');
	const bodyParser= require('body-parser')
	const app 		= express();
	const mongoose 	= require('mongoose');
	const logger	= require('morgan');
	const Article 	= require("./models/Article");

// ----------------------------
// Sets up the Express App and Data Parsing
// ----------------------------
	app.use(express.static('public'));
	const PORT 		= process.env.PORT || 3000;

	app.use(express.static(process.cwd() + '/public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ----------------------------
// Mongoose
// ----------------------------
	const connectionString = process.env.MONGODB_URI || "mongodb://localhost/nyt-react"

// Mongoose Database configuration
	mongoose.Promise= Promise;
	mongoose.connect(connectionString);
	const db 		= mongoose.connection;

// Mongoose err message
	db.on('err', function(err) {
	  console.log('mongoose Err: ', err);
	});

// Mongoose success message
	db.once('open', function() {
	  console.log('Mongoose connection successful.');
	});

// routes
	const router = require("./controllers/router.js");
	app.use('/', router);

// ----------------------------
// Run Server
// ----------------------------
	app.listen(PORT, function() {
		console.log('App running on port ' + PORT);
	});