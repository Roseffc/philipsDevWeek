const PROXY_CONFIG = [
    {
      context: ['/api'],
      targer: 'http://localhost:8080/',
      loglevel: 'debug'

    }
];

module.exports = PROXY_CONFIG;