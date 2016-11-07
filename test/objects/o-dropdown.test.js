const oDropdown = require('../../source/objects/o-dropdown/js/o-dropdown.js');

describe('object Dropdown', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture" class="o-dropdown">' +
            '<button class="o-btn o-dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                'Dropdown' +
                '<span class="caret"></span>' +
            '</button>' +
            '<ul class="o-dropdown__menu" aria-labelledby="dropdownMenu1">' +
                '<li><a href="#">Action</a></li>' +
                '<li><a href="#">Another action</a></li>' +
                '<li><a href="#">Something else here</a></li>' +
                '<li role="separator" class="divider"></li>' +
                '<li><a href="#">Separated link</a></li>' +
            '</ul>' +
        '</div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        oDropdown;
    });


    // before(function(){
    //     fixture.setBase('test/fixtures')
    //   });
    //
    //   beforeEach(function(){
    //     this.result = fixture.load('o-dropdown.fixture.html');
    //   });
    //
    //   afterEach(function(){
    //     fixture.cleanup()
    //   });

    var holder          = document.querySelector('.o-dropdown');
    var dropdownButton  = document.querySelector('.o-dropdown-toggle');


    it('should exist', function() {
        expect(oDropdown).not.to.be.undefined;
    });

    it('should addClass .is--open after clicking', function() {
        document.querySelector('.o-dropdown-toggle').click();
        expect(document.querySelector('.o-dropdown')).to.have.class('is--open');
    });



});
