import axios from 'axios';

/**
 * Get Member By Friend.
 * @function
 * @memberof rfbm
 * @param {string} userId - user objectId.
 * @returns {Promise<ReferralProgramMemberResult>} Get Member By Friend Result
 */
async function getMemberByFriend(userId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members?filter={"$or":[{"auth0.smsId":"${userId}"},{"auth0.emailId":"${userId}"}]}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getMemberByFriend = getMemberByFriend;