import axios from 'axios';

/**
 * Get Referral Details
 * @function
 * @memberof rfbm
 * @param {string} referralId - Referral Id.
 * @returns {Promise<ReferralDetails>} Get Referral Details Result
 */
async function getReferralDetails(referralId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getReferralDetails = getReferralDetails;