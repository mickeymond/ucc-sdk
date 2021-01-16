import axios from 'axios';

/**
 * Get Member By User Id.
 * @function
 * @memberof rfbm
 * @param {string} programId - Referral Program Id.
 * @param {string} userId - auth0 ID.
 * @returns {Promise<ReferralProgramMemberResult>} Get Member By User Id Result
 */
async function getMemberByUserId(programId, userId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members?filter={"$or":[{"auth0.smsId":"${userId}"},{"auth0.emailId":"${userId}"}]}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getMemberByUserId = getMemberByUserId;