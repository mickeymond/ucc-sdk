import axios from 'axios';

/**
 * Payout Settings Type.
 * @typedef {Object} PayoutSettings
 * @property {string} blockchain - Indicates whether the blockchain component is present.
 * @property {string} address - Indicates whether the address component is present.
 */

/**
 * Payout Settings Type.
 * @typedef {Object} SocialMediaProfiles
 * @property {string} username - Indicates whether the username component is present.
 * @property {string} provider - Indicates whether the provider component is present.
 */

/**
 * Referral Member Type.
 * @typedef {Object} ReferralProgramMember
 * @property {string} firstName - Indicates whether the firstName component is present.
 * @property {string} lastName - Indicates whether the lastName component is present.
 * @property {string} phone - Indicates whether the phone component is present.
 * @property {string} country - Indicates whether the country component is present.
 * @property {Array<PayoutSettings>} payoutSettings - Indicates whether the payoutSettings component is present.
 * @property {Array<SocialMediaProfiles>} socialMediaProfiles - Indicates whether the socialMediaProfiles component is present.
 * @property {string} email - Indicates whether the email component is present.
 */

/**
 * Find Referral Program Member.
 * @function
 * @param {string} programId - Referral Program Id.
 * @param {string} application - Application / External System.
 * @param {string} userId - Referral Program User Id.
 * @returns {Promise<ReferralProgramMember | undefined>} Get Referral Program Member Result
 */
export async function findReferralProgramMember(programId, application, userId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members/programs/${programId}?externalSystem=${application}&userId=${userId}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}