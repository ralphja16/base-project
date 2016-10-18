describe('All elements for a modal should exist', function() {

    var modalButton = document.querySelector('.o-btn[data-toggle="modal"]');
    var modalButtonTarget = document.querySelector('.o-btn[data-toggle="modal"]').getAttribute('data-target');
    var modalWindow = document.querySelector('.o-modal').getAttribute('id');


    it('Function o-modal should exist', function() {
        expect(oModal).not.to.be.undefined;
    });
    it('Button to fire modal should exist', function() {
        expect(modalButton).to.not.equal(null);
    });
    it('Button should have a #traget', function() {
        expect(modalButtonTarget).to.contain('#');
    });
    it('Button should have a data-target attribute should be equal to matching modal', function() {
        expect(modalButtonTarget).to.contain(modalWindow);
    });

});


describe('Click on button should fire matching modal', function() {
    it('Modal should show up', function() {
        $(modalButton).click();
        expect ($('body').getAttribute('class').to.be.equal('o-modal--open'));
    });
});
