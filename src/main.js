import { _createNewReferralMember } from './rfbm/create-new-referral-member';
import { _findReferralProgramMember } from './rfbm/find-referral-member';
import { _confirmReferral } from './rfbm/confirm-referral';
import { _getMemberReferralStatistics } from './rfbm/get-member-referral-statistics';
import { _getReferralDetails } from './rfbm/get-referral-details';
import { _associateFriend } from './rfbm/associate-friend';

/** @namespace */
export const rfbm = {
  createNewReferralMember: _createNewReferralMember,
  findReferralProgramMember: _findReferralProgramMember,
  confirmReferral: _confirmReferral,
  getMemberReferralStatistics: _getMemberReferralStatistics,
  getReferralDetails: _getReferralDetails,
  associateFriend: _associateFriend
}

// Global Exports
export { _submitEvent as submitEvent } from './ucc-web-tracker';