import axios from 'axios';

/**
 * NewStoreCard Type.
 * @typedef {Object} NewStoreCard
 * @property {string} walletProvider - walletProvider.
 * @property {string} templateId - templateId.
 * @property {string} customerId - customerId.
 * @property {string} userId - userId.
 */

/**
 * NewStoreCard Result Type.
 * @typedef {Object} NewStoreCardResult
 * @property {string} passTypeIdentifier - passTypeIdentifier.
 * @property {string} serialNumber - serialNumber.
 * @property {string} description - description.
 */

/**
 * Create Store Card.
 * @function
 * @memberof user
 * @param {NewStoreCard} newStoreCard - New Store Card
 * @returns {Promise<NewStoreCardResult>} New Store Card Result
 */
async function createStoreCard(newStoreCard) {
  const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/apple-wallet-create-card';
  const response = await axios.post(ENDPOINT, newStoreCard);
  return response.data;
}

export const _createStoreCard = createStoreCard;