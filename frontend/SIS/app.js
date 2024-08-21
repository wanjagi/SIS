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
    
    
    /*launch: function () {
        var token = localStorage.getItem('authToken');
    
        if (token) {
            // If a token is found, the user is considered logged in, load the main view
            Ext.create({
                xtype: 'app-main',
                renderTo: Ext.getBody()  // Render the main view to the body
            });
        } else {
            // If no token is found, show the login form
            Ext.create({
                xtype: 'loginform',
                renderTo: Ext.getBody()  // Render the login form to the body
            });
        }
    }*/
    
    

    // The name of the initial view to create.
    mainView: 'SIS.view.main.Main'
});
