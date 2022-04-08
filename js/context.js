/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': 'true',
    id: '@id',
    type: '@type',

    obi: 'https://w3id.org/openbadges#',
    clr: 'https://purl.imsglobal.org/spec/clr/v1p0/context/clr_v1p0.html',
    cred: 'https://www.w3.org/2018/credentials/#',
    dc: 'http://purl.org/dc/terms/',
    schema: 'http://schema.org/',
    sec: 'https://w3id.org/security#',
    xsd: 'http://www.w3.org/2001/XMLSchema#',

    OpenBadgeCredential: 'obi:OpenBadgeCredential',
    AchievementCredential: 'OpenBadgeCredential',
    EndorsementCredential: 'obi:EndorsementCredential',

    Achievement: 'clr:Achievement',
    Criteria: 'obi:Criteria',
    Evidence: 'obi:Evidence',
    Extension: 'obi:Extension',
    FrameValidation: 'obi:FrameValidation',
    IdentityObject: 'obi:IdentityObject',
    Image: 'obi:Image',
    Profile: 'obi:Profile',
    Result: 'clr:Result',

    achievedLevel: 'clri:dtIRI',
    achievement: 'clr:Achievement',
    achievementType: 'clr:achievementType',
    alignment: {'@id': 'obi:alignment', '@type': '@id'},
    alignments: {'@id': 'alignment', '@container': '@set'},
    allowedValues: {
      '@id': 'clri:allowedValues',
      '@type': 'xsd:string',
      '@container': '@set'
    },
    assertions: {'@id': 'obi:dtAssertion', '@container': '@set'},
    audience: {'@id': 'obi:audience'},
    author: {'@id': 'schema:author', '@type': '@id'},
    authorizationUrl: 'obi:dtURL',
    badgeConnectAPI: {'@id': 'obi:dtBadgeConnectAPI', '@container': '@set'},
    caption: {'@id': 'schema:caption'},
    claim: {'@id': 'cred:claim', '@type': '@id'},
    credentialStatus: {'@id': 'cred:credentialStatus', '@type': '@id'},
    credentialSubject: {'@id': 'cred:credentialSubject', '@type': '@id'},
    created: {'@id': 'dc:created', '@type': 'xsd:dateTime'},
    creator: {'@id': 'dc:creator', '@type': '@id'},
    criteria: {'@id': 'obi:criteria', '@type': '@id'},
    description: {'@id': 'schema:description'},
    email: {'@id': 'schema:email'},
    endorsement: {'@id': 'cred:credential', '@type': '@id'},
    endorsementComment: {'@id': 'obi:endorsementComment'},
    error: {'@id': 'obi:error', '@type': 'xsd:string'},
    expirationDate: {'@id': 'cred:expirationDate', '@type': 'xsd:dateTime'},
    evidence: {'@id': 'obi:evidence', '@type': '@id'},
    genre: {'@id': 'schema:genre'},
    hashed: {'@id': 'obi:hashed', '@type': 'xsd:boolean'},
    identity: {'@id': 'obi:identityHash'},
    image: {'@id': 'obi:image', '@type': 'xsd:anyURI'},
    issuanceDate: {'@id': 'cred:issuanceDate', '@type': 'xsd:dateTime'},
    issuer: {'@id': 'vc:issuer', '@type': '@id'},
    name: {'@id': 'obi:name', '@type': 'xsd:string'},
    narrative: {'@id': 'obi:narrative'},
    privacyPolicyUrl: 'obi:dtURL',
    profile: 'obi:dtProfile',
    proof: {'@id': 'sec:proof', '@type': '@id', '@container': '@graph'},
    recipient: {'@id': 'obi:recipient', '@type': '@id'},
    registrationUrl: 'obi:dtURL',
    related: {'@id': 'dc:relation', '@type': '@id'},
    requiredLevel: 'clri:dtIRI',
    requiredValue: {'@id': 'clri:requiredValue', '@type': 'xsd:string'},
    resultType: 'clri:dtExtensibleResultType',
    resultDescription: {
      '@id': 'clri:dtResultDescription',
      '@container': '@set'
    },
    rubricCriterionLevels: {
      '@id': 'clri:dtRubricCriterionLevel',
      '@container': '@set'
    },
    salt: {'@id': 'obi:salt'},
    scopesOffered: {
      '@id': 'obi:scopesOffered',
      '@type': 'xsd:anyURI',
      '@container': '@set'
    },
    status: 'obi:dtStatus',
    statusCode: {'@id': 'obi:statusCode', '@type': 'xsd:integer'},
    statusText: 'obi:StatusTextEnumDType',
    tags: {'@id': 'schema:keywords'},
    targetCode: {'@id': 'obi:targetCode'},
    targetDescription: {'@id': 'schema:targetDescription'},
    targetFramework: {'@id': 'schema:targetFramework'},
    targetName: {'@id': 'schema:targetName'},
    targetUrl: {'@id': 'schema:targetUrl'},
    telephone: {'@id': 'schema:telephone'},
    termsOfServiceUrl: 'obi:dtURL',
    tokenRevocationUrl: 'obi:dtURL',
    tokenUrl: 'obi:dtURL',
    url: {'@id': 'schema:url', '@type': '@id'},
    validatesType: 'obi:validatesType',
    value: {'@id': 'clri:value', '@type': 'xsd:string'},
    valueMax: {'@id': 'clri:valueMax', '@type': 'xsd:string'},
    valueMin: {'@id': 'clri:valueMin', '@type': 'xsd:string'},
    version: {'@id': 'obi:version', '@type': 'xsd:string'}
  }
};
