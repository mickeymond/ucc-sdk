/** SDK METHODS */
 // rfbm methods
import { _createNewReferralMember } from './rfbm/create-new-referral-member';
import { _findReferralProgramMember } from './rfbm/find-referral-member';
import { _confirmReferral } from './rfbm/confirm-referral';
import { _getMemberReferralStatistics } from './rfbm/get-member-referral-statistics';
import { _getReferralDetails } from './rfbm/get-referral-details';
import { _associateFriend } from './rfbm/associate-friend';
import { _getMemberByUserId } from './rfbm/get-member-by-user-id';
import { _getMemberByAssociatedAccount } from './rfbm/get-member-by-associated-account';
import { _getMemberByFriend } from './rfbm/get-member-by-friend';

// user methods
import { _getUserByAssociatedAccount } from './user/get-user-by-associated-account';
import { _createStoreCard } from './user/create-store-card';
import { _create } from './user/create';

// track methods
import { _submitEvent } from './track/ucc-web-tracker';
import { _invokeWebhook } from './track/invoke-webhook';

/** @namespace */
export const rfbm = {
  createNewReferralMember: _createNewReferralMember,
  findReferralProgramMember: _findReferralProgramMember,
  confirmReferral: _confirmReferral,
  getMemberReferralStatistics: _getMemberReferralStatistics,
  getReferralDetails: _getReferralDetails,
  associateFriend: _associateFriend,
  getMemberByUserId: _getMemberByUserId,
  getMemberByAssociatedAccount: _getMemberByAssociatedAccount,
  getMemberByFriend: _getMemberByFriend
}

/** @namespace */
export const user = {
  getUserByAssociatedAccount: _getUserByAssociatedAccount,
  createStoreCard: _createStoreCard,
  create: _create
}

/** @namespace */
export const track = {
  submitEvent: _submitEvent,
  invokeWebhook: _invokeWebhook
}