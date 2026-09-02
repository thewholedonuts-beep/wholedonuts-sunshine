'use strict';

/**
 * test/domain-config.test.js
 *
 * Unit tests for the domain-config module using Node's built-in test runner.
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');

const { normalizeHostname, serviceForDomain, allDomains } = require('../domain-config');
const domainDetector = require('../middleware/domainDetector');

describe('serviceForDomain', function () {
  it('does not claim the canonical Universe domain', function () {
    assert.equal(serviceForDomain('wenevergonnaclose.com'), null);
  });

  it('normalizes common host variants', function () {
    assert.equal(serviceForDomain('WWW.WENEVERGONNACLOSE.COM:443'), null);
    assert.equal(serviceForDomain('wholedonuts.org.'), 'wholedonuts');
  });

  it('returns "wholedonuts" for wholedonuts.org', function () {
    assert.equal(serviceForDomain('wholedonuts.org'), 'wholedonuts');
  });

  it('returns "merch" for wholedonuts.store', function () {
    assert.equal(serviceForDomain('wholedonuts.store'), 'merch');
  });

  it('returns "nurturedchef" for thenurturedchef.com', function () {
    assert.equal(serviceForDomain('thenurturedchef.com'), 'nurturedchef');
  });

  it('returns "merch" for thenutur3dchef.com', function () {
    assert.equal(serviceForDomain('thenutur3dchef.com'), 'merch');
  });

  it('returns null for an unknown domain', function () {
    assert.equal(serviceForDomain('unknown.example'), null);
  });
});

describe('domainDetector', function () {
  it('normalizes the stored domain as well as the selected service', function () {
    const req = { headers: { host: 'WWW.THENUTUR3DCHEF.COM:443' } };
    domainDetector(req, {}, function () {});

    assert.equal(req.detectedDomain, 'thenutur3dchef.com');
    assert.equal(req.detectedService, 'merch');
  });
});

describe('normalizeHostname', function () {
  it('normalizes host variants consistently', function () {
    assert.equal(normalizeHostname('WWW.WENEVERGONNACLOSE.COM:443'), 'wenevergonnaclose.com');
    assert.equal(normalizeHostname('wholedonuts.org.'), 'wholedonuts.org');
  });
});

describe('allDomains', function () {
  it('returns an array with at least 8 entries', function () {
    const domains = allDomains();
    assert.ok(Array.isArray(domains));
    assert.ok(domains.length >= 8);
  });

  it('every entry has a domain and service field', function () {
    allDomains().forEach(function (d) {
      assert.ok(typeof d.domain  === 'string', 'domain must be a string');
      assert.ok(typeof d.service === 'string', 'service must be a string');
    });
  });
});
