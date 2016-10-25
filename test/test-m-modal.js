// describe('Modal', function() {
//
//     before(function() {
//         // Karma creates this global __html__ property that will hold all
//         // of our HTML so we can populate the body during our tests
//         if (window.__html__) {
//             document.body.innerHTML = window.__html__['test/testrunner.html'];
//         }
//
//         // Create a new instance of our Calculator module to be used in
//         // each `it` test case within the ‘Calculator’ describe block
//         var mModal = new $.oModal($('.o-btn[data-toggle="modal"]'));
//     });
//
//     describe('All elements for a modal should exist', function() {
//
//         var modalButton = document.querySelector('.o-btn[data-toggle="modal"]');
//         // var modalButtonTarget = document.querySelector('.o-btn[data-toggle="modal"]').getAttribute('data-target');
//         // var modalWindow = document.querySelector('.o-modal').getAttribute('id');
//
//
//         it('Function o-modal should exist', function() {
//             expect(mModal).not.to.be.undefined;
//         });
//         it('Button to fire modal should exist', function() {
//             expect(modalButton).to.not.equal(null);
//         });
//         it('Button should have a #traget', function() {
//             expect(modalButtonTarget).to.contain('#');
//         });
//         it('Button should have a data-target attribute should be equal to matching modal', function() {
//             expect(modalButtonTarget).to.contain(modalWindow);
//         });
//
//     });
//
//
//     describe('Click on button should fire matching modal', function() {
//         it('Modal should show up', function() {
//             $(modalButton).click();
//             expect ($('body').getAttribute('class').to.be.equal('m-modal--open'));
//         });
//     });
// });
