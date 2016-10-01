var MongoClient = require('mongodb').MongoClient;

function mongoService(mongoDbUri) {
	var connection;

	MongoClient.connect(mongoDbUri, function (err, database) {
		if (err) {
			console.log(err);
			throw err;
		}
		connection = database;
		console.log('Connection to MongoDB successful!');
		var collection = database.collection('profiles');
		collection.find().each(function (err, profile) {
			if (profile) {
				console.dir(profile);
			}
				}
		);

	});
	setTimeout(function () {
		if (connection) {
			console.log('Connected to CONJURE database successfully.');
		} else {
			console.warn('Connection to CONJURE database not yet successful. Please check the logs for errors.')
		}
	}, 1000);

	return {
		getConnection: getConnection,
		closeConnection: closeConnection
	};


	function getConnection() {
		return connection;
	}

	function closeConnection() {
		// Close the connection with a callback that is optional
		connection.close(function (err, result) {
			if (err) {
				throw err;
			}
			console.log('Closed mongodb connection!');
		});
	}


}

module.exports = mongoService;