import axios from 'axios';

/**
 * Create A New User Profile.
 * @function
 * @memberof user
 * @param {NewUserProfile} newUserProfile - New User Profile.
 * @returns {Promise<UserProfileResult>} New User Profile Result
 */
async function create(newUserProfile) {
  const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-create-user-profile';
  const response = await axios.post(ENDPOINT, newUserProfile);
  return response.data;
}

export const _create = create;