'use strict';

function profileDao(connection) {
	var dbConnection = connection;
	return {
		getProfiles: getProfiles,
		createProfile: createProfile
	};

	function getProfiles() {

	}

	function createProfile(profile) {

	}

}

module.exports = profileDao;