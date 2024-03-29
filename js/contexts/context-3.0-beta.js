/* eslint-disable */
/*!
 * Copyright (c) 2023 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    id: '@id',
    type: '@type',

    xsd: 'https://www.w3.org/2001/XMLSchema#',

    OpenBadgeCredential: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#OpenBadgeCredential'
    },
    Achievement: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Achievement',
      '@context': {
        'achievementType': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#achievementType',
          '@type': 'xsd:string'
        },
        'alignment': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Alignment'
        },
        'creator': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Profile'
        },
        'creditsAvailable': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#creditsAvailable',
          '@type': 'xsd:float'
        },
        'criteria': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#criteria',
          '@type': '@id'
        },
        'fieldOfStudy': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#fieldOfStudy',
          '@type': 'xsd:string'
        },
        'humanCode': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#humanCode',
          '@type': 'xsd:string'
        },
        'specialization': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#specialization',
          '@type': 'xsd:string'
        },
        'tags': {
          '@id': 'https://schema.org/keywords',
          '@type': 'xsd:string',
          '@container': '@set'
        }
      }
    },
    AchievementCredential: {
      '@id': 'OpenBadgeCredential'
    },
    AchievementSubject: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#AchievementSubject',
      '@context': {
        'achievement': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Achievement'
        },
        'identifier': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Identifier'
        },
        'result': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Result'
        }
      }
    },
    Address: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Address',
      '@context': {
        'addressCountry': {
          '@id': 'https://schema.org/addressCountry',
          '@type': 'xsd:string'
        },
        'addressCountryCode': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#CountryCode',
          '@type': 'xsd:string'
        },
        'addressLocality': {
          '@id': 'https://schema.org/addresLocality',
          '@type': 'xsd:string'
        },
        'addressRegion': {
          '@id': 'https://schema.org/addressRegion',
          '@type': 'xsd:string'
        },
        'geo': {
          '@id' : 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#GeoCoordinates'
        },
        'postOfficeBoxNumber': {
          '@id': 'https://schema.org/postOfficeBoxNumber',
          '@type': 'xsd:string'
        },
        'postalCode': {
          '@id': 'https://schema.org/postalCode',
          '@type': 'xsd:string'
        },
        'streetAddress': {
          '@id': 'https://schema.org/streetAddress',
          '@type': 'xsd:string'
        }
      }
    },
    Alignment: {
      '@id': 'https://schema.org/Alignment',
      '@context': {
        'targetCode': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#targetCode',
          '@type': 'xsd:string'
        },
        'targetDescription': {
          '@id': 'https://schema.org/targetDescription',
          '@type': 'xsd:string'
        },
        'targetFramework': {
          '@id': 'https://schema.org/targetFramework',
          '@type': 'xsd:string'
        },
        'targetName': {
          '@id': 'https://schema.org/targetName',
          '@type': 'xsd:string'
        },
        'targetType': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#targetType',
          '@type': 'xsd:string'
        },
        'targetUrl': {
          '@id': 'https://schema.org/targetUrl',
          '@type': 'xsd:anyURI'
        }
      }
    },
    Criteria: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Criteria'
    },
    EndorsementCredential: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#EndorsementCredential'
    },
    EndorsementSubject: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#EndorsementSubject',
      '@context': {
        'endorsementComment': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#endorsementComment',
          '@type': 'xsd:string'
        }
      }
    },
    Evidence: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Evidence',
      '@context': {
        'audience': {
          '@id': 'https://schema.org/audience',
          '@type': 'xsd:string'
        },
        'genre': {
          '@id': 'https://schema.org/genre',
          '@type': 'xsd:string'
        }
      }
    },
    GeoCoordinates: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#GeoCoordinates',
      '@context': {
        'latitude': {
          '@id': 'https://schema.org/latitude',
          '@type': 'xsd:string'
        },
        'longitude': {
          '@id': 'https://schema.org/longitude',
          '@type': 'xsd:string'
        }
      }
    },
    IdentityObject: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#IdentityObject',
      '@context': {
        'hashed': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#hashed',
          '@type': 'xsd:boolean'
        },
        'identityHash': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#identityHash',
          '@type': 'xsd:string'
        },
        'salt':  {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#salt',
          '@type': 'xsd:string'
        }
      }
    },
    Image: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#IdentityImage',
      '@context': {
        'caption': {
          '@id': 'https://schema.org/caption',
          '@type': 'xsd:string'
        }
      }
    },
    Profile: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Profile',
      '@context': {
        'additionalName': {
          '@id': 'https://schema.org/additionalName',
          '@type': 'xsd:string'
        },
        'address': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Address'
        },
        'dateOfBirth': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#dateOfBirth',
          '@type': 'xsd:date'
        },
        'email': {
          '@id': 'https://schema.org/email',
          '@type': 'xsd:string'
        },
        'familyName': {
          '@id': 'https://schema.org/familyName',
          '@type': 'xsd:string'
        },
        'familyNamePrefix': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#familyNamePrefix',
          '@type': 'xsd:string'
        },
        'givenName': {
          '@id': 'https://schema.org/givenName',
          '@type': 'xsd:string'
        },
        'honorificPrefix': {
          '@id': 'https://schema.org/honorificPrefix',
          '@type': 'xsd:string'
        },
        'honorificSuffix': {
          '@id': 'https://schema.org/honorificSuffix',
          '@type': 'xsd:string'
        },
        'parentOrg': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#parentOrg',
          '@type': 'xsd:string'
        },
        'patronymicName': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#patronymicName',
          '@type': 'xsd:string'
        },
        'phone': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#PhoneNumber',
          '@type': 'xsd:string'
        },
        'official': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#official',
          '@type': 'xsd:string'
        },
        'sisSourcedId': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#sisSourcedId',
          '@type': 'xsd:string'
        },
        'sourcedId': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#sourcedId',
          '@type': 'xsd:string'
        }
      }
    },
    Result: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Result',
      '@context': {
        'achievedLevel': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#achievedLevel',
          '@type': 'xsd:anyURI'
        },
        'resultDescription': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#resultDescription',
          '@type': 'xsd:anyURI'
        },
        'status': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#status',
          '@type': 'xsd:string'
        },
        'value': {
          '@id': 'https://schema.org/value',
          '@type': 'xsd:string'
        }
      }
    },
    ResultDescription: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#ResultDescription',
      '@context': {
        'allowedValue': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#allowedValue',
          '@type': 'xsd:string'
        },
        'requiredLevel': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#requiredLevel',
          '@type': 'xsd:anyURI'
        },
        'requiredValue': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#requiredValue',
          '@type': 'xsd:string'
        },
        'resultType': {
          '@id':'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#resultType',
          '@type': 'xsd:string'
        },
        'rubricCriterionLevel': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#RubricCriterionLevel',
        'valueMax': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#valueMax',
          '@type': 'xsd:string'
        },
        'valueMin': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#valueMin',
          '@type': 'xsd:string'
        }
      }
    },
    RubricCriterionLevel: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#RubricCriterionLevel',
      '@context': {
        'level': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#level',
          '@type': 'xsd:string'
        },
        'points': {
          '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#points',
          '@type': 'xsd:string'
        }
      }
    },
    alignment: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#Alignment',
      '@type': '@id'
    },
    description: {
      '@id': 'https://schema.org/description',
      '@type': 'xsd:string'
    },
    endorsement: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#endorsement',
      '@type': '@id'
    },
    image: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#image',
      '@type': '@id'
    },
    name: {
      '@id': 'https://schema.org/name',
      '@type': 'xsd:string'
    },
    narrative: {
      '@id': 'https://imsglobal.github.io/openbadges-specification/ob_v3p0.html#narrative',
      '@type': 'xsd:string'
    },
    url: {
      '@id': 'https://schema.org/url',
      '@type': 'xsd:anyURI'
    }
  }
};
