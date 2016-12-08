// var casper = require('casper').create();

casper.test.begin('Testing the styleguide html', 0, function(test){

    casper.start('index.html');

    casper.waitForSelector('#modals button', function() {
        this.echo('Click on button');
        this.click("#modals button[data-modal='#myModal2']");
    }).waitUntilVisible('#myModal2', function then() {
        this.echo('Show content of modal');
        var a = this.fetchText('#myModal2');
        this.echo(a);

        var modalId1 = casper.getElementsInfo("#myModal1");
        var modalId2 = casper.getElementsInfo("#myModal2");
        casper.echo("Is visible? " + modalId2[0].visible);


    }, function onTimeout() {
        this.echo('not found');
    });



    // casper.then(function() {
    //     this.echo('Document title: ' + this.getTitle());
    //     test.assertTitle('Google', 'Google has correct title');
    // });

    casper.run(function() {
        test.done();
    })
});

casper.test.begin('Page content tests', 3, function suite(test) {
    casper.start('index.html', function() {
        test.assertExists('#l-header');
        test.assertSelectorHasText('#l-header a', 'Stylesheet');
        test.assertVisible('#l-content');
    }).run(function() {
        test.done();
    });
});
