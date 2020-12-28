import axios from 'axios';

/**
 * Send UCC Web Tracking Event.
 * @function
 * @param {string} customerId - UCC Customer ID.
 * @param {string} projectId - UCC Project/Source ID.
 * @param {string} event - Event Name - Find out from Project Manager.
 * @param {object} data - Event Data - Find out from Project Manager.
 * @param {object} user - User Data If Applicable.
 * @returns {Promise<any>} Web Tracking Response
 */
async function submitEvent(customerId, projectId, event, data, user = {}) {
  const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-web-tracker';
  // Get Browser Context
  const context = {}
  const url = new URL(window.location.href);
  url.searchParams.forEach((value, key) => {
    context[key] = value;
  });
  // Prepare Request Body
  const body = {
    customerId: customerId,
    projectId: projectId,
    event: event,
    type: 'track',
    context: context,
    properties: data,
    user: user
  }
  const response = await axios.post(ENDPOINT, body);
  return response.data;
}

export const _submitEvent = submitEvent;