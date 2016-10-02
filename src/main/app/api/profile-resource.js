'use strict';

function profileResource(profileDao) {
  return {
    getProfiles: getProfiles,
    createProfile: createProfile
  };
  function getProfiles(req, res, next) {
    profileDao.getProfiles(function(data) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify(data));
      return next();
    });
  }

  function createProfile() {

  }
}

module.exports = profileResource;
