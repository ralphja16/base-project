// var oModal = require('../source/objects/o-modal/js/o-modal');

describe('Object modal', function() {

    it('should exist', function() {
        var testVar = false;
        onReady() ;
        expect(testVar).toEqual(true);
        expect(oModal).not.to.be.undefined;
    });



});
