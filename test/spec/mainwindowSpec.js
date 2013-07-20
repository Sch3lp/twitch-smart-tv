// Load the MainWindow and describe tests.
define(
    [
        "jquery",
        "fixture",
        "mainwindow"
    ],
    function($, F, MainWindow){
        var dummyAnchor;
        beforeEach(function() {
            // dummyAnchor = F.affix('A#dummy-anchor'); //jasmine-fixture
            dummyAnchor = $('body').append('<a href="javascript:void(0);" id="dummy-anchor" />');
        });
        afterEach(function() {
            dummyAnchor.remove();
        });


        // Describe the test suite for this module.
        describe(
            "The MainWindow",
            function(){
                // Create our test module.
                var mainWindow = new MainWindow();
 
                // Test the encoding of decimal values into roman
                // numeral strings.
                it("registers key handlers",
                    function(){
                        mainWindow.init();
                        // expect(dummyAnchor.attr('onkeydown')).toBeEqual("onKeyDown();");
                        expect(false).toBeTruthy();
                    }
                );
            }
        );
 
    }
);