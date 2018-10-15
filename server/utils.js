const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

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

function createJWT(userId, credentialId, secret, key) {
  // const header = {
  //   typ: 'JWT',
  //   alg: 'HS256',
  // };
  const payload = {
    iss: key,
    userId,
    exp: 0,
  };

  console.log('payload is....', JSON.stringify(payload));
  console.log('secret used for signing is....', secret);
  const token = jwt.sign(payload, secret);
  return token;
}

module.exports.getUserId = getUserId;
module.exports.createJWT = createJWT;
