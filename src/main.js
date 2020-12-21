import axios from 'axios';

/**
 * Associated Account Type.
 * @typedef {Object} AssociatedAccount
 * @property {string} application - Indicates whether the application component is present.
 * @property {string} userId - Indicates whether the userId component is present.
 */

/**
 * New Referral Member Type.
 * @typedef {Object} NewReferralMember
 * @property {string} firstName - Indicates whether the firstName component is present.
 * @property {string} lastName - Indicates whether the lastName component is present.
 * @property {string} email - Indicates whether the email component is present.
 * @property {string} phone - Indicates whether the phone component is present.
 * @property {string} country - Indicates whether the country component is present.
 * @property {string} password - Indicates whether the password component is present.
 * @property {AssociatedAccount} associatedAccount - Indicates whether the associatedAccount component is present.
 * @property {string} referralCode - Indicates whether the referralCode component is present.
 * @property {string} referralProgramId - Indicates whether the referralProgramId component is present.
 */

/**
 * Create A New Referral Member.
 * @function
 * @param {NewReferralMember} newReferralMember - New Referral Member.
 */
export function createNewReferralMember(newReferralMember) {
  const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/rfbm-create-member';
  return axios.post(ENDPOINT, newReferralMember);
}