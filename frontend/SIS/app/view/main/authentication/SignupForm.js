Ext.define('SIS.view.main.authentication.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',

    layout: 'vbox',
    width: 400,
    bodyPadding: 10,
    title: 'Sign Up',

    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            allowBlank: false
        },
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
            inputType: 'password',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password_confirmation',
            fieldLabel: 'Confirm Password',
            inputType: 'password',
            allowBlank: false
        }
    ],

    buttons: [
        {
            text: 'Sign Up',
            formBind: true,
            handler: 'onSignUp'
        },
        {
            text: 'Log in',
            handler: function(button){
                form = button.up('signupform');
                //parent = form.up('container');

                form.destroy();

                Ext.create({
                    xtype: 'loginform',
                    renderTo: Ext.getBody()})
            }
        }
    ]
});

