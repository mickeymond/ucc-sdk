const uccSdk = require('ucc-sdk');

uccSdk.createNewReferralMember({}).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error.response.data);
})