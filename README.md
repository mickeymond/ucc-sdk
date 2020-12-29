# UCC SDK

Installation
------------

For Browser

```
<script src="https://unpkg.com/axios"></script>
<script src="https://unpkg.com/ucc-sdk"></script>

// Access All Methods on the Global uccSdk
uccSdk.any();
```

For Node or Webpack

```
npm install ucc-sdk
yarn add ucc-sdk

const uccSdk = require('ucc-sdk');
import * as uccSdk from 'ucc-sdk';

// Access All Methods on the Global uccSdk
uccSdk.any();
```

Usage
-----

## Objects

<dl>
<dt><a href="#rfbm">rfbm</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#submitEvent">submitEvent(customerId, projectId, event, data, user)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Send UCC Web Tracking Event.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AssociatedAccount">AssociatedAccount</a> : <code>Object</code></dt>
<dd><p>Associated Account Type.</p>
</dd>
<dt><a href="#NewReferralMember">NewReferralMember</a> : <code>Object</code></dt>
<dd><p>New Referral Member Type.</p>
</dd>
<dt><a href="#MemberSummary">MemberSummary</a> : <code>Object</code></dt>
<dd><p>Referral Member Summary Type.</p>
</dd>
<dt><a href="#PayoutSettings">PayoutSettings</a> : <code>Object</code></dt>
<dd><p>Payout Settings Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>Payout Settings Type.</p>
</dd>
<dt><a href="#ReferralProgramMember">ReferralProgramMember</a> : <code>Object</code></dt>
<dd><p>Referral Program Member Type.</p>
</dd>
<dt><a href="#ReferralProgram">ReferralProgram</a> : <code>Object</code></dt>
<dd><p>Referral Program Type.</p>
</dd>
<dt><a href="#ReferralMember">ReferralMember</a> : <code>Object</code></dt>
<dd><p>Referral Member Type.</p>
</dd>
<dt><a href="#ReferralFriend">ReferralFriend</a> : <code>Object</code></dt>
<dd><p>Referral Friend Type.</p>
</dd>
<dt><a href="#Referral">Referral</a> : <code>Object</code></dt>
<dd><p>Referral Type.</p>
</dd>
<dt><a href="#ReferralDetails">ReferralDetails</a> : <code>Object</code></dt>
<dd><p>Referral Details Type.</p>
</dd>
</dl>

<a name="rfbm"></a>

## rfbm : <code>object</code>
**Kind**: global namespace

