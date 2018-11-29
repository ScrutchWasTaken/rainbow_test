/* Wait for the page is completely loaded */
$(function() {
    console.log("[DEMO] :: Rainbow Application started!");

    var applicationID = "",
        applicationSecret = "";

    /* Bootstrap the SDK */
    angular.bootstrap(document, ["sdk"]).get("rainbowSDK");

    /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
    var onLoaded = function onLoaded() {
        console.log("[DEMO] :: On SDK Loaded !");

        var applicationID = "b50443d0f10b11e8a85b99fd800e70f8",
        applicationSecret = "2ghU9D5e2pR7YtU2rY3byIcvox6J3brTu8gWzJ7o0HFxdWbyl9B5lqw2tz5ta5eW";

        // Activate full SDK log
        rainbowSDK.setVerboseLog(true);

        rainbowSDK
            .initialize(applicationID, applicationSecret)
            .then(function() {
                console.log("[DEMO] :: Rainbow SDK is initialized!");
            })
            .catch(function(err) {
                console.log("[DEMO] :: Something went wrong with the SDK...", err);
            });
    };

    /* Listen to the SDK event RAINBOW_ONLOADED */
    $(document).on(rainbowSDK.RAINBOW_ONLOADED, onLoaded);

    /* Load the SDK */
    rainbowSDK.load();

    var onReady = function onReady() {

        var myRainbowLogin = "estelle.moncollin@gmail.com";       // Replace by your login
        var myRainbowPassword = "Rainbow123!*"; // Replace by your password

        // The SDK for Web is ready to be used, so you can sign in
        rainbowSDK.connection.signin(myRainbowLogin, myRainbowPassword)
        .then(function(account) {
              // Successfully signed to Rainbow and the SDK is started completely. Rainbow data could be retrieved.
              ...
        })
        .catch(function(err) {
              // An error occurs (e.g. bad credentials). Application could be informed that sign-in has failed
              ...
        });
    };

    /* Listen to the SDK event RAINBOW_ONREADY */
    $(document).on(rainbowSDK.RAINBOW_ONREADY, onReady);


});
