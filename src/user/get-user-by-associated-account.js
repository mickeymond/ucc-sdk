import axios from 'axios';

/**
 * Get User By Associated Account
 * @function
 * @memberof user
 * @param {string} externalSystem - External System.
 * @param {string} externalUserId - External User Id.
 * @returns {Promise<UserProfileResult>} Get User By Associated Account Result
 */
async function getUserByAssociatedAccount(externalSystem, externalUserId) {
  const filter = {
    "associatedAccounts.application": externalSystem,
    "associatedAccounts.userId": externalUserId,
  }
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/users?filter=${JSON.stringify(filter)}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getUserByAssociatedAccount = getUserByAssociatedAccount;