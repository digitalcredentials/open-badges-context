/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL_V3, CONTEXT_URL_V3_JFF_V1, CONTEXT_URL_V3_IMS} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL_V3, context);
contexts.set(CONTEXT_URL_V3_JFF_V1, context);
contexts.set(CONTEXT_URL_V3_IMS, context);

module.exports = {
  constants,
  contexts,
  CONTEXT_URL_V3,
  CONTEXT_URL_V3_JFF_V1,
  CONTEXT_URL_V3_IMS,
  CONTEXT_V3: context
};
