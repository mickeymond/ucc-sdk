import axios from 'axios';

/**
 * ReferralProgram Type.
 * @typedef {Object} ReferralProgram
 * @property {string} title - referral program title
 * @property {string} description - referral program description
 */

/**
 * ReferralMember Type.
 * @typedef {Object} ReferralMember
 * @property {string} firstName - referral member firstName
 * @property {string} lastName - referral member lastName
 */

/**
 * ReferralFriend Type.
 * @typedef {Object} ReferralFriend
 * @property {string} firstName - referred friend firstName
 * @property {string} lastName - referred friend lastName
 */

/**
 * Referral Type.
 * @typedef {Object} Referral
 * @property {ReferralProgram} program - referral program
 * @property {ReferralMember} member - referral member
 * @property {ReferralFriend} friend- referred friend
 */

/**
 * ReferralDetails Type.
 * @typedef {Object} ReferralDetails
 * @property {string} message - message
 * @property {Referral} result - result
 */

/**
 * Get Referral Details
 * @function
 * @memberof rfbm
 * @param {string} referralId - Referral Id.
 * @returns {Promise<ReferralDetails>} Get Referral Details Result
 */
async function getReferralDetails(referralId) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getReferralDetails = getReferralDetails;