define(function(require) {

    'use strict';

    // Defining the Api object
    var Api = {
        collections: {},
        parse: {}
    };

    // Defining the initStatus
    var initStatus = false;

    // Define Required Methods
    var fetch = require('utils/fetch');
    var formulas = require('utils/formulas');

    // Defining Variables


    var getVideoData = function() {
        fetch.videos(function(data) {
            return data;
        });
    };

    var getUserData = function() {
        fetch.user(function(data) {
            return data;
        });
    };

    var init = function() {

        // Return false if the app has already initiated
        if(initStatus) return false;
        initStatus = true;

        console.log('LoeScore Initialized.');

        var user;

        var example = formulas.view(100, 10000);

        console.log(example);

        // $.when(fetch.user()).then(function(data) {
        //     console.log(data);
        //     console.log('wew');
        // });

    };


    Api.init = init;
    Api.fetch = fetch;

    // Pushing the Api to the global scope
    window.LoeScore = Api;
    window.Loescore = window.LoeScore;

    return Api;

});