'use strict';

function profileDao(mongoService) {
  return {
    getProfiles: getProfiles,
    createProfile: createProfile
  };

  function getProfiles(callback) {
    var profiles = [];
    var collection = mongoService.getConnection().collection('profiles');
    collection.find().each(function(err, profile) {
      if (!err && profile) {
        console.dir(profile);
        profiles.push(profile);
      }
      if (!profile) {
        callback(profiles);
      }
    }
    );
    return profiles;
  }

  function createProfile(profile) {

  }
}

module.exports = profileDao;
