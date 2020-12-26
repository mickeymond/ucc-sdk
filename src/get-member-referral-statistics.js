import axios from 'axios';

/**
 * Get Member Referral Statistics
 * @function
 * @param {string} programId - Referral Program Id.
 * @param {string} memberId - Referral Program Member Id.
 * @returns {Promise<any>} Get Member Referral Statistics Result
 */
export async function getMemberReferralStatistics(programId, memberId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/programs/${programId}/members/${memberId}/statistics`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}