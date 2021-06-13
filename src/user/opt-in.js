import axios from 'axios';

/**
 * NewOptIn Type.
 * @typedef {Object} NewOptIn
 * @property {string} productOrService - productOrService.
 * @property {string} optedInOn - optedInOn.
 * @property {string} optedInIpAddress - optedInIpAddress.
 * @property {string} optedInUserAgent - optedInUserAgent.
 * @property {string} optedInFormUrl - optedInFormUrl.
 */

/**
 * Add A New Opt In.
 * @function
 * @memberof user
 * @param {string} userId - User ObjectID
 * @param {string} customerId - Customer ObjectID
 * @param {NewOptIn} newOptIn - New Opt In.
 * @returns {Promise<any>} New Opt In Result
 */
async function optIn(userId, customerId, newOptIn) {
  const DELETE_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-outs/${newOptIn.productOrService}`;
  const POST_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-ins`;
  await axios.delete(DELETE_ENDPOINT);
  const response = await axios.post(POST_ENDPOINT, newOptIn);
  return response.data;
}

export const _optIn = optIn;