/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': 'true',
    id: '@id',
    type: '@type',

    description: 'https://schema.org/description',
    image: {
      '@id': 'https://schema.org/image',
      '@type': '@id'
    },
    name: 'https://schema.org/name',
  }
};
