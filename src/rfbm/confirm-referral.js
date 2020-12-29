import axios from 'axios';

/**
 * Confirm Referral.
 * @function
 * @memberof rfbm
 * @param {string} referralId - Referral Id.
 * @returns {Promise<any>} Confirm Referral Result
 */
async function confirmReferral(referralId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/confirm`;
  const response = await axios.patch(ENDPOINT);
  return response.data;
}

export const _confirmReferral = confirmReferral;