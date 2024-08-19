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


    onSaveClick: function(button) {
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
    
    },


    /*buttonOnlyChange: function(field, value) {
        Ext.toast('<b>Selected:</b> ' + value);
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
        var values = form.getValues();
        //console.log(values);
    
        var store = Ext.getStore('personnel'); // Correct store lookup

        if (!form.isValid()) {
            Ext.Msg.alert('Invalid Data', 'verify the data.');
            return;
        } else {
                /*if (!store) {
                console.error("Store not found");
                return;
            }*/
            store.add(values);
            /*if (record) {
                // Updating existing record
                record.set(values);
            } else {
                // Adding new record
                store.add(values);
            }*/

            store.sync({
                success: function() {

                    Ext.Msg.alert('Success', 'Record has been saved successfully.');
                    form.reset();
                },
                failure: function() {
                    Ext.Msg.alert('Failure', 'Failed to save record.');
                }


            });
            
        }
    
        
    
        //button.up('window').close();
    },


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
