// controller for the personnel view

Ext.define('SIS.view.main.PersonnelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnel',


    //function to handle add button click
    //launches form
    //onSaveClick function to handle saving to db
    onAddClick: function(){
        Ext.create('SIS.view.main.PersonnelForm', {
            title: 'Add New Record',
            buttons: [
                {
                    text: 'Save',
                    handler: 'onSaveClick'
                }
            ]
        }).show()
    },


    //handle edit button click
    //get current grid
    //check if there is a selection
    /*onEditClick: function(){
        var grid = this.getView();
        var selection = grid.getSelection()[0];
        if (selection) {
            var editWindow = Ext.create('SIS.view.main.PersonnelForm', {
                title: 'Edit Record',

                buttons: [
                    {
                        text:'Save',
                        handler:'onSaveClick'
                    }
                ],
                //record: selection

                
            }).show();
            //load the current selsction into the form
            var form = editWindow.down('form');
            form.loadRecord(selection);
            editWindow.show();
        } else {
            Ext.Msg.alert('Error', 'Select a record to edit');
        }
    },*/

    onEditClick: function(button) {
        var record;
        var grid = this.getView();



        // Check if the button is within a widgetcolumn
        if (button.getWidgetRecord) {
            record = button.getWidgetRecord(); // This is for widgetcolumn buttons
        } else {
            // Fallback for toolbar buttons
            record = grid.getSelection()[0];
        }

        //var grid = this.getView();
        //var selection = grid.getSelectionModel().getSelection();

        if (record) {
            // Automatically select the record in the grid
            grid.getSelectionModel().select(record);

            var editWindow = Ext.create('SIS.view.main.PersonnelForm', {
                title: 'Edit Record',
                buttons: [
                    {
                        text: 'Save',
                        handler: 'onSaveClick'
                    }
                ]
            });

            var form = editWindow.down('form');
            form.loadRecord(record); // Load the record data into the form
            editWindow.show();
        } else {
            Ext.Msg.alert('Error', 'No record selected for editing');
        }
    },


    //handle delete button click
    //
    onDeleteClick: function(){
        var grid = this.getView();
        var selection = grid.getSelectionModel().getSelection();
        //var selection = grid.getSelection()[0];
        if (selection.length > 0) {
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


    //handle saving to db
    onSaveClick: function(button) {
        var form = button.up('window').down('form');
        var record = form.getRecord();
        var values = form.getValues();

    
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
    },


    onItemDbClick: function(view, record, item, index, e, eOpts) {
        Ext.create('Ext.window.Window', {
            title: 'Personnel Details',
            modal: true,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    bodyPadding: 10,
                    defaults: {
                        xtype: 'displayfield',
                        labelWidth: 120,
                        anchor: '100%',
                    },
                    items: [
                        {
                            fieldLabel: 'Profile Picture',
                            value: '<img src="http://localhost:8000/' + record.get('profile_picture') + '" style="height: 100px; width: 100px; border-radius: 50%;">',
                            fieldStyle: 'text-align:center'
                        },
                        {
                            fieldLabel: 'Name',
                            value: record.get('name')
                        },
                        {
                            fieldLabel: 'Email Address',
                            value: record.get('email')
                        },
                        {
                            fieldLabel: 'Registration',
                            value: record.get('registration')
                        },
                        {
                            fieldLabel: 'ID Number',
                            value: record.get('idnumber')
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Close',
                    handler: function(button) {
                        button.up('window').close();
                    }
                }
            ]
        }).show();
    },

    /*onDeleteSelectedClick: function() {
        var grid = this.getView();
        var selection = grid.getSelectionModel().getSelection();

        if (selection.length > 0) {
            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete the selected records?', function(choice) {
                if (choice === 'yes') {
                    grid.getStore().remove(selection);
                    grid.getStore().sync();
                }
            });
        } else {
            Ext.Msg.alert('Error', 'No records selected for deletion.');
        }
    }*/

    onEditPersonnelWidgetClick: function(view, recIndex, cellIndex, item, e, record,button) {
        var grid = this.getView();
        grid.getSelectionModel().select(record);
        if (record) {
            // Automatically select the record in the grid
            

            var editWindow = Ext.create('SIS.view.main.PersonnelForm', {
                title: 'Edit Record',
                buttons: [
                    {
                        text: 'Save',
                        handler: 'onSaveClick'
                    }
                ]
            });

            var form = editWindow.down('form');
            form.loadRecord(record); // Load the record data into the form
            editWindow.show();
            grid.getStore().sync(); 
        } else {
            Ext.Msg.alert('Error', 'No record selected for editing');
        }
    },


    onDeletePersonnelWidgetClick: function(view, recIndex, cellIndex, item, e, record, button){
        var grid = this.getView();
        grid.getStore().remove(record);
        grid.getStore().sync();
        Ext.Msg.alert('Success', 'Record has been deleted successfully.');
    }





    

});