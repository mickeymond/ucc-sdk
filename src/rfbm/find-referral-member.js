import axios from 'axios';

/**
 * Payout Settings Type.
 * @typedef {Object} PayoutSettings
 * @property {string} blockchain - blockchain.
 * @property {string} address - address.
 */

/**
 * Payout Settings Type.
 * @typedef {Object} SocialMediaProfiles
 * @property {string} username - username.
 * @property {string} provider - provider.
 */

/**
 * Referral Program Member Type.
 * @typedef {Object} ReferralProgramMember
 * @property {string} firstName - firstName.
 * @property {string} lastName - lastName.
 * @property {string} phone - phone.
 * @property {string} country - country.
 * @property {Array<PayoutSettings>} payoutSettings - payoutSettings.
 * @property {Array<SocialMediaProfiles>} socialMediaProfiles - socialMediaProfiles.
 * @property {string} email - email.
 */

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