var MongoClient = require('mongodb').MongoClient;

function mongoService(mongoDbUri) {
	var connection;

	MongoClient.connect(mongoDbUri, function (err, database) {
		if (err) {
			console.log(err);
			throw err;
		}
		//Database connection not yet fully configured.
		console.log('Connection to MongoDB successful!');
	});
	setTimeout(function () {
		if (connection) {
			console.log('Connected to CONJURE database successfully.');
		} else {
			console.warn('Connection to CONJURE database not yet successful. Please check the logs for errors.')
		}
	}, 3000);

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