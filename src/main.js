import axios from 'axios';

// Declare Constants
const UCC_API = 'https://api.unchainedcarrot.com/v1'

/**
 * Create A New Referral Member.
 * @function
 * @param {object} newReferralMember - New Referral Member.
 */
export const createNewReferralMember = (newReferralMember) => {
  return axios.post(UCC_API + '/rfbm/members');
}