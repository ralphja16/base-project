let expect      = require('chai').expect;
// let testHolder  = require('./index.test.js');

describe('object Dropdown', function() {


    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        testHolder.oDropdown();
    });

    it('should exist', function() {
        expect(oDropdown).not.to.be.undefined;
    });
});
