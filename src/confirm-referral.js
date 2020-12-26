import axios from 'axios';

/**
 * Find Referral Program Member.
 * @function
 * @param {string} referralId - Referral Id.
 * @returns {Promise<any>} Get Referral Program Member Result
 */
export async function confirmReferral(referralId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/confirm`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}