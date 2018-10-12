const fetch = require('node-fetch');

const PROFILE_SERVICE_URI = process.env.PROFILE_SERVICE_URI || 'http://18.191.254.197';

function getUserId(email) {
  console.log('email to check is...', email);
  console.log('PROFILE_SERVICE_URI - ', PROFILE_SERVICE_URI);
  const options = {
    method: 'GET',
  };
  const url = `${PROFILE_SERVICE_URI}/userId?email=${email}`;
  console.log('Profile url get is ....', url);
  return fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      }
      return 'false';
    }, error => error.message);
}

module.exports.getUserId = getUserId;
