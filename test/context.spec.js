/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const ctx = require('..');
const {
  contexts, constants, CONTEXT_URL_V3, CONTEXT_V3, CONTEXT_URL_V3_IMS
} = ctx;

const contextUrl = constants.CONTEXT_URL_V3;

describe('Open Badges Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V3).to.exist;
    expect(CONTEXT_URL_V3_IMS).to.exist;
    expect(CONTEXT_V3).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });
});
