'use strict';

var stripe = require('../../testUtils').getSpyableStripe();
var expect = require('chai').expect;

var SCHEDULE_TEST_ID = 'sub_sched_123';
var REVISION_TEST_ID = 'sub_sched_rev_123';

describe('Subscription Schedule Resource', function() {
  describe('release', function() {
    it('release a subscription schedule successfully', function() {
      var data = {
        invoice_now: true,
      }
      stripe.subscriptionSchedules.cancel(SCHEDULE_TEST_ID, data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/cancel',
        data: data,
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      var data = {
        customer: 'cus_123',
      };
      stripe.subscriptionSchedules.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_schedules',
        data: data,
        headers: {},
      });
    });
  });

  describe('release', function() {
    it('release a subscription schedule successfully', function() {
      var data = {
        preserve_cancel_date: true,
      }
      stripe.subscriptionSchedules.release(SCHEDULE_TEST_ID, data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/release',
        data: data,
        headers: {},
      });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request with ID param', function() {
      stripe.subscriptionSchedules.retrieve(SCHEDULE_TEST_ID);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/subscription_schedules/sub_sched_123',
        data: {},
        headers: {},
      });
    });
  });

  describe('Revision methods', function() {
    describe('retrieveRevision', function() {
      it('Sends the correct request', function() {
        stripe.subscriptionSchedules.retrieveRevision(SCHEDULE_TEST_ID, REVISION_TEST_ID);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/revisions/' + REVISION_TEST_ID,
          headers: {},
          data: {},
        });
      });
    });

    describe('listRevisions', function() {
      it('Sends the correct request', function() {
        stripe.subscriptionSchedules.listRevisions(SCHEDULE_TEST_ID);
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/subscription_schedules/' + SCHEDULE_TEST_ID + '/revisions',
          headers: {},
          data: {},
        });
      });
    });
  });
});
