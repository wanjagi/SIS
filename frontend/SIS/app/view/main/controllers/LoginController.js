Ext.define('SIS.view.main.controllers.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth',
    
    
    onLogIn: function(button){
        var form = button.up('form');

        if(form.isValid()){
            var values = form.getValues();

            Ext.Ajax.request({
                url: 'http://localhost:8000/api/login',
                method: 'POST',
                jsonData: {
                    email: values.email,
                    password: values.password
                },

                success: function(response, values){
                    var responseData = Ext.decode(response.responseText);

                    if (responseData.token){
                        localStorage.setItem('authToken', responseData.token);

                        form.destroy();
                        Ext.create({
                            xtype: 'app-main',
                            fullscreen: true,
                            renderTo: Ext.getBody()
                        });


                        
                    } else {
                        Ext.Msg.alert('invalid email or password');
                    }
                },
                failure: function(){
                    Ext.Msg.alert('failure', 'Log-in failed');
                }
            });
        }
    },



    onSignUp: function(button) {
        var form = button.up('form');

        if (form.isValid()) {
            var values = form.getValues();

            Ext.Ajax.request({
                url: 'http://localhost:8000/api/register',
                method: 'POST',
                jsonData: values,
                success: function(response) {
                    Ext.Msg.alert('Success', 'Registration successful.');
                    
                    form.destroy();

                    Ext.create({
                        xtype: 'app-main',
                        renderTo: Ext.getBody()})
                },
                failure: function(response) {
                    Ext.Msg.alert('Failure', 'Registration failed.');
                }
            });
        }
    }
});