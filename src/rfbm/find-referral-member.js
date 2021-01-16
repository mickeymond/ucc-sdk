import axios from 'axios';

/**
 * Find Referral Program Member.
 * @function
 * @memberof rfbm
 * @param {string} programId - Referral Program Id.
 * @param {string} application - Application or External System.
 * @param {string} userId - Referral Program User Id.
 * @returns {Promise<ReferralProgramMember>} Get Referral Program Member Result
 */
async function findReferralProgramMember(programId, application, userId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members/programs/${programId}?externalSystem=${application}&userId=${userId}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _findReferralProgramMember = findReferralProgramMember;