Ext.define('SIS.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    layout: 'vbox',
    width: 400,
    bodyPadding: 10,
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
            text: 'Log In',
            formBind: true,
            handler: function(button) {
                var form = button.up('form').getForm();

                if (form.isValid()) {
                    var values = form.getValues();

                    Ext.Ajax.request({
                        url: 'http://localhost:8000/api/login',
                        method: 'POST',
                        jsonData: { 
                            email: values.email,
                            password: values.password},
                        success: function(response) {
                            var responseData = Ext.decode(response.responseText);

                            if (responseData.token) {
                                localStorage.setItem('authToken', responseData.token);
                                Ext.Msg.alert('Success', 'Log-in successful.');
                                Ext.Viewport.removeAll();
                                Ext.create('SIS.view.main.Main');
                            } else {
                                Ext.Msg.alert('Failure', 'Invalid credentials.');
                            }
                        },
                        failure: function() {
                            Ext.Msg.alert('Failure', 'Log-in failed.');
                        }
                    });
                }
            }
        }
    ]
});
