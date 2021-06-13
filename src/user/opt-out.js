import axios from 'axios';

/**
 * NewOptOut Type.
 * @typedef {Object} NewOptOut
 * @property {string} productOrService - productOrService.
 * @property {string} optedOutOn - optedOutOn.
 * @property {string} optedOutIpAddress - optedOutIpAddress.
 */

/**
 * Add A New Opt In.
 * @function
 * @memberof user
 * @param {string} userId - User ObjectID
 * @param {string} customerId - Customer ObjectID
 * @param {NewOptOut} newOptOut - New Opt In.
 * @returns {Promise<any>} New Opt In Result
 */
async function optOut(userId, customerId, newOptOut) {
  const DELETE_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-ins/${newOptOut.productOrService}`;
  const POST_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-outs`;
  await axios.delete(DELETE_ENDPOINT);
  const response = await axios.post(POST_ENDPOINT, newOptOut);
  return response.data;
}

export const _optOut = optOut;