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