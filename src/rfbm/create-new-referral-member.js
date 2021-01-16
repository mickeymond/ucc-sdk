import axios from 'axios';

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