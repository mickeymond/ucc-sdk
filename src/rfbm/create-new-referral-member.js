import axios from 'axios';

/**
 * AssociatedAccount Type.
 * @typedef {Object} AssociatedAccount
 * @property {string} application - ucc application or external system.
 * @property {string} userId - ucc application or external system userId.
 */

/**
 * NewReferralMember Type.
 * @typedef {Object} NewReferralMember
 * @property {string} firstName - firstName.
 * @property {string} lastName - lastName.
 * @property {string} email - email.
 * @property {string} phone - phone.
 * @property {string} country - country.
 * @property {string} password - password.
 * @property {AssociatedAccount} associatedAccount - associatedAccount.
 * @property {string} referralCode - referralCode.
 * @property {string} referralProgramId - referralProgramId.
 */

/**
 * MemberSummary Type.
 * @typedef {Object} MemberSummary
 * @property {string} userProfileId - userProfileId.
 * @property {string} auth0Id - auth0Id.
 * @property {string} memberId - memberId.
 * @property {string} referralLink - referralLink.
 */

/**
 * Create A New Referral Member.
 * @function
 * @memberof rfbm
 * @param {NewReferralMember} newReferralMember - New Referral Member.
 * @returns {Promise<MemberSummary>} New Referral Result
 */
async function createNewReferralMember(newReferralMember) {
  const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/rfbm-create-member';
  const response = await axios.post(ENDPOINT, newReferralMember);
  return response.data;
}

export const _createNewReferralMember = createNewReferralMember;