import axios from 'axios';

/**
 * PayoutSettings Type.
 * @typedef {Object} PayoutSettings
 * @property {string} blockchain - blockchain.
 * @property {string} address - address.
 */

/**
 * SocialMediaProfiles Type.
 * @typedef {Object} SocialMediaProfiles
 * @property {string} username - username.
 * @property {string} provider - provider.
 */

/**
 * ReferralProgramMember Type.
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
 * ReferralProgramMember Type.
 * @typedef {Object} ReferralProgramMemberResult
 * @property {ReferralProgramMember} result - referral member.
 */

/**
 * Get Member By Associated Account
 * @function
 * @memberof rfbm
 * @param {string} externalSystem - External System.
 * @param {string} externalUserId - External User Id.
 * @param {string} programId - Referral Program Id.
 * @returns {Promise<ReferralProgramMemberResult>} Get Member By Associated Account Result
 */
async function getMemberByAssociatedAccount(externalSystem, externalUserId, programId) {
  const filter = {
    "associatedAccounts.application": externalSystem,
    "associatedAccounts.userId": externalUserId,
  }
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/users?filter=${JSON.stringify(filter)}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getMemberByAssociatedAccount = getMemberByAssociatedAccount;