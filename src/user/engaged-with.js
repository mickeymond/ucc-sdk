import axios from 'axios';

/**
 * NewEngagement Type.
 * @typedef {Object} NewEngagement
 * @property {string} customerId - customerId.
 * @property {string} firstTimeOn - firstTimeOn.
 */

/**
 * Add A New Engagement.
 * @function
 * @memberof user
 * @param {string} userId - User ObjectID
 * @param {NewEngagement} newEngagement - New Engagement.
 * @returns {Promise<any>} New Engagement Result
 */
async function engagedWith(userId, newEngagement) {
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements`;
  const response = await axios.post(ENDPOINT, newEngagement);
  return response.data;
}

export const _engagedWith = engagedWith;