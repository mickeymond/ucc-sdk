const uccSdk = require('ucc-sdk');

uccSdk.createNewReferralMember({
  associatedAccount: {
    application: 'asdadasd',
    userId: 'asdasdasd'
  },
  referralProgramId: 'asdadadasdas'
}).then(result => {
  console.log(result);
}).catch(error => {
  console.log(error.response.data);
})