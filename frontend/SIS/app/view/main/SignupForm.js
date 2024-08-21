Ext.define('SIS.view.main.SignupForm', {
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
            handler: function(button) {
                var form = button.up('form').getForm();

                if (form.isValid()) {
                    var values = form.getValues();

                    Ext.Ajax.request({
                        url: 'http://localhost:8000/api/register',
                        method: 'POST',
                        jsonData: values,
                        success: function(response) {
                            Ext.Msg.alert('Success', 'Registration successful. Please log in.');
                            Ext.Viewport.removeAll();
                            Ext.create('SIS.view.main.Main');
                            //Ext.create('SIS.view.main.Main');
                            //Ext.create('SIS.view.main.LoginForm');
                        },
                        failure: function(response) {
                            Ext.Msg.alert('Failure', 'Registration failed.');
                        }
                    });
                }
            }
        }
    ]
});
