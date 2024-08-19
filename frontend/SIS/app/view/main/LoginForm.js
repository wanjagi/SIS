
Ext.define('SIS.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    title: 'Login',
    frame: true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User Email',
        name: 'email',
        emptyText: 'email',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }
    ],

    buttons: [
        { text: 'Register' },
        { text: 'Login' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});