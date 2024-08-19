/**
 * Demonstrates a simple registration form.
 */
Ext.define('SIS.view.main.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',

    frame: true,
    title: 'Register',
    bodyPadding: 10,
    scrollable: true,
    width: 355,

    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [
            { allowBlank: false, fieldLabel: 'User Name', name: 'user', emptyText: 'user name' },
            { allowBlank: false, fieldLabel: 'Email', name: 'email', emptyText: 'email' },
            { allowBlank: false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
            { allowBlank: false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
        ]
    }],

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true
    }]
});