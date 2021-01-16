import axios from 'axios';

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