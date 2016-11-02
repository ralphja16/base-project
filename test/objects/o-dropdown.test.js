describe('object Dropdown', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div class="o-dropdown">' +
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
        var child = document.querySelectorAll('o-dropdown');
        // child.remove();
        document.body.removeChild(child);
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        oDropdown;
    });


    it('Function o-dropdown should exist', function() {
        expect(oDropdown).not.to.be.undefined;
    });

});
