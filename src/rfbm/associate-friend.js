import axios from 'axios';

/**
 * Associate Friend.
 * @function
 * @memberof rfbm
 * @param {string} referralId - Referral Id.
 * @param {string} userId - User Id.
 * @returns {Promise<any>} Associate Friend Result
 */
async function associateFriend(referralId, userId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/friends/${userId}`;
  const response = await axios.post(ENDPOINT);
  return response.data;
}

export const _associateFriend = associateFriend;