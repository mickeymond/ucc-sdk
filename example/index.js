const uccSdk = require('ucc-sdk');

uccSdk.rfbm.associateFriend("5d26f8278cc6411364b1e076", "5efefe19bde6d00036c9e15e")
  .then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error.response.data);
  });