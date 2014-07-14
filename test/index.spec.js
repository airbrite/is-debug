var isDebug = require('../');
var sinon = require('sinon');
var assert = require('chai').assert;
// Sandbox to stub properties
var sandbox = sinon.sandbox.create();

describe('isDebug', function() {
  var subject = isDebug;
  var origEnv = process.env;

  before(function() {
    process.env = {
      NODE_ENV: undefined,
      DEBUG: undefined
    };
  });

  after(function() {
    process.env = origEnv;
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('NODE_ENV is undefined', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'NODE_ENV', undefined);
      sandbox.stub(process.env, 'DEBUG', undefined);
    });

    it('should be true', function() {
      assert.ok(subject());
    });
  });

  describe('NODE_ENV is "development"', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'NODE_ENV', 'development');
      sandbox.stub(process.env, 'DEBUG', undefined);
    });

    it('should be true', function() {
      assert.ok(subject());
    });
  });


  describe('NODE_ENV is "test"', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'NODE_ENV', 'test');
      sandbox.stub(process.env, 'DEBUG', undefined);
    });

    it('should be false', function() {
      assert.notOk(subject());
    });
  });

  describe('NODE_ENV is "production"', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'NODE_ENV', 'production');
      sandbox.stub(process.env, 'DEBUG', undefined);
    });

    it('should be false', function() {
      assert.notOk(subject());
    });
  });

  describe('DEBUG is false', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'DEBUG', 'false');
    });

    it('should be false regardless of NODE_ENV', function() {
      sandbox.stub(process.env, 'NODE_ENV', 'production');
      assert.notOk(subject(), 'NODE_ENV is "production"');

      sandbox.stub(process.env, 'NODE_ENV', 'test');
      assert.notOk(subject(), 'NODE_ENV is "test"');

      sandbox.stub(process.env, 'NODE_ENV', 'development');
      assert.notOk(subject(), 'NODE_ENV is "development"');
    });
  });

  describe('DEBUG is true', function() {
    beforeEach(function() {
      sandbox.stub(process.env, 'DEBUG', 'true');
    });

    it('should be true regardless of NODE_ENV', function() {
      sandbox.stub(process.env, 'NODE_ENV', 'production');
      assert.ok(subject(), 'NODE_ENV is "production"');

      sandbox.stub(process.env, 'NODE_ENV', 'test');
      assert.ok(subject(), 'NODE_ENV is "test"');

      sandbox.stub(process.env, 'NODE_ENV', 'development');
      assert.ok(subject(), 'NODE_ENV is "development"');
    });
  });
});
