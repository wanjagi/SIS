/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SIS.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires:[
        'SIS.view.main.PersonnelController',
        'SIS.view.main.ProductController',
        'SIS.view.main.PersonnelForm',
        'SIS.store.Personnel',
        'SIS.store.Product'

    ],



    onLogoutClick: function() {
        Ext.Ajax.request({
            url: 'http://localhost:8000/api/logout',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            },
            success: function(response) {
                localStorage.removeItem('authToken');
                Ext.Msg.alert('Success', 'Logged out successfully.');

                // Redirect to the login form
                Ext.Viewport.removeAll();
                Ext.create('SIS.view.main.LoginForm');
            },
            failure: function(response) {
                Ext.Msg.alert('Failure', 'Log-out failed.');
            }
        });
    },


    //fix server response **
    onSaveClick: function(button) {
        var form = button.up('window').down('form');
        var record = form.getRecord();
        var store = Ext.getStore('personnel');
        
        if (!form.isValid()) {
            Ext.Msg.alert('Invalid Data', 'Please verify the data.');
            return;
        }
    
        if (!store) {
            console.error("Store not found");
            return;
        }
    
        form.submit({
            url: record ? 'http://localhost:8000/api/personnel/' + record.get('id') : 'http://localhost:8000/api/personnel',
            method: record ? 'PUT' : 'POST',
            
            success: function(form, action) {
                var response = Ext.decode(action.response.responseText);
                if (response.success) {
                    Ext.Msg.alert('Success', 'Record has been saved successfully.');
                    store.load(); // Reload the store after saving
                    button.up('window').close();
                } else {
                    Ext.Msg.alert('Failure', 'Server-side failure occurred.');
                }
            },
            failure: function(form, action) {
                //console.log('Full server response: ', action.response);
                //Ext.Msg.alert('Failure', 'Failed to save record.');
                button.up('window').close();
                store.load();
            }
        });
    },
    
    


    /*onSaveClick: function(button) {
        var form = button.up('window').down('form');
        var record = form.getRecord();
        var values = form.getValues();

        if (!form.isValid()) {
            Ext.Msg.alert('Invalid Data', 'verify the data.');
            return;
        } else {

            var store = Ext.getStore('personnel'); // Correct store lookup
    
            if (!store) {
                console.error("Store not found");
                return;
            }
        
            if (record) {
                // Updating existing record
                record.set(values);
            } else {
                // Adding new record
                store.add(values);
            }
        
            store.sync({
                success: function() {
                    Ext.Msg.alert('Success', 'Record has been saved successfully.');
                },
                failure: function() {
                    Ext.Msg.alert('Failure', 'Failed to save record.');
                }
            });
        
            button.up('window').close();

        }
    
    },*/


    /*buttonOnlyChange: function(field, value) {
        
        var document = value;
        if (document){
            Ext.toast('<b>Selected:</b> ' + value);
        }
        //console.log(document);
        
    },*/


    onDeleteClick: function(){
        var grid = this.getView();
        var selection = grid.getSelection()[0];
        if (selection) {
            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete', function(button){
                if (button === 'yes'){
                    grid.getStore().remove(selection);
                    grid.getStore().sync();
                    Ext.Msg.alert('Success', 'Record has been deleted successfully.');                }
            

            });
        } else {
            Ext.Msg.alert('Error', 'Select a record to delete.');
        }
    },


    onRegSaveClick: function(button) {
        var form = button.up('form');
        var record = form.getRecord();
        var store = Ext.getStore('personnel');
        
        if (!form.isValid()) {
            Ext.Msg.alert('Invalid Data', 'Please verify the data.');
            return;
        }
    
        if (!store) {
            console.error("Store not found");
            return;
        }
        
        
        form.submit({
            url: record ? 'http://localhost:8000/api/personnel' + record.get('id') : 'http://localhost:8000/api/personnel',
            method: record ? 'PUT' : 'POST',
            success: function(form, action) {
                Ext.Msg.alert('Success', 'Record has been saved successfully.');
                store.load(); // Reload the store after saving
                //button.up('window').close();
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failure', 'Failed to save record.');
            }
        });
    
        
    
        //button.up('window').close();
    },

    //clear form
    onNewRegClick: function(button){
        form = button.up('form');
        form.reset();

    },



    onProductSaveClick: function(button){
        var form = button.up('window').down('form');
        var record = form.getRecord();
        var values = form.getValues();

    
        var store = Ext.getStore('products'); // Correct store lookup
    
        if (!store) {
            console.error("Store not found");
            return;
        }
    
        if (record) {
            // Updating existing record
            record.set(values);
        } else {
            // Adding new record
            store.add(values);
        }
    
        store.sync({
            success: function() {
                Ext.Msg.alert('Success', 'Product has been saved successfully.');
            },
            failure: function() {
                Ext.Msg.alert('Failure', 'Failed to save product.');
            }
        });
    
        button.up('window').close();
    },


    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
