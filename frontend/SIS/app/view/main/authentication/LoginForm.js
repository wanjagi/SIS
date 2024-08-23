Ext.define('SIS.view.main.authentication.LoginForm', {
    extend: 'Ext.form.Panel',
    //extend: 'Ext.container.Container',
    xtype: 'loginform',

    requires: [
        'SIS.view.main.controllers.LoginController'
    ],

    controller: 'auth',


    layout: {
        type: 'vbox',
        align: 'middle'
    },
    frame: 'true',
    width: 400,
    bodyPadding: 10,
    centered: true,

    defaults: {
        anchor: '100%',
        labelWidth: 120,
    },

    title: 'Log In',

    items: [
        
        {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            inputType: 'password'
        }
    ],

    buttons: [
        {
            text: 'Sign Up',
            handler: function(button){
                var form = button.up('loginform'); // Get the login form instance
                //var parentContainer = form.up('container'); // Get the parent container

                form.destroy(); // Remove the login form
                
                Ext.create({
                    xtype: 'signupform',
                    renderTo: Ext.getBody() // Render the signup form
                });
            }
            
        },
        {
            text: 'Log In',
            formBind: true,
            handler: 'onLogIn'
            
        }
        
    ]
});



