const bunyan = require('bunyan');
const Bunyan2Loggly = require('bunyan-loggly');
const { LOGGLY_TOKEN, LOGGLY_SUB_DOMAIN } = require('./env.js');

const logglyConfig = {
  token: LOGGLY_TOKEN,
  subdomain: LOGGLY_SUB_DOMAIN,
};

const logglyStream = new Bunyan2Loggly(logglyConfig);

// create the logger
const logger = bunyan.createLogger({
  name: 'logglylog',
  streams: [
    {
      type: 'raw',
      stream: logglyStream,
    },
  ],
});

module.exports.logger = logger;
