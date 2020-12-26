import axios from 'axios';

/**
 * Confirm Referral.
 * @function
 * @param {string} referralId - Referral Id.
 * @returns {Promise<any>} Confirm Referral Result
 */
export async function confirmReferral(referralId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/confirm`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}