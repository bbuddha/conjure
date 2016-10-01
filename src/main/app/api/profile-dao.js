'use strict';

function profileDao(connection) {
  var dbConnection = connection;
  return {
    getProfiles: getProfiles,
    createProfile: createProfile
  };

  function getProfiles() {
    dbConnection.find();
  }

  function createProfile(profile) {

  }
}

module.exports = profileDao;
