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
<dt><a href="#user">user</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#track">track</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AssociatedAccount">AssociatedAccount</a> : <code>Object</code></dt>
<dd><p>AssociatedAccount Type.</p>
</dd>
<dt><a href="#NewReferralMember">NewReferralMember</a> : <code>Object</code></dt>
<dd><p>NewReferralMember Type.</p>
</dd>
<dt><a href="#MemberSummary">MemberSummary</a> : <code>Object</code></dt>
<dd><p>MemberSummary Type.</p>
</dd>
<dt><a href="#PayoutSettings">PayoutSettings</a> : <code>Object</code></dt>
<dd><p>PayoutSettings Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>SocialMediaProfiles Type.</p>
</dd>
<dt><a href="#ReferralProgramMember">ReferralProgramMember</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#ReferralProgramMemberResult">ReferralProgramMemberResult</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#PayoutSettings">PayoutSettings</a> : <code>Object</code></dt>
<dd><p>PayoutSettings Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>SocialMediaProfiles Type.</p>
</dd>
<dt><a href="#ReferralProgramMember">ReferralProgramMember</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#ReferralProgramMemberResult">ReferralProgramMemberResult</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#PayoutSettings">PayoutSettings</a> : <code>Object</code></dt>
<dd><p>PayoutSettings Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>SocialMediaProfiles Type.</p>
</dd>
<dt><a href="#ReferralProgramMember">ReferralProgramMember</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#ReferralProgramMemberResult">ReferralProgramMemberResult</a> : <code>Object</code></dt>
<dd><p>ReferralProgramMember Type.</p>
</dd>
<dt><a href="#ReferralProgram">ReferralProgram</a> : <code>Object</code></dt>
<dd><p>ReferralProgram Type.</p>
</dd>
<dt><a href="#ReferralMember">ReferralMember</a> : <code>Object</code></dt>
<dd><p>ReferralMember Type.</p>
</dd>
<dt><a href="#ReferralFriend">ReferralFriend</a> : <code>Object</code></dt>
<dd><p>ReferralFriend Type.</p>
</dd>
<dt><a href="#Referral">Referral</a> : <code>Object</code></dt>
<dd><p>Referral Type.</p>
</dd>
<dt><a href="#ReferralDetails">ReferralDetails</a> : <code>Object</code></dt>
<dd><p>ReferralDetails Type.</p>
</dd>
<dt><a href="#NewUserProfile">NewUserProfile</a> : <code>Object</code></dt>
<dd><p>NewUserProfile Type.</p>
</dd>
<dt><a href="#NewUserProfileResult">NewUserProfileResult</a> : <code>Object</code></dt>
<dd><p>NewUserProfileResult Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>SocialMediaProfiles Type.</p>
</dd>
<dt><a href="#PhoneInfo">PhoneInfo</a> : <code>Object</code></dt>
<dd><p>PhoneInfo Type.</p>
</dd>
<dt><a href="#BrowserInfo">BrowserInfo</a> : <code>Object</code></dt>
<dd><p>BrowserInfo Type.</p>
</dd>
<dt><a href="#PersonalData">PersonalData</a> : <code>Object</code></dt>
<dd><p>PersonalData Type.</p>
</dd>
<dt><a href="#UserProfile">UserProfile</a> : <code>Object</code></dt>
<dd><p>UserProfile Type.</p>
</dd>
<dt><a href="#UserProfileResult">UserProfileResult</a> : <code>Object</code></dt>
<dd><p>UserProfileResult Type.</p>
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
    * [.getMemberByAssociatedAccount(externalSystem, externalUserId, programId)](#rfbm.getMemberByAssociatedAccount) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
    * [.getMemberByFriend(userId, programId)](#rfbm.getMemberByFriend) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
    * [.getMemberByUserId(programId, userId)](#rfbm.getMemberByUserId) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
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

<a name="rfbm.getMemberByAssociatedAccount"></a>

### rfbm.getMemberByAssociatedAccount(externalSystem, externalUserId, programId) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
Get Member By Associated Account

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult) - Get Member By Associated Account Result

| Param | Type | Description |
| --- | --- | --- |
| externalSystem | <code>string</code> | External System. |
| externalUserId | <code>string</code> | External User Id. |
| programId | <code>string</code> | Referral Program Id. |

<a name="rfbm.getMemberByFriend"></a>

### rfbm.getMemberByFriend(userId, programId) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
Get Member By Friend.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult) - Get Member By Friend Result

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | user objectId. |
| programId | <code>string</code> | Referral Program Id. |

<a name="rfbm.getMemberByUserId"></a>

### rfbm.getMemberByUserId(programId, userId) ⇒ [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult)
Get Member By User Id.

**Kind**: static method of [<code>rfbm</code>](#rfbm)
**Returns**: [<code>Promise.&lt;ReferralProgramMemberResult&gt;</code>](#ReferralProgramMemberResult) - Get Member By User Id Result

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | Referral Program Id. |
| userId | <code>string</code> | auth0 ID. |

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

<a name="user"></a>

## user : <code>object</code>
**Kind**: global namespace

* [user](#user) : <code>object</code>
    * [.create(newUserProfile)](#user.create) ⇒ [<code>Promise.&lt;NewUserProfileResult&gt;</code>](#NewUserProfileResult)
    * [.getUserByAssociatedAccount(externalSystem, externalUserId)](#user.getUserByAssociatedAccount) ⇒ [<code>Promise.&lt;UserProfileResult&gt;</code>](#UserProfileResult)

<a name="user.create"></a>

### user.create(newUserProfile) ⇒ [<code>Promise.&lt;NewUserProfileResult&gt;</code>](#NewUserProfileResult)
Create A New User Profile.

**Kind**: static method of [<code>user</code>](#user)
**Returns**: [<code>Promise.&lt;NewUserProfileResult&gt;</code>](#NewUserProfileResult) - New User Profile Result

| Param | Type | Description |
| --- | --- | --- |
| newUserProfile | [<code>NewUserProfile</code>](#NewUserProfile) | New User Profile. |

<a name="user.getUserByAssociatedAccount"></a>

### user.getUserByAssociatedAccount(externalSystem, externalUserId) ⇒ [<code>Promise.&lt;UserProfileResult&gt;</code>](#UserProfileResult)
Get User By Associated Account

**Kind**: static method of [<code>user</code>](#user)
**Returns**: [<code>Promise.&lt;UserProfileResult&gt;</code>](#UserProfileResult) - Get User By Associated Account Result

| Param | Type | Description |
| --- | --- | --- |
| externalSystem | <code>string</code> | External System. |
| externalUserId | <code>string</code> | External User Id. |

<a name="track"></a>

## track : <code>object</code>
**Kind**: global namespace

* [track](#track) : <code>object</code>
    * [.invokeWebhook(webhookUrl, data)](#track.invokeWebhook) ⇒ <code>Promise.&lt;any&gt;</code>
    * [.submitEvent(customerId, projectId, event, data, user)](#track.submitEvent) ⇒ <code>Promise.&lt;any&gt;</code>

<a name="track.invokeWebhook"></a>

### track.invokeWebhook(webhookUrl, data) ⇒ <code>Promise.&lt;any&gt;</code>
Invoke Webhook

**Kind**: static method of [<code>track</code>](#track)
**Returns**: <code>Promise.&lt;any&gt;</code> - Web Tracking Response

| Param | Type | Description |
| --- | --- | --- |
| webhookUrl | <code>string</code> | webhookUrl |
| data | <code>object</code> | data |

<a name="track.submitEvent"></a>

### track.submitEvent(customerId, projectId, event, data, user) ⇒ <code>Promise.&lt;any&gt;</code>
Send UCC Web Tracking Event.

**Kind**: static method of [<code>track</code>](#track)
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
AssociatedAccount Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| application | <code>string</code> | ucc application or external system. |
| userId | <code>string</code> | ucc userId. |

<a name="NewReferralMember"></a>

## NewReferralMember : <code>Object</code>
NewReferralMember Type.

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
MemberSummary Type.

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
PayoutSettings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchain | <code>string</code> | blockchain. |
| address | <code>string</code> | address. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
SocialMediaProfiles Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="ReferralProgramMember"></a>

## ReferralProgramMember : <code>Object</code>
ReferralProgramMember Type.

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

<a name="ReferralProgramMemberResult"></a>

## ReferralProgramMemberResult : <code>Object</code>
ReferralProgramMember Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result | [<code>ReferralProgramMember</code>](#ReferralProgramMember) | referral member. |

<a name="PayoutSettings"></a>

## PayoutSettings : <code>Object</code>
PayoutSettings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchain | <code>string</code> | blockchain. |
| address | <code>string</code> | address. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
SocialMediaProfiles Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="ReferralProgramMember"></a>

## ReferralProgramMember : <code>Object</code>
ReferralProgramMember Type.

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

<a name="ReferralProgramMemberResult"></a>

## ReferralProgramMemberResult : <code>Object</code>
ReferralProgramMember Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result | [<code>ReferralProgramMember</code>](#ReferralProgramMember) | referral member. |

<a name="PayoutSettings"></a>

## PayoutSettings : <code>Object</code>
PayoutSettings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchain | <code>string</code> | blockchain. |
| address | <code>string</code> | address. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
SocialMediaProfiles Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="ReferralProgramMember"></a>

## ReferralProgramMember : <code>Object</code>
ReferralProgramMember Type.

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

<a name="ReferralProgramMemberResult"></a>

## ReferralProgramMemberResult : <code>Object</code>
ReferralProgramMember Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result | [<code>ReferralProgramMember</code>](#ReferralProgramMember) | referral member. |

<a name="ReferralProgram"></a>

## ReferralProgram : <code>Object</code>
ReferralProgram Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | referral program title |
| description | <code>string</code> | referral program description |

<a name="ReferralMember"></a>

## ReferralMember : <code>Object</code>
ReferralMember Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | referral member firstName |
| lastName | <code>string</code> | referral member lastName |

<a name="ReferralFriend"></a>

## ReferralFriend : <code>Object</code>
ReferralFriend Type.

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
ReferralDetails Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | message |
| result | [<code>Referral</code>](#Referral) | result |

<a name="NewUserProfile"></a>

## NewUserProfile : <code>Object</code>
NewUserProfile Type.

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

<a name="NewUserProfileResult"></a>

## NewUserProfileResult : <code>Object</code>
NewUserProfileResult Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userProfileId | <code>string</code> | userProfileId. |
| auth0Id | <code>string</code> | auth0Id. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
SocialMediaProfiles Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="PhoneInfo"></a>

## PhoneInfo : <code>Object</code>
PhoneInfo Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _id | <code>string</code> | _id |
| brand | <code>string</code> | brand |
| deviceId | <code>string</code> | deviceId |
| deviceLocale | <code>string</code> | deviceLocale |
| timeZone | <code>string</code> | timeZone |
| timeStamp | <code>string</code> | timeStamp |
| isTablet | <code>boolean</code> | isTablet |

<a name="BrowserInfo"></a>

## BrowserInfo : <code>Object</code>
BrowserInfo Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _id | <code>string</code> | _id |
| timeStamp | <code>string</code> | timeStamp |
| userAgent | <code>string</code> | userAgent |

<a name="PersonalData"></a>

## PersonalData : <code>Object</code>
PersonalData Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | firstName |
| lastName | <code>string</code> | lastName |
| gender | <code>string</code> | gender |
| yearOfBirth | <code>string</code> | yearOfBirth |
| countryOfResidence | <code>string</code> | countryOfResidence |
| nationality | <code>string</code> | nationality |
| socialMedia | [<code>Array.&lt;SocialMediaProfiles&gt;</code>](#SocialMediaProfiles) | socialMedia |

<a name="UserProfile"></a>

## UserProfile : <code>Object</code>
UserProfile Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| _id | <code>string</code> | _id |
| blockchainAddress | <code>string</code> | blockchainAddress |
| personalData | [<code>PersonalData</code>](#PersonalData) | personalData |
| phoneInfo | [<code>Array.&lt;PhoneInfo&gt;</code>](#PhoneInfo) | phoneInfo |
| browserInfo | [<code>Array.&lt;BrowserInfo&gt;</code>](#BrowserInfo) | browserInfo |

<a name="UserProfileResult"></a>

## UserProfileResult : <code>Object</code>
UserProfileResult Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | count |
| result | [<code>Array.&lt;UserProfile&gt;</code>](#UserProfile) | result |