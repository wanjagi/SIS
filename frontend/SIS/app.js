/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SIS.Application',

    name: 'SIS',

    requires: [
        // This will automatically load all classes in the SIS namespace
        // so that application classes do not need to require each other.
        'SIS.*'
    ],

    // The name of the initial view to create.
    mainView: 'SIS.view.main.Main'
});
