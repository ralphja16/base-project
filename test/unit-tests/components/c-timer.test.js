import { assert } from 'assert';
import { expect } from 'chai';

import { timer } from '../../../timer.js';

describe('object timer', function() {

    it('should be a function', function() {
        expect(timer().triggerClickListener).that.is.an('function');
    });

    it('should be a NaN', function() {
        // console.log(timer().triggerClickListener());
        expect(timer().triggerClickListener()).to.be.NaN;

    });

    it('timer should be an object', function() {
        expect(timer()).that.is.an('object');

    });

    it('1 * 1 should be 1', function() {
        expect(timer().triggerClickListener(1,1)).to.equal(1);
        expect(timer().triggerClickListener(1,1)).not.to.equal(2);
    });

    it('2 * 1 should be 2', function() {
        expect(timer().triggerClickListener(2,1)).to.equal(2);
    });

});

describe('array', function() {
  it('array is filled with data', function() {
      expect(timer().testArray).not.to.be.empty;
      expect(timer().testArray).not.to.include(0);
      expect(timer().testArray).to.include(78);
  });

  it('should be a array', function() {
      expect(timer().testArray).to.be.an('array');
  });

  // it('should be a test');

});
