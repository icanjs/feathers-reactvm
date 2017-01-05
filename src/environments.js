// Environments keyed by window.location.hostname
const environments = {
  'localhost': {
    apiEndpoint: 'http://localhost:3030'
  },
  'production.com': {
    apiEndpoint: ''
  }
};

const hostname = Object.keys(environments).filter(host => host === window.location.hostname)[0];

if (!hostname) {
  throw new Error('No matching environment.');
}

export default environments[hostname];