* [rfbm](#rfbm) : <code>object</code>
    * [.associateFriend(referralId, userId)](#rfbm.associateFriend) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.confirmReferral(referralId)](#rfbm.confirmReferral) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.createNewReferralMember(newReferralMember)](#rfbm.createNewReferralMember) ⇒ [<code>Promise.&lt;MemberSummary&gt;</code>](#MemberSummary)
    * [.findReferralProgramMember(programId, application, userId)](#rfbm.findReferralProgramMember) ⇒ [<code>Promise.&lt;ReferralProgramMember&gt;</code>](#ReferralProgramMember)
    * [.getMemberReferralStatistics(programId, memberId)](#rfbm.getMemberReferralStatistics) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.getReferralDetails(referralId)](#rfbm.getReferralDetails) ⇒ [<code>Promise.&lt;ReferralDetails&gt;</code>](#ReferralDetails)

<a name="rfbm.associateFriend"></a>

### rfbm.associateFriend(referralId, userId) ⇒ <code>Promise.&lt;any&gt;</code>
Associate Friend.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: <code>Promise.&lt;any&gt;</code> - Associate Friend Result

| Param | Type | Description |
| --- | --- | --- |
| referralId | <code>string</code> | Referral Id. |
| userId | <code>string</code> | User Id. |

<a name="rfbm.confirmReferral"></a>

### rfbm.confirmReferral(referralId) ⇒ <code>Promise.&lt;any&gt;</code>
Confirm Referral.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: <code>Promise.&lt;any&gt;</code> - Confirm Referral Result

| Param | Type | Description |
| --- | --- | --- |
| referralId | <code>string</code> | Referral Id. |

<a name="rfbm.createNewReferralMember"></a>

### rfbm.createNewReferralMember(newReferralMember) ⇒ [<code>Promise.&lt;MemberSummary&gt;</code>](#MemberSummary)
Create A New Referral Member.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;MemberSummary&gt;</code>](#MemberSummary) - New Referral Result

| Param | Type | Description |
| --- | --- | --- |
| newReferralMember | [<code>NewReferralMember</code>](#NewReferralMember) | New Referral Member. |

<a name="rfbm.findReferralProgramMember"></a>

### rfbm.findReferralProgramMember(programId, application, userId) ⇒ [<code>Promise.&lt;ReferralProgramMember&gt;</code>](#ReferralProgramMember)
Find Referral Program Member.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;ReferralProgramMember&gt;</code>](#ReferralProgramMember) - Get Referral Program Member Result

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | Referral Program Id. |
| application | <code>string</code> | Application or External System. |
| userId | <code>string</code> | Referral Program User Id. |

<a name="rfbm.getMemberReferralStatistics"></a>

### rfbm.getMemberReferralStatistics(programId, memberId) ⇒ <code>Promise.&lt;any&gt;</code>
Get Member Referral Statistics

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: <code>Promise.&lt;any&gt;</code> - Get Member Referral Statistics Result

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | Referral Program Id. |
| memberId | <code>string</code> | Referral Program Member Id. |

<a name="rfbm.getReferralDetails"></a>

### rfbm.getReferralDetails(referralId) ⇒ [<code>Promise.&lt;ReferralDetails&gt;</code>](#ReferralDetails)
Get Referral Details

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;ReferralDetails&gt;</code>](#ReferralDetails) - Get Referral Details Result

| Param | Type | Description |
| --- | --- | --- |
| referralId | <code>string</code> | Referral Id. |

<a name="submitEvent"></a>

## submitEvent(customerId, projectId, event, data, user) ⇒ <code>Promise.&lt;any&gt;</code>
Send UCC Web Tracking Event.

**Kind**: global function
**Returns**: <code>Promise.&lt;any&gt;</code> - Web Tracking Response

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>string</code> | UCC Customer ID. |
| projectId | <code>string</code> | UCC Project/Source ID. |
| event | <code>string</code> | Event Name - Find out from Project Manager. |
| data | <code>object</code> | Event Data - Find out from Project Manager. |
| user | <code>object</code> | User Data If Applicable. |

<a name="AssociatedAccount"></a>

## AssociatedAccount : <code>Object</code>
Associated Account Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| application | <code>string</code> | ucc application or external system. |
| userId | <code>string</code> | ucc userId. |

<a name="NewReferralMember"></a>

## NewReferralMember : <code>Object</code>
New Referral Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | firstName. |
| lastName | <code>string</code> | lastName. |
| email | <code>string</code> | email. |
| phone | <code>string</code> | phone. |
| country | <code>string</code> | country. |
| password | <code>string</code> | password. |
| associatedAccount | [<code>AssociatedAccount</code>](#AssociatedAccount) | associatedAccount. |
| referralCode | <code>string</code> | referralCode. |
| referralProgramId | <code>string</code> | referralProgramId. |

<a name="MemberSummary"></a>

## MemberSummary : <code>Object</code>
Referral Member Summary Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userProfileId | <code>string</code> | userProfileId. |
| auth0Id | <code>string</code> | auth0Id. |
| memberId | <code>string</code> | memberId. |
| referralLink | <code>string</code> | referralLink. |

<a name="PayoutSettings"></a>

## PayoutSettings : <code>Object</code>
Payout Settings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchain | <code>string</code> | blockchain. |
| address | <code>string</code> | address. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
Payout Settings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="ReferralProgramMember"></a>

## ReferralProgramMember : <code>Object</code>
Referral Program Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | firstName. |
| lastName | <code>string</code> | lastName. |
| phone | <code>string</code> | phone. |
| country | <code>string</code> | country. |
| payoutSettings | [<code>Array.&lt;PayoutSettings&gt;</code>](#PayoutSettings) | payoutSettings. |
| socialMediaProfiles | [<code>Array.&lt;SocialMediaProfiles&gt;</code>](#SocialMediaProfiles) | socialMediaProfiles. |
| email | <code>string</code> | email. |

<a name="ReferralProgram"></a>

## ReferralProgram : <code>Object</code>
Referral Program Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | referral program title |
| description | <code>string</code> | referral program description |

<a name="ReferralMember"></a>

## ReferralMember : <code>Object</code>
Referral Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | referral member firstName |
| lastName | <code>string</code> | referral member lastName |

<a name="ReferralFriend"></a>

## ReferralFriend : <code>Object</code>
Referral Friend Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | referred friend firstName |
| lastName | <code>string</code> | referred friend lastName |

<a name="Referral"></a>

## Referral : <code>Object</code>
Referral Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| program | [<code>ReferralProgram</code>](#ReferralProgram) | referral program |
| member | [<code>ReferralMember</code>](#ReferralMember) | referral member |
| friend- | [<code>ReferralFriend</code>](#ReferralFriend) | referred friend |

<a name="ReferralDetails"></a>

## ReferralDetails : <code>Object</code>
Referral Details Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | message |
| result | [<code>Referral</code>](#Referral) | result |