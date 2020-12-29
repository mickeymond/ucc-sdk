import axios from 'axios';

/**
 * Invoke Webhook
 * @function
 * @memberof track
 * @param {string} webhookUrl - webhookUrl
 * @param {object} data - data
 * @returns {Promise<any>} Web Tracking Response
 */
async function invokeWebhook(webhookUrl, data) {
  const response = await axios.post(webhookUrl, data);
  return response.data;
}

export const _invokeWebhook = invokeWebhook;